'use client'

import React, { useEffect, useState } from 'react'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/menu', label: 'Menu' },
  { href: '/#locations', label: 'Locations' },
  { href: '/#contact', label: 'Contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="nav-burger"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav aria-label="Menú móvil" className="mobile-menu" data-open={open} id="mobile-menu">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-red" href="/#locations" onClick={() => setOpen(false)}>
          Find a Location
        </a>
      </nav>
    </>
  )
}
