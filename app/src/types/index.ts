export interface CarData {
  id: string;
  brand: string;
  model: string;
  location: 'København' | 'Aarhus';
  price: number;
  image: string;
}

export interface EventData {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface BrandData {
  name: string;
  image: string;
  link: string;
}

export interface NavLink {
  label: string;
  href: string;
}
