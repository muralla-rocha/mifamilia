import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { locations } from '@/lib/locations'
import { site } from '@/lib/site'

export const metadata = {
  description: 'How Taqueria Mi Familia collects, uses and protects your information.',
  title: 'Privacy Policy — Taqueria Mi Familia',
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <main className="band-about">
        <article className="legal">
          <h1 className="display">Privacy Policy</h1>
          <p className="legal-updated">Last updated: November 8, 2026</p>

          <p>
            This policy explains what information {site.name} (“we”, “us”) collects through this
            website, how we use it, and the choices you have.
          </p>

          <h2 className="display">Information we collect</h2>
          <p>
            We only collect information you choose to send us through the contact form: your name,
            email address, phone number (optional), preferred location (optional) and your message.
          </p>
          <p>
            Like most websites, our hosting provider may automatically log technical data such as IP
            address, browser type and the pages requested. We use it to keep the site secure and
            working, not to identify you.
          </p>

          <h2 className="display">How we use it</h2>
          <ul>
            <li>To read and reply to your message.</li>
            <li>To protect the site from spam and abuse.</li>
          </ul>
          <p>
            We do not sell your personal information, we do not share it for advertising, and we do
            not use it for marketing emails unless you ask us to.
          </p>

          <h2 className="display">Who processes it for us</h2>
          <p>
            We use service providers to run the site: web hosting and database services, an email
            service to notify our team when a message arrives, and an anti-spam service to confirm
            that a form was filled out by a person. They may only use your information to provide
            those services to us.
          </p>

          <h2 className="display">How long we keep it</h2>
          <p>
            We keep contact messages only as long as needed to answer them and for our records, and
            we delete them when you ask.
          </p>

          <h2 className="display">Your choices and rights</h2>
          <p>
            You can ask us to tell you what personal information we have about you, to correct it,
            or to delete it. California residents have these rights under the California Consumer
            Privacy Act, and we will not treat you differently for using them. To make a request,
            contact us using the details below.
          </p>

          <h2 className="display">Children</h2>
          <p>
            This site is not directed to children under 13, and we do not knowingly collect their
            information.
          </p>

          <h2 className="display">Changes to this policy</h2>
          <p>If we change this policy we will update the date at the top of this page.</p>

          <h2 className="display">Contact us</h2>
          <p>
            {site.contactEmail && (
              <>
                Email: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
                <br />
              </>
            )}
            {locations.map((loc) => (
              <React.Fragment key={loc.id}>
                {loc.name}: {loc.street}, {loc.city} ·{' '}
                <a href={`tel:+1${loc.phone.replace(/-/g, '')}`}>{loc.phone}</a>
                <br />
              </React.Fragment>
            ))}
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
