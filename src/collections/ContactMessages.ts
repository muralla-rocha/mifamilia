import type { CollectionConfig } from 'payload'

const isAdmin = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: {
    singular: 'Mensaje de contacto',
    plural: 'Mensajes de contacto',
  },
  admin: {
    defaultColumns: ['name', 'email', 'location', 'status', 'createdAt'],
    group: 'Contacto',
    useAsTitle: 'name',
  },
  // Los mensajes se crean únicamente desde el server action del sitio
  // (Local API). Nadie puede crearlos ni leerlos por la API pública.
  access: {
    create: () => false,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  defaultSort: '-createdAt',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'location',
      type: 'select',
      label: 'Sucursal',
      options: [
        { label: 'San Anselmo', value: 'san-anselmo' },
        { label: 'San Rafael', value: 'san-rafael' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Mensaje',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      admin: { position: 'sidebar' },
      defaultValue: 'new',
      index: true,
      label: 'Estado',
      options: [
        { label: 'Nuevo', value: 'new' },
        { label: 'Leído', value: 'read' },
        { label: 'Respondido', value: 'answered' },
      ],
      required: true,
    },
  ],
}
