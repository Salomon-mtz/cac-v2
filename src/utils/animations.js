import { gsap } from 'gsap';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export const setupGsapAnimation = (trigger, element, config = {}) => {
  const defaultConfig = {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger,
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    }
  };

  return gsap.from(element, {
    ...defaultConfig,
    ...config
  });
};

export const setupGsapStagger = (trigger, elements, config = {}) => {
  const defaultConfig = {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger,
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    }
  };

  return gsap.from(elements, {
    ...defaultConfig,
    ...config
  });
};