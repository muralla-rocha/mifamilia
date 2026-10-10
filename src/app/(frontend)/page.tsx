import Image from 'next/image'
import React from 'react'

import { ContactForm } from '@/components/ContactForm'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { directionsUrl, locations } from '@/lib/locations'

const menuCards = [
  {
    id: 'tacos',
    tone: 'card-red',
    title: 'Tacos',
    photoLabel: 'Foto tacos',
    text: 'Choose from favorites like carne asada, al pastor, carnitas, chicken, chorizo, and more.',
    tags: ['Carne asada', 'Al pastor', 'Chorizo'],
  },
  {
    id: 'burritos',
    tone: 'card-gold',
    title: 'Burritos',
    photoLabel: 'Foto burrito',
    text: 'From our classic Regular Burrito to our Super and Jumbo options, made your way with your choice of meat, beans, rice, salsa and more.',
    tags: ['Regular', 'Super', 'Jumbo'],
  },
  {
    id: 'favorites',
    tone: 'card-green',
    title: 'Mexican Favorites',
    photoLabel: 'Foto platillo / Mexican Favorites',
    text: 'Authentic flavors, generous portions, and the comforting food you crave.',
    tags: ['Plates', 'Combos', 'Sides'],
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="band-hero" id="home">
          <div className="container hero">
            <div className="hero-text">
              <p className="script hero-kicker">Hungry? Come see us!</p>
              <h1 className="display hero-title">
                Real Mexican Food. <span>Made Like Family.</span>
              </h1>
              <p className="hero-lead">
                Authentic flavors, fresh ingredients, and recipes made with the same care we’d serve
                at home.
              </p>
              <div className="photo hero-photo-mobile">Foto tacos</div>
              <p className="hero-copy">
                For over 20 years, Taqueria Mi Familia has been bringing the flavors of Mexico to
                Marin County
                <span className="hero-copy-desktop">
                  —one taco, burrito, and family meal at a time
                </span>
                .
              </p>
              <div className="hero-actions">
                <a className="btn btn-red" href="#locations">
                  Find a Location&nbsp;&nbsp;→
                </a>
                <a className="btn btn-outline" href="#menu">
                  View Our Menu
                </a>
              </div>
            </div>

            <div aria-hidden="true" className="collage">
              <div className="collage-back" />
              <div className="photo collage-tacos">Foto tacos</div>
              <div className="photo collage-burrito">Foto burrito</div>
              <div className="collage-badge">
                <img alt="" height={150} src="/images/since-badge.svg" width={150} />
                <div className="collage-badge-text">
                  <span className="since">SINCE</span>
                  <span className="year">1995</span>
                  <span className="city">SAN ANSELMO, CA</span>
                </div>
              </div>
              <div className="collage-open">★ OPEN DAILY · 9 AM</div>
            </div>
          </div>
        </section>

        <section className="band-about" id="about">
          <div className="container about">
            <div className="about-photos">
              <div className="photo about-photo-a">Foto del local / fachada</div>
              <div className="photo about-photo-b">Foto interior / familia</div>
            </div>
            <div className="about-body">
              <p className="eyebrow">About Us</p>
              <h2 className="display about-title">
                A Little Bit of Mexico, A Whole Lot of Family.
              </h2>
              <p className="about-text">
                Taqueria Mi Familia began in 1995 in San Anselmo, California, with a simple idea:
                serve authentic Mexican food in a warm, casual place where everyone feels welcome.
              </p>
              <p className="about-text about-text-secondary">
                More than 20 years later, that same spirit is still at the heart of everything we
                do. From tacos and burritos to traditional Mexican favorites, we prepare our food
                with fresh ingredients, generous portions, and the flavors we grew up loving.
              </p>
              <p className="script about-quote">
                Because at Mi Familia, good food is meant to be shared.
              </p>
              <dl className="stats">
                {[
                  ['1995', 'Since'],
                  ['2', 'Locations'],
                  ['20+', 'Years in Marin'],
                ].map(([value, label]) => (
                  <div className="stat" key={label}>
                    <dd className="display stat-value">{value}</dd>
                    <dt className="stat-label">{label}</dt>
                  </div>
                ))}
              </dl>
              <a className="btn btn-green" href="#menu">
                Get to Know Our Menu&nbsp;&nbsp;→
              </a>
            </div>
          </div>
        </section>

        <section className="band-menu" id="menu">
          <div className="container menu">
            <div className="section-head">
              <p className="script section-kicker">Our Menu</p>
              <h2 className="display menu-title">Come Hungry. Leave Happy.</h2>
              <p className="menu-lead">
                From your favorite tacos to a loaded burrito, there’s something for everyone at Mi
                Familia.
              </p>
            </div>

            <div className="cards">
              {menuCards.map((card) => (
                <article className={`card ${card.tone}`} key={card.id}>
                  <div className="photo">{card.photoLabel}</div>
                  <div className="card-bar" />
                  <div className="card-body">
                    <h3 className="display card-title">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                    <ul className="tags" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {card.tags.map((tag) => (
                        <li className="tag" key={tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <a className="card-link" href="/menu">
                      SEE MORE&nbsp;&nbsp;→
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="menu-cta">
              <a className="btn btn-gold" href="/menu">
                <span className="menu-cta-long">Explore the Full Menu&nbsp;&nbsp;→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="band-locations" id="locations">
          <div className="container locations">
            <div className="section-head">
              <p className="script section-kicker">Our Locations</p>
              <h2 className="display locations-title">Come See Us</h2>
              <p className="locations-lead">Two locations. Same Mi Familia spirit.</p>
            </div>

            <div className="location-grid">
              {locations.map((loc) => (
                <article className="location" key={loc.id}>
                  <div className="photo">{loc.photoLabel}</div>
                  <div className="location-body">
                    <h3 className="display location-name">
                      <img alt="" height={14} src={loc.dot} width={14} />
                      {loc.name}
                    </h3>
                    <address className="location-address" style={{ fontStyle: 'normal' }}>
                      {loc.street}
                      <br />
                      {loc.city}
                    </address>
                    <a className="location-phone" href={`tel:+1${loc.phone.replace(/-/g, '')}`}>
                      ☎&nbsp;&nbsp;{loc.phone}
                    </a>
                    <p className="location-hours">⏰&nbsp;&nbsp;{loc.hours}</p>
                    <div className="location-actions">
                      <a
                        className={`btn ${loc.directionsClass}`}
                        href={directionsUrl(loc.street, loc.city)}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Get Directions&nbsp;&nbsp;→
                      </a>
                      <a className="btn btn-outline" href={`tel:+1${loc.phone.replace(/-/g, '')}`}>
                        Call Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band-contact" id="contact">
          <div className="container contact">
            <div className="contact-info">
              <p className="script section-kicker">Get in Touch</p>
              <h2 className="display contact-title">Your Table Is Waiting.</h2>
              <p className="contact-text">
                Whether you’re stopping by for a quick taco, grabbing dinner for the family, or
                simply craving authentic Mexican food...
              </p>
              <p className="display contact-quote">
                Come hungry. Come as you are. Come to Mi Familia.
              </p>
              <div className="contact-brand">
                <strong>Taqueria Mi Familia</strong>
                <span>Authentic Mexican food. Family-style hospitality.</span>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
