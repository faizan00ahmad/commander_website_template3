"use client";
import Link from "next/link";
import { useState } from "react";
import Img from "./Img";

const links = [
  { href: "/about", label: "About" },
  { href: "/agro", label: "Agro" },
  { href: "/petrogas", label: "Petrogas" },
  { href: "/gharbeen", label: "Gharbeen" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-3 z-50 px-3">
      <div className="glass mx-auto max-w-6xl rounded-2xl">
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Commander Group home">
            <Img name="logo-1-white.png" alt="Commander Group" className="h-8 w-auto" />
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-fg/75 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 transition hover:bg-tint hover:text-accent">{l.label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn-primary hidden !py-2 md:inline-flex">Get in touch</Link>
          <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-6 bg-fg" />
            <span className="mt-1.5 block h-0.5 w-6 bg-fg" />
            <span className="mt-1.5 block h-0.5 w-6 bg-fg" />
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t border-line px-4 py-4 text-sm md:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
