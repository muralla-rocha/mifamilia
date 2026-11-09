import { locations } from '@/lib/locations'
import { site, siteUrl, socialLinks } from '@/lib/site'

// Datos estructurados (schema.org) de los dos locales, para Google.
export function restaurantJsonLd() {
  const data = locations.map((loc) => ({
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteUrl}/#${loc.id}`,
    name: `${site.name} — ${loc.name}`,
    url: siteUrl,
    image: `${siteUrl}/images/og.jpg`,
    logo: `${siteUrl}/images/logo-nav.png`,
    telephone: `+1${loc.phone.replace(/-/g, '')}`,
    servesCuisine: 'Mexican',
    hasMenu: `${siteUrl}/menu`,
    foundingDate: '1995',
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.street,
      addressLocality: loc.locality,
      addressRegion: 'CA',
      postalCode: loc.postalCode,
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: loc.opens,
      closes: loc.closes,
    },
    ...(socialLinks.length > 0 && { sameAs: socialLinks.map((link) => link.url) }),
  }))

  // Se escapa "<" para que el JSON nunca pueda cerrar la etiqueta <script>.
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
