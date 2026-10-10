import type { GlobalConfig } from 'payload'

export const MenuSettings: GlobalConfig = {
  slug: 'menu-settings',
  label: 'Ajustes del menú',
  admin: {
    group: 'Menú',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'meats',
      type: 'array',
      admin: {
        description:
          'Carnes disponibles para los platillos que se preparan con "meat". Se muestran como guía en /menu.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre',
          required: true,
        },
        {
          name: 'translation',
          type: 'text',
          admin: { description: 'Por ejemplo: Beef Steak' },
          label: 'Traducción / descripción',
        },
        {
          name: 'sanAnselmoOnly',
          type: 'checkbox',
          defaultValue: false,
          label: 'Solo en San Anselmo',
        },
      ],
      label: 'Carnes',
    },
  ],
}
