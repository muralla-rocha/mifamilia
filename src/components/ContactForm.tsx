'use client'

import React, { useActionState } from 'react'

import { submitContact } from '@/app/(frontend)/actions/contact'
import { initialContactState, type ContactFormState } from '@/lib/contactForm'

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    submitContact,
    initialContactState,
  )

  const { errors, values } = state
  const describedBy = (key: keyof typeof errors) => (errors[key] ? `${key}-error` : undefined)

  return (
    <form action={formAction} className="form" noValidate>
      <h3 className="display form-title">Send us a message</h3>

      {state.status !== 'idle' && (
        <p
          className={`form-status form-status-${state.status}`}
          role={state.status === 'error' ? 'alert' : 'status'}
        >
          {state.message}
        </p>
      )}

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            aria-describedby={describedBy('name')}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            defaultValue={values.name}
            id="name"
            maxLength={120}
            name="name"
            placeholder="Your name"
            required
          />
          {errors.name && (
            <span className="field-error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            autoComplete="tel"
            defaultValue={values.phone}
            id="phone"
            maxLength={40}
            name="phone"
            placeholder="(415) 000-0000"
            type="tel"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          aria-describedby={describedBy('email')}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          defaultValue={values.email}
          id="email"
          maxLength={200}
          name="email"
          placeholder="you@email.com"
          required
          type="email"
        />
        {errors.email && (
          <span className="field-error" id="email-error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="location">Location</label>
        <select defaultValue={values.location} id="location" name="location">
          <option value="">Choose San Anselmo or San Rafael</option>
          <option value="san-anselmo">San Anselmo</option>
          <option value="san-rafael">San Rafael</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          aria-describedby={describedBy('message')}
          aria-invalid={Boolean(errors.message)}
          defaultValue={values.message}
          id="message"
          maxLength={3000}
          name="message"
          placeholder="Questions, catering, big family orders…"
          required
        />
        {errors.message && (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>

      {/* Honeypot anti-spam: oculto para personas, los bots suelen llenarlo. */}
      <div aria-hidden="true" className="form-hp">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" name="website" tabIndex={-1} />
      </div>

      <button className="btn btn-red" disabled={pending} type="submit">
        {pending ? 'Sending…' : 'Send Message  →'}
      </button>
    </form>
  )
}
