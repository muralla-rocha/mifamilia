import type { Metadata } from 'next'
import React from 'react'
import { Fraunces, Oswald, Work_Sans, Yellowtail } from 'next/font/google'
import { siteUrl } from '@/lib/site'
import './styles.css'

const fraunces = Fraunces({
  axes: ['SOFT', 'WONK'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const oswald = Oswald({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['600'],
})

const workSans = Work_Sans({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

const yellowtail = Yellowtail({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-yellowtail',
  weight: '400',
})

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
    <html
      className={`${fraunces.variable} ${oswald.variable} ${workSans.variable} ${yellowtail.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  )
}
