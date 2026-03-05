import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.omniaservices.co.uk';

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/',                            priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/ai-engineering',             priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/digital-transformation',     priority: 0.85, changeFrequency: 'monthly' },
  { path: '/digital-process-automation', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/cloud-migration',            priority: 0.85, changeFrequency: 'monthly' },
  { path: '/data-analytics',             priority: 0.85, changeFrequency: 'monthly' },
  { path: '/domain-consulting',          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ormb',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vision-plus',               priority: 0.8, changeFrequency: 'monthly' },
  { path: '/smart-investigate',          priority: 0.8, changeFrequency: 'monthly' },
  { path: '/msd365',                     priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact',                    priority: 0.7, changeFrequency: 'monthly' },
  { path: '/career',                     priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
