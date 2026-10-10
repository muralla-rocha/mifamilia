import type { CollectionConfig } from 'payload'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  labels: {
    singular: 'Platillo',
    plural: 'Platillos',
  },
  admin: {
    defaultColumns: ['name', 'category', 'price', 'image'],
    group: 'Menú',
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  defaultSort: 'createdAt',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Precio en USD, por ejemplo 12.50',
        step: 0.01,
      },
      label: 'Precio',
      min: 0,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Imagen',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'relationship',
      index: true,
      label: 'Categoría',
      relationTo: 'menu-categories',
      required: true,
    },
  ],
}
