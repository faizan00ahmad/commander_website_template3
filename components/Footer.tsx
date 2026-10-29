import Link from "next/link";
import Img from "./Img";
import { contact } from "@/lib/data";

const col = "text-xs font-bold uppercase tracking-[.16em] text-accent";
const link = "inline-block py-0.5 transition hover:translate-x-1 hover:text-accent";

export default function Footer() {
  return (
    <footer className="mt-28 bg-[#08110d] text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Img name="logo-1-white.png" alt="Commander Group" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Quality within your reach. Agro chemicals, seeds and LPG across Pakistan since 1996.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-widest text-white/70">
            {["ISO 17025", "ISO 9000", "ISO 14000"].map((c) => <span key={c} className="rounded border border-white/15 px-2 py-1">{c}</span>)}
          </div>
        </div>
        <div>
          <p className={col}>Businesses</p>
          <ul className="mt-4 space-y-1.5 text-sm text-white/75">
            <li><Link href="/agro" className={link}>Commander Agro</Link></li>
            <li><Link href="/petrogas" className={link}>Commander Petrogas</Link></li>
            <li><Link href="/gharbeen" className={link}>Gharbeen</Link></li>
          </ul>
        </div>
        <div>
          <p className={col}>Company</p>
          <ul className="mt-4 space-y-1.5 text-sm text-white/75">
            <li><Link href="/about" className={link}>About</Link></li>
            <li><Link href="/leadership" className={link}>Leadership</Link></li>
            <li><Link href="/contact" className={link}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className={col}>Head office</p>
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
