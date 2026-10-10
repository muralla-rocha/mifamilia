import Image from 'next/image'
import React from 'react'

import { MobileNav } from './MobileNav'

export function SiteHeader() {
  return (
    <header className="band-nav">
      <div className="container nav">
        <a aria-label="Taqueria Mi Familia — inicio" href="/#home">
          <Image
            alt="Taqueria Mi Familia"
            className="nav-logo"
            height={85}
            priority
            src="/images/logo-nav.png"
            width={170}
          />
        </a>
        <nav aria-label="Principal" className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/menu">Menu</a>
          <a href="/#locations">Locations</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="nav-cta">
          <a className="nav-phone" href="tel:+14152569411">
            ☎ 415-256-9411
          </a>
          <a className="btn btn-red nav-find" href="/#locations">
            Find a Location
          </a>
          <a className="nav-call" href="tel:+14152569411">
            Call us
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
