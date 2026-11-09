// Datos del sitio que cambian por entorno. Los enlaces a redes se configuran
// con variables de entorno: si no hay URL, el botón simplemente no se muestra.
// URL pública del sitio (sin barra final). En Vercel se usa el dominio de producción
// si no se definió NEXT_PUBLIC_SERVER_URL.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export const site = {
  name: 'Taqueria Mi Familia',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
}

export const socialLinks = [
  { label: 'Instagram', url: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { label: 'Facebook', url: process.env.NEXT_PUBLIC_FACEBOOK_URL },
].filter((link): link is { label: string; url: string } => Boolean(link.url))
