export const locations = [
  {
    id: 'san-anselmo',
    name: 'San Anselmo',
    dot: '/images/dot-sa.svg',
    photoLabel: 'Mapa San Anselmo',
    street: '580 Redhill Avenue',
    city: 'San Anselmo, CA 94960',
    phone: '415-256-9411',
    hours: 'Open daily 9 AM – 9 PM',
    directionsClass: 'btn-red',
  },
  {
    id: 'san-rafael',
    name: 'San Rafael',
    dot: '/images/dot-sr.svg',
    photoLabel: 'Mapa San Rafael',
    street: '55 Bellam Blvd',
    city: 'San Rafael, CA 94901',
    phone: '415-457-9520',
    hours: 'Open daily 9 AM – 10 PM',
    directionsClass: 'btn-green',
  },
]

export const directionsUrl = (street: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}`)}`
