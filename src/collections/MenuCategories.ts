import type { CollectionConfig } from 'payload'

export const MenuCategories: CollectionConfig = {
  slug: 'menu-categories',
  labels: {
    singular: 'Categoría',
    plural: 'Categorías',
  },
  admin: {
    defaultColumns: ['name', 'order', 'description'],
    group: 'Menú',
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Las categorías se muestran de menor a mayor.',
      },
      defaultValue: 0,
      index: true,
      label: 'Orden',
      required: true,
    },
  ],
}
