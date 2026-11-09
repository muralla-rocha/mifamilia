'use client'

import React, { useEffect } from 'react'

import { ErrorPage } from '@/components/ErrorPage'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorPage retry={retry} />
}
