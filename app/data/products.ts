import type { Product } from "@/types/product";
import type { Category } from "./categories";

export const products: Product[] = [
  {
    id: "smart-sofa-1",
    name: "Smart Comfort Sofa",
    category: "smart-furniture",
    price: 299999,
    images: ["/products/smart-sofa.jpg"],
    description: "Intelligent sofa with built-in charging, massage, and climate control",
    features: ["USB Charging", "Climate Control", "Massage Function", "Voice Control"],
    createdAt: "2024-04-01"
  },
  {
    id: "smart-bed-1",
    name: "Smart Sleep System",
    category: "bedding-bath",
    price: 499999,
    images: ["/products/smart-bed.jpg"],
    description: "Advanced sleep system with temperature regulation and sleep tracking",
    features: ["Sleep Tracking", "Temperature Control", "Auto Adjustment", "Smart Wake"],
    createdAt: "2024-04-01"
  },
  {
    id: "smart-light-1",
    name: "Smart LED Panel",
    category: "smart-lighting",
    price: 49999,
    images: ["/products/smart-light.jpg"],
    description: "Color-changing LED panel with voice and app control",
    features: ["Voice Control", "16M Colors", "Schedule", "Music Sync"],
    createdAt: "2024-04-01"
  },
  {
    id: "smart-kitchen-1",
    name: "Smart Refrigerator",
    category: "kitchen-essentials",
    price: 899999,
    images: ["/products/smart-fridge.jpg"],
    description: "Connected refrigerator with inventory tracking and recipe suggestions",
    features: ["Inventory Tracking", "Recipe Suggestions", "Energy Efficient", "Touch Screen"],
    createdAt: "2024-04-01"
  },
  {
    id: "smart-decor-1",
    name: "Digital Art Frame",
    category: "home-decor",
    price: 79999,
    images: ["/products/digital-frame.jpg"],
    description: "High-resolution digital frame with art subscription service",
    features: ["4K Display", "Art Library", "Motion Sensor", "Auto Brightness"],
    createdAt: "2024-04-01"
  },
  {
    id: "smart-appliance-1",
    name: "Smart Washer",
    category: "smart-appliances",
    price: 599999,
    images: ["/products/smart-washer.jpg"],
    description: "WiFi-enabled washer with remote control and notifications",
    features: ["Remote Control", "Auto Detergent", "Energy Monitor", "Smart Schedule"],
    createdAt: "2024-04-01"
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isOnSale).slice(0, 8);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(categoryId: string, excludeId?: string): Product[] {
  return products
    .filter(product => product.category === categoryId && product.id !== excludeId)
    .slice(0, 4);
} 