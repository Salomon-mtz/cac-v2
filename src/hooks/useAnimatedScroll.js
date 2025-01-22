import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const useAnimatedScroll = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const {
      animation = {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      trigger = {},
    } = options;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
        ...trigger,
      },
    });

    tl.from(element, animation);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [ref, options]);
};

// Framer Motion variants for common animations
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDownVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRightVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Hook for scroll-triggered animations using Framer Motion
export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

// Hook for staggered animations
export const useStaggerAnimation = (items, staggerDelay = 0.1) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return { containerVariants, itemVariants };
};

// Hook for parallax effect
export const useParallax = (ref, speed = 0.5) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrolled + windowHeight > elementTop &&
        scrolled < elementTop + elementHeight
      ) {
        const yPos = (scrolled - elementTop) * speed;
        gsap.to(element, {
          y: yPos,
          duration: 0.6,
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
};

export default useAnimatedScroll;