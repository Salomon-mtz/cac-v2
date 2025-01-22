import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (elementRef, animation = {}, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const defaultAnimation = {
      opacity: 0,
      y: 50,
      duration: 1
    };

    const defaultOptions = {
      trigger: element,
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    };

    const finalAnimation = { ...defaultAnimation, ...animation };
    const finalOptions = { ...defaultOptions, ...options };

    const tl = gsap.timeline({
      scrollTrigger: finalOptions
    });

    tl.from(element, finalAnimation);

    return () => {
      // Cleanup animation
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [elementRef, animation, options]);
};

export default useScrollAnimation;