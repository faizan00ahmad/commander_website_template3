import Link from "next/link";
import Img from "./Img";
import Reveal from "./Reveal";
import { contact } from "@/lib/data";

export function SectionHead({ eyebrow, title, sub, className = "" }: { eyebrow: string; title: string; sub?: string; className?: string }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-display text-balance mt-3 text-3xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-fg/65">{sub}</p>}
    </Reveal>
  );
}

export function Awards() {
  return (
    <section className="container-x pt-28">
      <SectionHead
        eyebrow="Winning awards"
        title="Recognised for quality"
        sub="You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {["certificate-1-1.jpg", "certificate-1-2.jpg"].map((c, i) => (
          <Reveal key={c} delay={i * 120}>
            <div className="lift overflow-hidden rounded-[var(--radius)] border border-line bg-panel p-3">
              <Img name={c} alt="Certificate" className="w-full rounded-[calc(var(--radius)-4px)]" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="container-x pt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-accent p-10 text-onaccent md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full bg-black/10 blur-2xl" />
          <div className="relative grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="h-display text-balance text-3xl md:text-5xl">Let&apos;s grow something together.</h2>
              <p className="mt-4 max-w-xl text-lg opacity-85">Become a distributor, ask about our products, or speak directly to our team.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-invert">Send an enquiry</Link>
                <a href={contact.phoneHref} className="btn border border-current/40 hover:bg-white/15">Call {contact.phone.split("-")[0]}</a>
              </div>
            </div>
            <ul className="space-y-2 text-sm font-semibold opacity-90 md:text-right">
              <li>✓ ISO 17025 · 9000 · 14000 certified</li>
              <li>✓ 5 regional &amp; 50 territorial offices</li>
              <li>✓ Serving Pakistan since 1996</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function AboutBlock({ logo, paras, extra }: { logo: string; paras: string[]; extra?: React.ReactNode }) {
  return (
    <section className="container-x grid gap-10 pt-20 md:grid-cols-[1fr_2fr]">
      <Reveal>
        <Img name={logo} alt="" className="w-48" />
        {extra}
      </Reveal>
      <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-fg/70">
        {paras.map((p, i) => <p key={i}>{p}</p>)}
      </Reveal>
    </section>
  );
}
