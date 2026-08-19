import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register once, only in the browser. Every animated component imports from here.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  // Mobile browsers resize the viewport as the URL bar collapses; refreshing
  // every ScrollTrigger on each of those would cause visible jumps.
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.defaults({ ease: 'power3.out', duration: 0.9 });
}

export const EASE_OUT = 'expo.out';
export { gsap, ScrollTrigger, SplitText };
