/**
 * Carga el menú del sitio anterior en Payload.
 * Uso: pnpm seed:menu  (usa la DATABASE_URL de .env; para otra base:
 * DATABASE_URL=... pnpm seed:menu)
 *
 * Es idempotente: si una categoría o un platillo (mismo nombre dentro de la
 * misma categoría) ya existe, no se duplica ni se sobrescribe.
 */
import type { Payload } from 'payload'
import { getPayload } from 'payload'

import config from '@/payload.config'

type Dish = [name: string, price: number, description?: string]

type Category = {
  name: string
  order: number
  description?: string
  dishes: Dish[]
}

const categories: Category[] = [
  {
    name: 'Burritos',
    order: 1,
    description:
      'From our classic Regular Burrito to our Super and Jumbo options, made your way with your choice of meat, beans, rice, salsa and more.',
    dishes: [
      ['Regular Burrito', 10.75, 'meat, pinto beans, rice, salsa'],
      ['Super Burrito', 12.45, 'sour cream, cheese, meat, beans, rice, salsa, guacamole'],
      [
        'Jumbo Burrito',
        12.99,
        'lettuce, tomato, sour cream, cheese, salsa, guacamole, meat, beans, rice',
      ],
      ['Regular Beef Burrito', 12.25, 'Beef, pinto beans, rice, salsa'],
      [
        'Super Beef Burrito',
        13.75,
        'Same as regular beef burrito plus guacamole, cheese, and sour cream.',
      ],
      ['Regular Shrimp Burrito', 13.99, 'shrimp, beans, rice, salsa, and bell peppers'],
      [
        'Super Shrimp Burrito',
        14.99,
        'shrimp, beans, rice, salsa, bell peppers, guacamole, sour cream, and Cheese',
      ],
      ['Regular Vegetarian Burrito', 8.95, '(Same as regular burrito without meat)'],
      ['Super Vegetarian Burrito', 10.55, '(Same as super burrito without meat)'],
      [
        'Wet Burrito',
        1.65,
        'Your choice of burrito topped with melted cheese and red chile sauce. $1.65 added to price of burrito of choice.',
      ],
      ['Baby Burrito', 6.19, 'cheese and refried beans'],
      ['Regular Fish Burrito', 13.99, 'fish, rice, beans, salsa'],
      ['Super Fish Burrito', 14.99, 'Same as regular plus guacamole, sour cream, and cheese'],
      ['Regular Lengua Burrito', 13.99, 'Beef tongue, pinto beans, rice, salsa'],
      ['Super Lengua Burrito', 14.99, 'Same as regular plus guacamole, cheese and sour cream'],
    ],
  },
  {
    name: 'Tacos',
    order: 2,
    description:
      'Choose from favorites like carne asada, al pastor, carnitas, chicken, chorizo, and more.',
    dishes: [
      ['Regular Taco', 3.49, 'meat, cilantro, onions and salsa'],
      ['Shrimp Taco', 4.7, 'shrimp, guacamole, sour cream, lettuce'],
      ['Vegetarian Taco', 4.69, 'beans, rice, cheese, guacamole, sour cream, lettuce, tomato'],
      [
        'Taco Salad',
        12.99,
        'Meat, beans, rice, guacamole, sour cream, cheese, lettuce, salsa and flour shell tortilla',
      ],
      ['Taco de Lengua', 4.3, 'beef tongue with cilantro, onion, and salsa'],
      ['Fish Taco', 4.69, 'Fish, lettuce, cheese, and salsa'],
      ['Quesabirria', 5.2, 'Birria with melted cheese (Available in San Anselmo location only)'],
      ['Steak Taco', 3.89, 'Steak, cilantro, onions and salsa'],
    ],
  },
  {
    name: 'A la Carta',
    order: 3,
    dishes: [
      ['Corn Quesadilla', 2.9, '($5.49 with meat)'],
      ['Flour Quesadilla', 3.75, '($6.49 with meat)'],
      ['Super Flour Quesadilla', 11.99, 'meat, cheese, guacamole, and sour cream'],
      ['Enchilada', 4.89, 'With choice of meat'],
      ['Chile Relleno', 5.99, 'stuffed pepper'],
      [
        'Tostada',
        7.99,
        'Choice of meat, rice, beans, cheese, sour cream, guacamole, lettuce, tomatoes, and salsa',
      ],
      [
        'Tacos Dorados',
        12.49,
        'Five crispy tacos with lettuce and tomato sauce with choice of chicken, beef or pork',
      ],
      ['Nachos', 9.99, 'cheese, guacamole, sour cream, salsa and refried beans'],
      ['Super Nachos', 13.99, 'meat, salsa, cheese, sour cream, guacamole, refried beans'],
      ['Shrimp Nachos', 14.99, 'Same as regular nachos plus shrimp and bell peppers'],
      ['Torta Regular', 9.99, 'meat, guacamole, sour cream, lettuce, tomatoes'],
      ['Tamal', 4.19, 'Chicken or pork'],
      ['Menudo', 14.99, '(Weekends only) Beef tripe stew'],
      ['Caldo de Res', 16.95, 'Beef stew'],
      ['Torta Ahogada', 9.99, 'fried pork with refried beans, onions, and salsa on top'],
      [
        'Torta de Milanesa',
        12.49,
        'meat, sour cream, avocado, lettuce, onion, jalapeños, and tomatoes',
      ],
      [
        'Sope (1)',
        5.29,
        'refried beans, guacamole, sour cream, cheese, lettuce, salsa, and choice of meat',
      ],
      [
        'Sopes (3)',
        14.99,
        '3 sopes - refried beans, guacamole, sour cream, cheese, lettuce, salsa, and choice of meat',
      ],
    ],
  },
  {
    name: 'Sea Food',
    order: 4,
    dishes: [
      ['Coctel de Camaron', 16.75, 'Shrimp cocktail'],
      [
        'Camarones Ala Plancha',
        18.45,
        'Grilled shrimp, beans, rice, bell peppers, guacamole, sour cream, lettuce, tortillas',
      ],
      [
        'Camarones Ala Diabla',
        18.45,
        '*Spicy* Grilled shrimp, beans, rice, guacamole, sour cream, lettuce, tortillas',
      ],
      [
        'Camarones Rancheros',
        18.45,
        'Shrimp, beans, jalapeños, onions, tomatoes, guacamole, sour cream, lettuce, tortillas',
      ],
      [
        'Camarones Empanizados',
        18.45,
        'Butterfly shrimp, rice, beans, guacamole, sour cream, lettuce, tortillas',
      ],
      [
        'Mojarra Frita',
        18.45,
        'Fried tilapia, beans, rice, guacamole, sour cream, lettuce, tortillas',
      ],
      ['Tostada de Ceviche', 5.19],
      ['Caldo de Camaron', 16.95, 'Shrimp stew'],
      [
        'Caldo 7 Mares',
        19.95,
        'stew with shrimp, crab, scallops, clams, mussels, fish, vegetables',
      ],
      ['Caldo de Pescado', 16.95, 'Fish stew with vegetables'],
      [
        'Campechana',
        17.99,
        'Octopus and shrimp with tomatoes, cilantro, avocado, onions, and ketchup',
      ],
    ],
  },
  {
    name: 'Specials',
    order: 5,
    dishes: [
      [
        'Combination Plate - 1 item',
        11.55,
        'served with rice, refried beans, lettuce and tomatoes and your choice of the following items: Enchilada - Tamal - Taco - Chile Relleno',
      ],
      [
        'Combination Plate - 2 items',
        13.55,
        'Served with rice, refried beans, lettuce and tomatoes and your choice of the following items: Enchilada - Tamal - Taco - Chile Relleno',
      ],
      [
        'Combination Plate - 3 items',
        15.55,
        'served with rice, refried beans, lettuce and tomatoes and your choice of the following items: Enchilada - Tamal - Taco - Chile Relleno',
      ],
      [
        'Fajitas',
        17.95,
        'Chicken or beef with rice, beans, guacamole, sour cream, lettuce, tomato, tortillas',
      ],
      ['Mixed Fajitas', 19.99, 'Chicken and beef'],
      [
        'Carne Asada',
        17.95,
        'Grilled steak with rice, beans, guacamole, sour cream, lettuce, tomatoes, and tortillas',
      ],
      [
        'Chicken Salad',
        11.45,
        'Chicken, lettuce, tomatoes, sweet corn, cheese, avocado, and carrots',
      ],
      [
        'Chorizo con Huevo',
        13.99,
        'Mexican sausage and eggs with beans, rice, guacamole, sour cream, lettuce, and tortillas',
      ],
    ],
  },
  {
    name: 'Extras',
    order: 6,
    description: 'Additional portions',
    dishes: [
      ['Guacamole', 1.45],
      ['Sour Cream', 1.35],
      ['Meat', 4.5],
      ['Beans', 2.9],
      ['Rice', 2.9],
      ['Cheese', 1.35],
      ['Flan', 4.29],
    ],
  },
  {
    name: 'Drinks',
    order: 7,
    dishes: [
      ['Small Aguas Frescas 16 oz', 3.09, 'Horchata or iced hibiscus tea'],
      ['Large Aguas Frescas 24 oz.', 3.59, 'Horchata or iced hibiscus tea'],
      ['Small Fresh Juice 16 oz.', 4.59, 'Orange, carrot or mixed'],
      ['Large Fresh Juice 24 oz.', 5.59, 'Orange, carrot or mixed'],
      ['Jarritos', 3.55, 'Mexican Soda'],
      ['Canned Soda', 2.75],
      ['Mexican Beer', 5.09],
      ['Domestic Beer', 3.9],
      ['Michelada', 7.85],
      ['Bottled Water', 1.5],
      ['Coffee', 2.99],
    ],
  },
]

const meats = [
  { name: 'Carne asada', translation: 'Beef Steak' },
  { name: 'Pollo', translation: 'Shredded Chicken' },
  { name: 'Pollo adobado', translation: 'Marinated Chicken' },
  { name: 'Al Pastor', translation: 'Marinated Pork' },
  { name: 'Chile Verde', translation: 'Green Chile Pork' },
  { name: 'Lengua', translation: 'Beef Tongue' },
  { name: 'Chorizo', translation: 'Mexican Sausage' },
  { name: 'Carnitas', translation: 'Fried Pork' },
  { name: 'Buche', translation: 'Pork Stomach', sanAnselmoOnly: true },
  { name: 'Cabeza', sanAnselmoOnly: true },
]

async function seedCategory(payload: Payload, category: Category) {
  const existing = await payload.find({
    collection: 'menu-categories',
    limit: 1,
    where: { name: { equals: category.name } },
  })

  let id: number
  if (existing.docs[0]) {
    const doc = existing.docs[0]
    id = doc.id
    // Solo completa la descripción si estaba vacía; nunca pisa lo editado.
    if (!doc.description && category.description) {
      await payload.update({
        collection: 'menu-categories',
        data: { description: category.description },
        id,
      })
    }
    console.log(`= categoría existente: ${category.name}`)
  } else {
    const created = await payload.create({
      collection: 'menu-categories',
      data: { description: category.description, name: category.name, order: category.order },
    })
    id = created.id
    console.log(`+ categoría creada: ${category.name}`)
  }

  let created = 0
  for (const [name, price, description] of category.dishes) {
    const found = await payload.find({
      collection: 'menu-items',
      limit: 1,
      where: { and: [{ name: { equals: name } }, { category: { equals: id } }] },
    })
    if (found.docs[0]) continue

    // Secuencial a propósito: el orden de alta (createdAt) define el orden en el sitio.
    await payload.create({
      collection: 'menu-items',
      data: { category: id, description, name, price },
    })
    created++
  }
  console.log(`  ${created} platillos nuevos de ${category.dishes.length}`)
}

async function main() {
  const payload = await getPayload({ config: await config })

  for (const category of categories) {
    await seedCategory(payload, category)
  }

  const settings = await payload.findGlobal({ slug: 'menu-settings' })
  if (!settings.meats || settings.meats.length === 0) {
    await payload.updateGlobal({ data: { meats }, slug: 'menu-settings' })
    console.log(`+ ${meats.length} carnes`)
  } else {
    console.log('= carnes existentes, sin cambios')
  }

  process.exit(0)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
