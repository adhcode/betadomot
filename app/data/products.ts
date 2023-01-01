import type { Category } from "@/data/categories";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: "smart-sofa-1",
    name: "Smart Comfort Sofa",
    category: "smart-furniture",
    price: 299999,
    images: ["/products/smart-sofa.jpg"],
    description: "Intelligent sofa with built-in charging, massage, and climate control",
    features: ["USB Charging", "Climate Control", "Massage Function", "Voice Control"]
  },
  {
    id: "smart-bed-1",
    name: "Smart Sleep System",
    category: "bedding-bath",
    price: 499999,
    images: ["/products/smart-bed.jpg"],
    description: "Advanced sleep system with temperature regulation and sleep tracking",
    features: ["Sleep Tracking", "Temperature Control", "Auto Adjustment", "Smart Wake"]
  },
  {
    id: "smart-light-1",
    name: "Smart LED Panel",
    category: "smart-lighting",
    price: 49999,
    images: ["/products/smart-light.jpg"],
    description: "Color-changing LED panel with voice and app control",
    features: ["Voice Control", "16M Colors", "Schedule", "Music Sync"]
  },
  {
    id: "smart-kitchen-1",
    name: "Smart Refrigerator",
    category: "kitchen-essentials",
    price: 899999,
    images: ["/products/smart-fridge.jpg"],
    description: "Connected refrigerator with inventory tracking and recipe suggestions",
    features: ["Inventory Tracking", "Recipe Suggestions", "Energy Efficient", "Touch Screen"]
  },
  {
    id: "smart-decor-1",
    name: "Digital Art Frame",
    category: "home-decor",
    price: 79999,
    images: ["/products/digital-frame.jpg"],
    description: "High-resolution digital frame with art subscription service",
    features: ["4K Display", "Art Library", "Motion Sensor", "Auto Brightness"]
  },
  {
    id: "smart-appliance-1",
    name: "Smart Washer",
    category: "smart-appliances",
    price: 599999,
    images: ["/products/smart-washer.jpg"],
    description: "WiFi-enabled washer with remote control and notifications",
    features: ["Remote Control", "Auto Detergent", "Energy Monitor", "Smart Schedule"]
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
  const featured: Product[] = [];
  const categoryIds = ["smart-furniture", "bedding-bath", "smart-lighting"];
  categoryIds.forEach(categoryId => {
    const categoryProducts = getProductsByCategory(categoryId);
    if (categoryProducts.length > 0) {
      featured.push(categoryProducts[0]);
    }
  });
  return featured;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(categoryId: string, excludeId?: string): Product[] {
  return products
    .filter(product => product.category === categoryId && product.id !== excludeId)
    .slice(0, 3);
} 