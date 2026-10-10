import Image from 'next/image'
import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { formatPrice, getMeats, getMenu } from '@/lib/menu'

// El menú vive en Payload: se consulta en cada petición, no en el build.
export const dynamic = 'force-dynamic'

export const metadata = {
  description: 'El menú completo de Taqueria Mi Familia: tacos, burritos y favoritos mexicanos.',
  title: 'Menu — Taqueria Mi Familia',
}

export default async function MenuPage() {
  const [sections, meats] = await Promise.all([getMenu(), getMeats()])

  return (
    <>
      <SiteHeader />

      <main className="band-about">
        <div className="container menu-page">
          <div className="menu-page-head">
            <p className="script section-kicker">Our Menu</p>
            <h1 className="display menu-page-title">Come Hungry. Leave Happy.</h1>
          </div>

          {meats.length > 0 && (
            <section aria-labelledby="meats-title" className="meats">
              <h2 className="display meats-title" id="meats-title">
                Carne - Meat
              </h2>
              <p className="meats-text">Choose your meat for any dish made with “meat”.</p>
              <ul className="meats-list">
                {meats.map((meat) => (
                  <li className="meat" key={meat.name}>
                    <span className="meat-name">
                      {meat.name}
                      {meat.sanAnselmoOnly && <abbr title="San Anselmo only"> *</abbr>}
                    </span>
                    {meat.translation && (
                      <span className="meat-translation">{meat.translation}</span>
                    )}
                  </li>
                ))}
              </ul>
              {meats.some((meat) => meat.sanAnselmoOnly) && (
                <p className="meats-note">* San Anselmo only</p>
              )}
            </section>
          )}

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
