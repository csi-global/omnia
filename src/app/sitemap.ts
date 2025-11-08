import type { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

/**
 * Add your public routes here. Group segments like (legacy) are not part of the URL.
 */
const publicPaths: string[] = [
  '/',
  '/contact',
  '/career',
  // Managed products
  '/msd365',
  '/ormb',
  '/smart-investigate',
  '/vision-plus',
  // Professional services
  '/cloud-migration',
  '/data-analytics',
  '/digital-process-automation',
  '/digital-transformation',
  '/domain-consulting',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Always use the canonical domain
  const baseUrl = 'https://www.omniaservices.co.uk';
  const lastModified = new Date();
  return publicPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
