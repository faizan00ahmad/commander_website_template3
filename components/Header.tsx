import Link from "next/link";
import Img from "./Img";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const links = [
  { href: "/about", label: "About" },
  { href: "/agro", label: "Agro" },
  { href: "/petrogas", label: "Petrogas" },
  { href: "/gharbeen", label: "Gharbeen" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-3 z-50 px-3">
      <div className="glass mx-auto max-w-6xl rounded-2xl">
        <div className="flex h-14 items-center justify-between gap-2 px-3 md:px-4">
          <Link href="/" aria-label="Commander Group home" className="shrink-0">
            <Img name="logo1-1.png" alt="Commander Group" className="h-8 w-auto dark:hidden" />
            <Img name="logo-1-white.png" alt="Commander Group" className="hidden h-8 w-auto dark:block" />
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-fg/75 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg px-3 py-2 transition hover:bg-tint hover:text-accent">{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary hidden !py-2 md:inline-flex">Get in touch</Link>
            <MobileNav links={links} top={80} className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
