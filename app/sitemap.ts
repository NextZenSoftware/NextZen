import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nextzensoftware.com'

  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/web-development',
    '/app-development',
    '/cloud-solutions',
    '/seo-optimization',
    '/ui-ux-design',
    '/pricing',
    '/case-studies',
    '/careers',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
