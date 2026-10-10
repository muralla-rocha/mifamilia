import React from 'react'
import { Fraunces, Oswald, Work_Sans, Yellowtail } from 'next/font/google'
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

export const metadata = {
  description:
    'Taqueria Mi Familia — Real Mexican food, made like family. Tacos, burritos y favoritos mexicanos en San Anselmo y San Rafael, CA.',
  title: 'Taqueria Mi Familia',
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
