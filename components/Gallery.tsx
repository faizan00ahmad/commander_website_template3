"use client";
import { useState } from "react";
import Img from "./Img";

export default function Gallery({ names, cols = "sm:grid-cols-3 lg:grid-cols-4" }: { names: string[]; cols?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className={`grid grid-cols-2 gap-3 ${cols}`}>
        {names.map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className="group aspect-square cursor-zoom-in overflow-hidden rounded-[var(--radius)] border border-line bg-panel"
            aria-label={`View ${n}`}
          >
            <Img name={`${n}-thumb.jpg`} alt={n} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <Img name={`${active}.jpg`} alt={active} className="max-h-[90vh] max-w-full rounded-lg" />
          <button className="absolute right-5 top-5 text-4xl text-white" aria-label="Close">×</button>
        </div>
      )}
    </>
  );
}
