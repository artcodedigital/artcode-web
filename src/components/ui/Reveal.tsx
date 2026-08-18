'use client';

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

/**
 * Scroll reveal driven by IntersectionObserver + CSS transitions.
 *
 * Why not Motion's `whileInView`: that path animates on requestAnimationFrame,
 * and iOS Safari suspends rAF during momentum scrolling and throttles it hard
 * in Low Power Mode. When that happens the element never leaves its `opacity: 0`
 * start state and the content simply never appears.
 *
 * Here the hidden state lives in CSS (gated behind `html.js`) and the transition
 * runs off the main thread, so a stalled rAF can't strand the content. Three
 * independent safety nets below guarantee it becomes visible regardless.
 *
 * Visually identical to the previous implementation: same 0.7s duration, same
 * cubic-bezier(.22,1,.36,1) easing, same translateY(28px) + blur(6px).
 */

const REVEALED = 'is-revealed';
const INSTANT = 'reveal-instant';
const MARGIN = '-10% 0px -10% 0px';

function reveal(el: Element) {
  el.classList.add(REVEALED);
}

/**
 * Rescue path: skips the transition entirely. A transition started while the
 * browser is skipping its rendering steps may never paint, so anything the
 * observer missed is made visible outright rather than animated.
 */
function revealInstantly(el: Element) {
  el.classList.add(INSTANT, REVEALED);
}

/* ------------------------------------------------------------------ */
/* Safety nets — none of them depend on requestAnimationFrame          */
/* ------------------------------------------------------------------ */

let safetyInstalled = false;

/**
 * Reveals anything scrolled into view that the observer missed.
 * Returns how many elements are still waiting.
 */
function sweep() {
  const pending = document.querySelectorAll(`[data-reveal]:not(.${REVEALED})`);
  // Deliberately stricter than the observer's own threshold: anything this far
  // inside the viewport should already have been revealed, so if it is still
  // hidden the observer is not doing its job and we take over. Matching the
  // observer exactly would let this race it and skip the animation.
  const limit = window.innerHeight * 0.75;
  let remaining = 0;
  pending.forEach((el) => {
    if (el.getBoundingClientRect().top < limit) revealInstantly(el);
    else remaining++;
  });
  return remaining;
}

function installSafetyNets() {
  if (safetyInstalled || typeof window === 'undefined') return;
  safetyInstalled = true;

  // A timer is the only net that still fires when the browser stops running
  // its rendering steps — which is exactly when IntersectionObserver, rAF and
  // even scroll events all go quiet. It polls until everything has been shown,
  // then stops on its own.
  const poll = setInterval(() => {
    if (sweep() === 0) clearInterval(poll);
  }, 800);

  // Restoring from the iOS back/forward cache can skip observer callbacks.
  window.addEventListener('pageshow', (e) => {
    if ((e as PageTransitionEvent).persisted) sweep();
  });

  // Coming back to a backgrounded tab: catch up immediately.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') sweep();
  });
}

/* ------------------------------------------------------------------ */

let shared: IntersectionObserver | null = null;

function sharedObserver() {
  if (typeof IntersectionObserver === 'undefined') return null;
  if (!shared) {
    shared = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          shared?.unobserve(entry.target);
        }
      },
      { rootMargin: MARGIN },
    );
  }
  return shared;
}

function useRevealOnView<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    installSafetyNets();
    const el = ref.current;
    if (!el) return;

    const observer = sharedObserver();
    if (!observer) {
      // No IntersectionObserver at all — show the content, no animation.
      reveal(el);
      return;
    }

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span' | 'p' | 'h2' | 'h3';
  /** Kept for API compatibility; reveals are always one-shot. */
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRevealOnView<HTMLElement>();

  return createElement(
    as as ElementType,
    {
      ref,
      className,
      'data-reveal': '',
      style: delay ? ({ '--reveal-delay': `${delay}s` } as CSSProperties) : undefined,
    },
    children,
  );
}

/**
 * Reveals its direct children in sequence once the group scrolls into view —
 * the equivalent of Motion's `staggerChildren`.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    installSafetyNets();
    const el = ref.current;
    if (!el) return;

    const showChildren = () => {
      el.querySelectorAll<HTMLElement>(':scope > [data-reveal]').forEach((child, i) => {
        child.style.setProperty('--reveal-delay', `${i * stagger}s`);
        reveal(child);
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      showChildren();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          showChildren();
          observer.disconnect();
        }
      },
      { rootMargin: MARGIN },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-reveal="">
      {children}
    </div>
  );
}
