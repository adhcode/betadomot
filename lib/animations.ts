import { Variants } from "framer-motion"

export const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
}

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const imageScale: Variants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    }
  }
} 