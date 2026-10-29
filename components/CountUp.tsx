"use client";
import { useEffect, useRef, useState } from "react";

// "9,000+ MT" animates 9,000 while keeping prefix/suffix. Years (e.g. 1996) stay static.
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const m = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  const num = m ? parseFloat(m[2].replace(/,/g, "")) : NaN;
  const isYear = num >= 1900 && num <= 2100;
  const [n, setN] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m || isYear || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1400, 1);
        setN(num * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!m || isYear) return <span className={className}>{value}</span>;
  const d = (m[2].split(".")[1] || "").length;
  const shown = n === null ? m[2] : n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  return <span ref={ref} className={`tabular-nums ${className}`}>{m[1]}{shown}{m[3]}</span>;
}
