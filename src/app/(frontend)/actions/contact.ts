'use server'

import { getPayload } from 'payload'

import { initialContactState, type ContactFormState } from '@/lib/contactForm'
import config from '@/payload.config'

const LOCATIONS = ['san-anselmo', 'san-rafael'] as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const field = (formData: FormData, key: string) => {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export async function submitContact(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    email: field(formData, 'email').slice(0, 200),
    location: field(formData, 'location'),
    message: field(formData, 'message').slice(0, 3000),
    name: field(formData, 'name').slice(0, 120),
    phone: field(formData, 'phone').slice(0, 40),
  }

  // Honeypot: un humano nunca llena este campo. Respondemos "éxito" sin guardar.
  if (field(formData, 'website')) {
    return {
      ...initialContactState,
      message: 'Thanks! We’ll get back to you soon.',
      status: 'success',
    }
  }

  const errors: ContactFormState['errors'] = {}
  if (values.name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email.'
  if (values.message.length < 5) errors.message = 'Please write a short message.'
  if (values.location && !LOCATIONS.includes(values.location as (typeof LOCATIONS)[number])) {
    errors.location = 'Please choose one of our locations.'
  }

  if (Object.keys(errors).length > 0) {
    return { errors, message: 'Please check the highlighted fields.', status: 'error', values }
  }

  try {
    const payload = await getPayload({ config: await config })

    await payload.create({
      collection: 'contact-messages',
      data: {
        email: values.email,
        location: (values.location || undefined) as (typeof LOCATIONS)[number] | undefined,
        message: values.message,
        name: values.name,
        phone: values.phone || undefined,
        status: 'new',
      },
    })
  } catch (error) {
    console.error('No se pudo guardar el mensaje de contacto:', error)
    return {
      errors: {},
      message: 'Something went wrong. Please try again or call us.',
      status: 'error',
      values,
    }
  }

  return {
    ...initialContactState,
    message: 'Thanks! We’ll get back to you soon.',
    status: 'success',
  }
}
