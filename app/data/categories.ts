export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  subcategories: string[];
  features: { title: string; description: string }[];
}

export interface MainCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
  subcategories: string[];
  benefits: { title: string; description: string }[];
}

export const categories: Category[] = [
  {
    id: 'afrocentric-home',
    title: 'Afro Centric Home',
    description: 'Celebrate African heritage with modern home designs',
    image: '/categories/afrocentric.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'smart-furniture',
    title: 'Smart Furniture',
    description: 'Intelligent furniture for the modern home',
    image: '/categories/smart-furniture.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'smart-home',
    title: 'Smart Home',
    description: 'Transform your space with smart technology',
    image: '/categories/smart-home.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'appliances',
    title: 'Appliances',
    description: 'Energy-efficient home appliances',
    image: '/categories/appliances.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'bedding-bath',
    title: 'Beddings and Bath',
    description: 'Luxury bedding and bath essentials',
    image: '/categories/bedding.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'home-decor',
    title: 'Home Decor & Pillows',
    description: 'Beautiful accents for your home',
    image: '/categories/decor.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Modern lighting solutions',
    image: '/categories/lighting.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'rugs',
    title: 'Rugs',
    description: 'Designer rugs for every space',
    image: '/categories/rugs.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'organization',
    title: 'Organization',
    description: 'Smart storage and organization solutions',
    image: '/categories/organization.jpg',
    products: [],
    subcategories: [],
    features: []
  },
  {
    id: 'kitchen',
    title: 'Kitchen Essentials',
    description: 'Modern kitchen tools and accessories',
    image: '/categories/kitchen.jpg',
    products: [],
    subcategories: [],
    features: []
  }
]

export function getMainCategories(): MainCategory[] {
  return Object.entries(categories).map(([id, category]) => ({
    id,
    title: category.title,
    description: category.description,
    image: category.image,
    features: [],
    subcategories: [],
    benefits: []
  }))
} 