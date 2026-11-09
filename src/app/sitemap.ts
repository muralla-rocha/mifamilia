import type { MetadataRoute } from 'next'

import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { priority: 1, url: siteUrl },
    { priority: 0.8, url: `${siteUrl}/menu` },
    { priority: 0.3, url: `${siteUrl}/privacy` },
  ]
}
