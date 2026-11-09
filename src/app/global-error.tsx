'use client'

// Último recurso: errores en el root layout. Reemplaza al layout, así que define
// su propio <html> y carga estilos y fuentes.
import React, { useEffect } from 'react'

import './(frontend)/styles.css'
import { ErrorPage } from '@/components/ErrorPage'
import { fontVariables } from '@/lib/fonts'

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html className={fontVariables} lang="en">
      <body>
        <ErrorPage retry={retry} />
      </body>
    </html>
  )
}
