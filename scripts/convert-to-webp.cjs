#!/usr/bin/env node
'use strict';

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
let sharp;

async function importSharp() {
  try {
    sharp = require('sharp');
  } catch (error) {
    console.error(
      'Sharp is not installed. Install it with: pnpm add -D sharp (or npm i -D sharp).'
    );
    process.exit(1);
  }
}

/**
 * Recursively gather file paths under a directory.
 * @param {string} rootDir
 * @returns {Promise<string[]>}
 */
async function collectFilesRecursively(rootDir) {
  const entries = await fsp.readdir(rootDir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      const nested = await collectFilesRecursively(fullPath);
      files.push(...nested);
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Convert a single image to WebP if needed.
 * @param {string} srcPath
 * @param {number} quality
 * @returns {Promise<boolean>} true if converted, false if skipped
 */
async function convertToWebp(srcPath, quality) {
  const ext = path.extname(srcPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false;

  const destPath = srcPath.replace(/\.(jpe?g|png)$/i, '.webp');

  // Skip if destination exists and is newer or same mtime
  try {
    const [srcStat, destStat] = await Promise.all([
      fsp.stat(srcPath),
      fsp.stat(destPath).catch(() => null),
    ]);
    if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) {
      return false; // up-to-date
    }
  } catch {
    // proceed
  }

  await sharp(srcPath).webp({ quality }).toFile(destPath);
  return true;
}

function parseArgs(argv) {
  const args = { dir: undefined, quality: 82 };
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if ((token === '--quality' || token === '-q') && argv[i + 1]) {
      const q = Number(argv[++i]);
      if (!Number.isNaN(q) && q >= 1 && q <= 100) args.quality = q;
      continue;
    }
    if (token === '--dir' && argv[i + 1]) {
      args.dir = argv[++i];
      continue;
    }
    if (!token.startsWith('-') && !args.dir) {
      args.dir = token; // positional directory argument
      continue;
    }
  }
  return args;
}

async function main() {
  await importSharp();

  const { dir, quality } = parseArgs(process.argv);
  if (!dir) {
    console.error('Usage: node scripts/convert-to-webp.cjs /path/to/folder [-q 82]');
    process.exit(1);
  }
  const targetDir = path.resolve(dir);

  if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }

  console.log(`Converting images under: ${targetDir}`);
  console.log(`Quality: ${quality}`);

  const allFiles = await collectFilesRecursively(targetDir);
  const candidates = allFiles.filter((p) => /\.(jpe?g|png)$/i.test(path.basename(p)));

  let converted = 0;
  let skipped = 0;

  for (const file of candidates) {
    try {
      const didConvert = await convertToWebp(file, quality);
      if (didConvert) {
        converted += 1;
        console.log(`✓ ${path.relative(targetDir, file)} → .webp`);
      } else {
        skipped += 1;
      }
    } catch (err) {
      console.error(`Error converting ${file}:`, err && err.message ? err.message : err);
    }
  }

  console.log(`Done. Converted: ${converted}, Skipped: ${skipped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
