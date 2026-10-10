import Image from 'next/image'
import React from 'react'

const locations = [
  {
    id: 'san-anselmo',
    name: 'San Anselmo',
    dot: '/images/dot-sa.svg',
    photoLabel: 'Mapa San Anselmo',
    street: '580 Redhill Avenue',
    city: 'San Anselmo, CA 94960',
    phone: '415-256-9411',
    hours: 'Open daily 9 AM – 9 PM',
    directionsClass: 'btn-red',
  },
  {
    id: 'san-rafael',
    name: 'San Rafael',
    dot: '/images/dot-sr.svg',
    photoLabel: 'Mapa San Rafael',
    street: '55 Bellam Blvd',
    city: 'San Rafael, CA 94901',
    phone: '415-457-9520',
    hours: 'Open daily 9 AM – 10 PM',
    directionsClass: 'btn-green',
  },
]

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

const directionsUrl = (street: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}`)}`

export default function HomePage() {
  return (
    <>
      <header className="band-nav">
        <div className="container nav">
          <a aria-label="Taqueria Mi Familia — inicio" href="#home">
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
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#locations">Locations</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href="tel:+14152569411">
              ☎ 415-256-9411
            </a>
            <a className="btn btn-red nav-find" href="#locations">
              Find a Location
            </a>
            <a className="nav-call" href="tel:+14152569411">
              Call us
            </a>
            <button aria-label="Abrir menú" className="nav-burger" type="button">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

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
                    <a className="card-link" href="#menu">
                      SEE MORE&nbsp;&nbsp;→
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="menu-cta">
              <a className="btn btn-gold" href="#menu">
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

            <form action="#contact" className="form">
              <h3 className="display form-title">Send us a message</h3>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    autoComplete="name"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    autoComplete="tel"
                    id="phone"
                    name="phone"
                    placeholder="(415) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  autoComplete="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                  type="email"
                />
              </div>
              <div className="field">
                <label htmlFor="location">Location</label>
                <select defaultValue="" id="location" name="location">
                  <option disabled value="">
                    Choose San Anselmo or San Rafael
                  </option>
                  <option value="san-anselmo">San Anselmo</option>
                  <option value="san-rafael">San Rafael</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Questions, catering, big family orders…"
                />
              </div>
              <button className="btn btn-red" type="submit">
                Send Message&nbsp;&nbsp;→
              </button>
            </form>
          </div>
        </section>
      </main>

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
    </>
  )
}
