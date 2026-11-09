import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

import { locations } from '@/lib/locations'
import { socialLinks } from '@/lib/site'

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

          {socialLinks.length > 0 && (
            <div className="footer-social">
              <p className="footer-label">FOLLOW US</p>
              {socialLinks.map((link) => (
                <a
                  className="pill"
                  href={link.url}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <p className="footer-compact">
            San Anselmo · 580 Redhill Ave · 415-256-9411
            <br />
            San Rafael · 55 Bellam Blvd · 415-457-9520
          </p>
          {socialLinks.length > 0 && (
            <p className="footer-compact footer-compact-social">
              {socialLinks.map((link, i) => (
                <React.Fragment key={link.label}>
                  {i > 0 && ' · '}
                  <a href={link.url} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          )}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Taqueria Mi Familia. All Rights Reserved. ·{' '}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
          <p className="script footer-script">Hungry? Come see us!</p>
        </div>
      </div>
    </footer>
  )
}
