import { getPayload } from 'payload'

import config from '@/payload.config'
import type { Media } from '@/payload-types'

export type MenuDish = {
  id: string
  name: string
  price: number | null
  description: string | null
  image: { url: string; alt: string } | null
}

export type MenuSection = {
  id: string
  name: string
  description: string | null
  dishes: MenuDish[]
}

const toImage = (image: number | Media | null | undefined) =>
  image && typeof image === 'object' && image.url ? { url: image.url, alt: image.alt || '' } : null

/**
 * Menú agrupado por categoría, únicamente con lo que viene de Payload. Las
 * categorías van por `order` y los platillos en el orden en que se dieron de
 * alta (`createdAt`). Las categorías sin platillos no se incluyen.
 */
export async function getMenu(): Promise<MenuSection[]> {
  try {
    const payload = await getPayload({ config: await config })

    const [categories, items] = await Promise.all([
      payload.find({ collection: 'menu-categories', limit: 100, pagination: false, sort: 'order' }),
      payload.find({
        collection: 'menu-items',
        depth: 1,
        limit: 1000,
        pagination: false,
        sort: 'createdAt',
      }),
    ])

    return categories.docs
      .map<MenuSection>((category) => ({
        id: String(category.id),
        name: category.name,
        description: category.description ?? null,
        dishes: items.docs
          .filter((item) =>
            typeof item.category === 'object'
              ? item.category.id === category.id
              : item.category === category.id,
          )
          .map<MenuDish>((item) => ({
            id: String(item.id),
            name: item.name,
            price: item.price,
            description: item.description ?? null,
            image: toImage(item.image),
          })),
      }))
      .filter((section) => section.dishes.length > 0)
  } catch (error) {
    console.error('No se pudo cargar el menú desde Payload:', error)
    return []
  }
}

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(price)

export type MenuMeat = {
  name: string
  translation: string | null
  sanAnselmoOnly: boolean
}

/** Carnes disponibles (global `menu-settings`), en el orden capturado en Payload. */
export async function getMeats(): Promise<MenuMeat[]> {
  try {
    const payload = await getPayload({ config: await config })
    const settings = await payload.findGlobal({ slug: 'menu-settings' })

    return (settings.meats ?? []).map((meat) => ({
      name: meat.name,
      sanAnselmoOnly: Boolean(meat.sanAnselmoOnly),
      translation: meat.translation ?? null,
    }))
  } catch (error) {
    console.error('No se pudieron cargar las carnes desde Payload:', error)
    return []
  }
}
