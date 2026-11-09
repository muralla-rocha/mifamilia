// 404 global: se usa para cualquier URL que no coincida con una ruta.
// No pasa por ningún layout, por eso importa estilos y fuentes aquí.
import type { Metadata } from 'next'
import React from 'react'

import './(frontend)/styles.css'
import { NotFoundPage } from '@/components/StatusPage'
import { fontVariables } from '@/lib/fonts'

export const metadata: Metadata = {
  description: 'We couldn’t find the page you’re looking for.',
  title: 'Page not found — Taqueria Mi Familia',
}

export default function GlobalNotFound() {
  return (
    <html className={fontVariables} lang="en">
      <body>
        <NotFoundPage />
      </body>
    </html>
  )
}
