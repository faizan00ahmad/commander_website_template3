"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contact } from "@/lib/data";

type NavLink = { href: string; label: string };

// Full-height mobile menu rendered in a portal (sticky headers with backdrop-blur would otherwise trap `fixed`).
// `top` = header height in px so the header and its close button stay visible.
export default function MobileNav({ links, top, className = "" }: { links: NavLink[]; top: number; className?: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const bar = "absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-fg transition duration-300";
  return (
    <>
      <button
        className={`relative h-11 w-11 shrink-0 ${className}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={`${bar} ${open ? "rotate-45" : "-translate-y-[7px]"}`} />
        <span className={`${bar} ${open ? "opacity-0" : ""}`} />
        <span className={`${bar} ${open ? "-rotate-45" : "translate-y-[5px]"}`} />
      </button>
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-x-0 bottom-0 z-[45] bg-bg transition duration-300 ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
            style={{ top }}
          >
            <nav className="flex h-full flex-col overflow-y-auto px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-2" aria-label="Mobile">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-display text-xl font-semibold text-fg active:text-accent">
                  {l.label}
                </Link>
              ))}
              <div className="mt-auto grid gap-3 pt-8">
                <a href={contact.phoneHref} className="btn btn-primary w-full">Call {contact.phone.split("-")[0]}</a>
                <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-ghost w-full">Send an enquiry</Link>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
