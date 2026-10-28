import Link from "next/link";
import Img from "./Img";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#08110d] text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Img name="logo-1-white.png" alt="Commander Group" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Quality within your reach. Agro chemicals, seeds and LPG across Pakistan since 1996.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-accent">Businesses</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link href="/agro" className="hover:text-accent">Commander Agro</Link></li>
            <li><Link href="/petrogas" className="hover:text-accent">Commander Petrogas</Link></li>
            <li><Link href="/gharbeen" className="hover:text-accent">Gharbeen</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-accent">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/leadership" className="hover:text-accent">Leadership</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-accent">Head office</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>{contact.address}</li>
            <li><a href={contact.phoneHref} className="hover:text-accent">{contact.phone}</a></li>
            <li><a href={`mailto:${contact.emails[0]}`} className="hover:text-accent">{contact.emails[0]}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Commander Group. All rights reserved.
      </div>
    </footer>
  );
}
