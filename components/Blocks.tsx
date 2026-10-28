import Link from "next/link";
import Img from "./Img";

export function SectionHead({ eyebrow, title, sub, className = "" }: { eyebrow: string; title: string; sub?: string; className?: string }) {
  return (
    <div className={`mb-10 max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-display mt-3 text-3xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-fg/65">{sub}</p>}
    </div>
  );
}

export function Awards() {
  return (
    <section className="container-x pt-24">
      <SectionHead
        eyebrow="Winning awards"
        title="Recognised for quality"
        sub="You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {["certificate-1-1.jpg", "certificate-1-2.jpg"].map((c) => (
          <div key={c} className="overflow-hidden rounded-[var(--radius)] border border-line bg-panel p-3">
            <Img name={c} alt="Certificate" className="w-full rounded-[calc(var(--radius)-4px)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="container-x pt-24">
      <div className="rounded-[var(--radius)] bg-accent p-10 text-onaccent md:p-16">
        <h2 className="h-display max-w-2xl text-3xl md:text-5xl">Partner with Commander Group</h2>
        <p className="mt-4 max-w-xl opacity-80">Become a distributor, ask about our products, or talk to our team.</p>
        <Link href="/contact" className="btn btn-invert mt-8">Contact us</Link>
      </div>
    </section>
  );
}

export function AboutBlock({ logo, paras, extra }: { logo: string; paras: string[]; extra?: React.ReactNode }) {
  return (
    <section className="container-x grid gap-10 pt-20 md:grid-cols-[1fr_2fr]">
      <div>
        <Img name={logo} alt="" className="w-48" />
        {extra}
      </div>
      <div className="space-y-5 text-fg/70">
        {paras.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
