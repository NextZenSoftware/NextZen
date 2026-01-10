import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nextzensoftware.com'

  // Static pages with optimized priorities for SEO
  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/about',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/services',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/web-development',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/app-development',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/cloud-solutions',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/seo-optimization',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/ui-ux-design',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/pricing',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/case-studies',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/careers',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/blog',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/privacy',
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    },
    {
      route: '/terms',
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  return routes
}
