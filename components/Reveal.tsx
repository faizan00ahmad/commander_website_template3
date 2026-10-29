"use client";
import { useEffect, useRef } from "react";

// Content is visible by default; only below-the-fold blocks are hidden on mount and revealed on scroll.
export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("rv-pre");
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.style.transitionDelay = `${delay}ms`;
      el.classList.remove("rv-pre");
      io.disconnect();
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`rv ${className}`}>{children}</div>;
}
