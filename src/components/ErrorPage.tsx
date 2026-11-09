import React from 'react'

import { locations } from '@/lib/locations'

import { StatusPage } from './StatusPage'

export function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <StatusPage
      actions={
        <>
          <button className="btn btn-red" onClick={() => retry()} type="button">
            Try Again
          </button>
          <a className="btn btn-outline" href="/">
            Back to Home
          </a>
        </>
      }
      code="500"
      kicker="Something burned in the kitchen"
      text={`Something went wrong on our end. Please try again, or call us: ${locations
        .map((loc) => `${loc.name} ${loc.phone}`)
        .join(' · ')}.`}
      title="We’ll be right back."
    />
  )
}
