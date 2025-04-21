import { Variants } from "framer-motion"

export const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
} 