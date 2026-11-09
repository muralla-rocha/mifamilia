import { Fraunces, Oswald, Work_Sans, Yellowtail } from 'next/font/google'

export const fraunces = Fraunces({
  axes: ['SOFT', 'WONK'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const oswald = Oswald({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['600'],
})

export const workSans = Work_Sans({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-work-sans',
})

export const yellowtail = Yellowtail({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-yellowtail',
  weight: '400',
})

export const fontVariables = `${fraunces.variable} ${oswald.variable} ${workSans.variable} ${yellowtail.variable}`
