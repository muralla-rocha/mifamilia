import React from 'react'

import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

// Página de estado (404, error) con la marca del sitio.
export function StatusPage({
  actions,
  code,
  kicker,
  text,
  title,
}: {
  actions: React.ReactNode
  code: string
  kicker: string
  text: string
  title: string
}) {
  return (
    <>
      <SiteHeader />
      <main className="band-about">
        <div className="container status-page">
          <p aria-hidden="true" className="display status-code">
            {code}
          </p>
          <p className="script section-kicker">{kicker}</p>
          <h1 className="display status-title">{title}</h1>
          <p className="status-text">{text}</p>
          <div className="status-actions">{actions}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export function NotFoundPage() {
  return (
    <StatusPage
      actions={
        <>
          <a className="btn btn-red" href="/">
            Back to Home&nbsp;&nbsp;→
          </a>
          <a className="btn btn-outline" href="/menu">
            View Our Menu
          </a>
        </>
      }
      code="404"
      kicker="Oops!"
      text="We couldn’t find the page you’re looking for. It may have moved, or the link might be wrong."
      title="This table isn’t set."
    />
  )
}
