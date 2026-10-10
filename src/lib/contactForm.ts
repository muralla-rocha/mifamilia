// Tipos y estado inicial compartidos entre el server action y el formulario.
// Vive fuera del archivo 'use server', que solo puede exportar funciones async.

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  values: { name: string; phone: string; email: string; location: string; message: string }
  errors: Partial<Record<'name' | 'email' | 'message' | 'location', string>>
}

export const initialContactState: ContactFormState = {
  errors: {},
  message: '',
  status: 'idle',
  values: { email: '', location: '', message: '', name: '', phone: '' },
}
