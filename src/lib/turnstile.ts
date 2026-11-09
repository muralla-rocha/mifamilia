// Verificación de Cloudflare Turnstile. Solo se exige si TURNSTILE_SECRET_KEY existe.
export const turnstileEnabled = () => Boolean(process.env.TURNSTILE_SECRET_KEY)

export async function verifyTurnstile(token: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (!token) return false

  const body = new URLSearchParams({ response: token, secret })
  if (ip) body.set('remoteip', ip)

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body,
      method: 'POST',
    })
    const result = (await response.json()) as { success?: boolean }
    return result.success === true
  } catch (error) {
    console.error('No se pudo verificar Turnstile:', error)
    return false
  }
}
