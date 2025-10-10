import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

/**
 * Add your public routes here. Group segments like (legacy) are not part of the URL.
 */
const publicPaths: string[] = [
  '/',
  '/contact',
  '/career',
  // Legacy services
  '/cloud-assessment',
  '/cyber-security',
  '/it-consulting',
  '/managed-cloud-desk',
  '/managed-microsoft-365',
  '/managed-microsoft-azure',
  '/sharepoint-development',
  '/surface-as-a-service',
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
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') ?? hdrs.get('host') ?? 'omniaservices.co.uk';
  const proto = hdrs.get('x-forwarded-proto') ?? 'https';
  const baseUrl = `${proto}://${host}`;
  const lastModified = new Date();
  return publicPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
