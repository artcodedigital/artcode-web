'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Global scroll setup:
 *  - Lenis smooth scrolling on pointer devices (touch keeps native scroll).
 *  - Keeps ScrollTrigger in sync with Lenis.
 *  - Generic `[data-reveal]` entrance animations, with a timer-based net so
 *    content can never be left invisible if the observer path stalls.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Lenis -----------------------------------------------------------
    let lenis: Lenis | null = null;
    if (!reduce) {
      lenis = new Lenis({
        lerp: 0.11,
        smoothWheel: true,
        anchors: { offset: -88 },
      });
      lenis.on('scroll', ScrollTrigger.update);
      const raf = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // ---- Generic reveals -------------------------------------------------
    const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    const revealed = new WeakSet<HTMLElement>();

    const show = (els: HTMLElement[], animate = true) => {
      const fresh = els.filter((el) => !revealed.has(el));
      if (!fresh.length) return;
      fresh.forEach((el) => revealed.add(el));
      if (!animate || reduce) {
        gsap.set(fresh, { clearProps: 'opacity,transform' });
        return;
      }
      gsap.to(fresh, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.08,
        overwrite: true,
        clearProps: 'transform',
      });
    };

    if (targets.length) {
      if (!reduce) gsap.set(targets, { y: 40, opacity: 0 });
      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => show(batch as HTMLElement[]),
      });
    }

    // Net: timers keep firing even when the browser skips its rendering steps
    // (which is exactly when scroll events / observers go quiet).
    const net = setInterval(() => {
      const pending = targets.filter((el) => !revealed.has(el));
      if (!pending.length) {
        clearInterval(net);
        return;
      }
      const stuck = pending.filter((el) => el.getBoundingClientRect().top < window.innerHeight * 0.85);
      if (stuck.length) show(stuck, false);
    }, 900);

    // Fonts change line breaks; measure again once they're in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      clearInterval(net);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
