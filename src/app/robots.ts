import type { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Always use the canonical domain
  const base = 'https://www.omniaservices.co.uk';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/cloud-assessment',
          '/cyber-security',
          '/it-consulting',
          '/managed-cloud-desk',
          '/managed-microsoft-365',
          '/managed-microsoft-azure',
          '/sharepoint-development',
          '/surface-as-a-service',
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
