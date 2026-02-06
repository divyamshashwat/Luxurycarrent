import type { CarData, EventData, BrandData } from '@/types';

export const cars: CarData[] = [
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Carrera 4S',
    location: 'København',
    price: 4471,
    image: '/images/cars/porsche-911-carrera.jpg',
  },
  {
    id: '2',
    brand: 'Porsche',
    model: 'Cayenne',
    location: 'Aarhus',
    price: 9801,
    image: '/images/cars/porsche-cayenne.jpg',
  },
  {
    id: '3',
    brand: 'Lamborghini',
    model: 'Huracan',
    location: 'København',
    price: 43021,
    image: '/images/cars/lamborghini-huracan.jpg',
  },
  {
    id: '4',
    brand: 'Bentley',
    model: 'Continental GT',
    location: 'København',
    price: 47021,
    image: '/images/cars/bentley-continental.jpg',
  },
  {
    id: '5',
    brand: 'Porsche',
    model: '911 Carrera 4S',
    location: 'Aarhus',
    price: 12265,
    image: '/images/cars/porsche-911-carrera.jpg',
  },
  {
    id: '6',
    brand: 'Porsche',
    model: 'Cayenne',
    location: 'København',
    price: 36685,
    image: '/images/cars/porsche-cayenne.jpg',
  },
  {
    id: '7',
    brand: 'Lamborghini',
    model: 'Huracan',
    location: 'København',
    price: 30766,
    image: '/images/cars/lamborghini-huracan.jpg',
  },
  {
    id: '8',
    brand: 'Porsche',
    model: 'Macan 4S',
    location: 'København',
    price: 6183,
    image: '/images/cars/porsche-cayenne.jpg',
  },
];

export const events: EventData[] = [
  {
    id: '1',
    date: '8. september 2026',
    title: 'Esperienza Giro',
    description: 'Udforsk nogle af verdens mest spektakulære steder og veje i din egen Lamborghini.',
    image: '/images/events/event-1.jpg',
    link: '/events/esperienza-giro-8-11-september/',
  },
  {
    id: '2',
    date: '15. september 2026',
    title: 'Esperienza Giro',
    description: 'Udforsk nogle af verdens mest spektakulære steder og veje i din egen Lamborghini.',
    image: '/images/events/event-2.jpg',
    link: '/events/esperienza-giro-15-18-september/',
  },
];

export const brands: BrandData[] = [
  {
    name: 'PORSCHE',
    image: '/images/brands/porsche-brand.jpg',
    link: '/brands/porsche/',
  },
  {
    name: 'LAMBORGHINI',
    image: '/images/brands/lamborghini-brand.jpg',
    link: '/brands/lamborghini/',
  },
  {
    name: 'BENTLEY',
    image: '/images/brands/bentley-brand.jpg',
    link: '/brands/bentley/',
  },
];

export const heroImages = [
  '/images/hero/bentley-steering.jpg',
  '/images/hero/porsche-rear.jpg',
  '/images/hero/bentley-logo.jpg',
];
