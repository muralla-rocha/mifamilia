// Aviso por correo cuando llega un mensaje de contacto (Resend, vía fetch).
// Si faltan las variables de entorno no hace nada: el mensaje ya está en Payload.

type ContactNotification = {
  name: string
  email: string
  phone?: string
  location?: string
  message: string
}

export async function sendContactNotification(data: ContactNotification) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) return

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '-'}`,
    `Location: ${data.location || '-'}`,
    '',
    data.message,
  ].join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    body: JSON.stringify({
      from,
      reply_to: data.email,
      subject: `New message from ${data.name.replace(/[\r\n]+/g, ' ')}`,
      text,
      to: to.split(',').map((address) => address.trim()),
    }),
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Resend respondió ${response.status}: ${await response.text()}`)
  }
}
