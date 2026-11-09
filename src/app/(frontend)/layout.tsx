import type { Metadata } from 'next'
import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { fontVariables } from '@/lib/fonts'
import { siteUrl } from '@/lib/site'
import './styles.css'

const description =
  'Taqueria Mi Familia — Real Mexican food, made like family. Tacos, burritos and Mexican favorites in San Anselmo and San Rafael, CA.'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    description,
    images: [
      {
        alt: 'Carne asada tacos from Taqueria Mi Familia',
        height: 630,
        url: '/images/og.jpg',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: 'Taqueria Mi Familia',
    title: 'Taqueria Mi Familia — Real Mexican Food. Made Like Family.',
    type: 'website',
  },
  title: {
    default: 'Taqueria Mi Familia — Mexican Food in San Anselmo & San Rafael',
    template: '%s — Taqueria Mi Familia',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: ['/images/og.jpg'],
    title: 'Taqueria Mi Familia — Real Mexican Food. Made Like Family.',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html className={fontVariables} lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
