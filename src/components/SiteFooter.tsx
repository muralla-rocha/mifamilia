import Image from 'next/image'
import React from 'react'

import { locations } from '@/lib/locations'

export function SiteFooter() {
  return (
    <footer className="band-footer">
      <div className="container footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              alt="Taqueria Mi Familia"
              className="footer-logo"
              height={120}
              src="/images/logo-footer.png"
              width={240}
            />
            <p className="footer-tagline">Authentic Mexican food. Family-style hospitality.</p>
          </div>

          {locations.map((loc, i) => (
            <div className="footer-col" key={loc.id}>
              <p className="footer-label">{i === 0 ? 'VISIT US' : ' '}</p>
              <p className="display footer-city">{loc.name}</p>
              <address className="footer-address">
                {loc.street}
                <br />
                {loc.city}
                <br />
                {loc.phone}
              </address>
            </div>
          ))}

          <div className="footer-social">
            <p className="footer-label">FOLLOW US</p>
            <a
              className="pill"
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="pill"
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </div>

          <p className="footer-compact">
            San Anselmo · 580 Redhill Ave · 415-256-9411
            <br />
            San Rafael · 55 Bellam Blvd · 415-457-9520
          </p>
          <p className="footer-compact footer-compact-social">Instagram · Facebook</p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Taqueria Mi Familia. All Rights Reserved.</p>
          <p className="script footer-script">Hungry? Come see us!</p>
        </div>
      </div>
    </footer>
  )
}
