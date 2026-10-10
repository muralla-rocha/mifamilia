import Image from 'next/image'
import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { formatPrice, getMenu } from '@/lib/menu'

// El menú vive en Payload: se consulta en cada petición, no en el build.
export const dynamic = 'force-dynamic'

export const metadata = {
  description: 'El menú completo de Taqueria Mi Familia: tacos, burritos y favoritos mexicanos.',
  title: 'Menu — Taqueria Mi Familia',
}

export default async function MenuPage() {
  const sections = await getMenu()

  return (
    <>
      <SiteHeader />

      <main className="band-about">
        <div className="container menu-page">
          <div className="menu-page-head">
            <p className="script section-kicker">Our Menu</p>
            <h1 className="display menu-page-title">Come Hungry. Leave Happy.</h1>
          </div>

          {sections.length === 0 && (
            <p className="menu-empty">Our menu is coming soon. Check back shortly!</p>
          )}

          {sections.map((section) => (
            <section className="menu-section" id={section.id} key={section.id}>
              <div className="menu-section-head">
                <h2 className="display menu-section-title">{section.name}</h2>
                {section.description && <p className="menu-section-text">{section.description}</p>}
              </div>

              <ul className="dish-grid">
                {section.dishes.map((dish) => (
                  <li className="dish" key={dish.id}>
                    {dish.image && (
                      <div className="photo">
                        <Image
                          alt={dish.image.alt || dish.name}
                          className="photo-img"
                          fill
                          sizes="130px"
                          src={dish.image.url}
                        />
                      </div>
                    )}
                    <div className="dish-body">
                      <div className="dish-top">
                        <h3 className="display dish-name">{dish.name}</h3>
                        {dish.price !== null && (
                          <span className="dish-price">{formatPrice(dish.price)}</span>
                        )}
                      </div>
                      {dish.description && <p className="dish-text">{dish.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
