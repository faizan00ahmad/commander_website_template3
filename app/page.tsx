import Link from "next/link";
import Img from "@/components/Img";
import SupplyChain from "@/components/SupplyChain";
import { SectionHead, Awards, CTA } from "@/components/Blocks";
import { stats, businesses, certifications, distributors, timeline } from "@/lib/data";

const pillars = [
  { k: "01", t: "Infrastructure", b: "Formulation plants for liquid, powder and granule products, 1.5 hectares of warehousing, and a 300 MT/day LPG plant in Multan." },
  { k: "02", t: "Quality control", b: "ISO 17025 certified R&D laboratory. LPG facilities certified to ISO 9000 and ISO 14000 — the only ones in Pakistan." },
  { k: "03", t: "Innovation", b: "Research-led product development and computerized refilling and repacking systems for retail." },
  { k: "04", t: "Reach", b: "5 regional and 50 territorial offices, field sales and training staff, and authorised distributors from North to South." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-8 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-fg/75">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Operational since 1996
            </span>
            <h1 className="h-display mt-6 animate-rise text-5xl md:text-7xl">
              The supply chain behind <span className="grad-text">Pakistan&apos;s fields and flames.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg text-fg/65">
              Commander Group imports, formulates, stores and distributes agro chemicals, seeds and LPG — with ISO certified quality at every step.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#platform" className="btn btn-primary">See how we operate</Link>
              <Link href="/contact" className="btn btn-ghost">Become a distributor</Link>
            </div>
          </div>
          <div className="glass rounded-3xl p-4 md:p-6"><SupplyChain /></div>
        </div>
      </section>

      <section className="container-x">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-[var(--radius)] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-fg/50">{s.label}</p>
              <p className="h-display mt-3 text-3xl text-accent md:text-4xl">{s.value}</p>
              <div className="mt-4 h-1 overflow-hidden rounded bg-line"><div className="h-full w-2/3 rounded bg-accent/70" /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="container-x pt-28">
        <SectionHead eyebrow="// Operations" title="Infrastructure, quality and innovation" sub="Everything is built around reliability: from the plant floor to the last-mile distributor." />
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.k} className="glass rounded-[var(--radius)] p-8 transition hover:border-accent/60">
              <span className="font-mono text-sm text-accent">{p.k}</span>
              <h3 className="h-display mt-3 text-2xl">{p.t}</h3>
              <p className="mt-3 text-fg/65">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="// Business units" title="Three units. One network." />
        <div className="grid gap-4 md:grid-cols-3">
          {businesses.map((b) => (
            <Link key={b.slug} href={`/${b.slug}`} className="glass group overflow-hidden rounded-[var(--radius)] transition hover:border-accent/60">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Img name={b.cover} alt={b.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                  <span className="text-accent">{b.tag}</span><span className="text-fg/45">EST. {b.since}</span>
                </div>
                <h3 className="h-display mt-3 text-2xl">{b.name}</h3>
                <p className="mt-2 text-sm text-fg/65">{b.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="// Quality" title="Certified at every step" />
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.code} className="glass flex items-center gap-5 rounded-[var(--radius)] p-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/15 font-mono text-sm font-bold text-accent">✓</span>
              <div><p className="h-display text-xl">{c.code}</p><p className="text-sm text-fg/60">{c.label}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="// Network" title="Distribution network" sub="Authorised LPG distributors in Multan — call directly." />
        <div className="glass overflow-x-auto rounded-[var(--radius)]">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="font-mono text-xs uppercase tracking-widest text-fg/50">
              <tr><th className="p-4">ID</th><th className="p-4">Distributor</th><th className="p-4">Region</th><th className="p-4">Contact</th><th className="p-4">Status</th></tr>
            </thead>
            <tbody>
              {distributors.slice(0, 6).map(([n, p], i) => (
                <tr key={n} className="border-t border-line">
                  <td className="p-4 font-mono text-fg/40">D-{String(i + 1).padStart(2, "0")}</td>
                  <td className="p-4 font-medium">{n}</td>
                  <td className="p-4 text-fg/60">Multan</td>
                  <td className="p-4"><a className="text-accent hover:underline" href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></td>
                  <td className="p-4"><span className="inline-flex items-center gap-2 text-xs text-fg/70"><span className="h-2 w-2 rounded-full bg-accent" />Authorised</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/petrogas" className="mt-4 inline-block text-sm font-semibold text-accent">View all distributors →</Link>
      </section>

      <section className="container-x pt-28">
        <SectionHead eyebrow="// Milestones" title="Growth timeline" />
        <ol className="grid gap-4 md:grid-cols-3">
          {timeline.map((t) => (
            <li key={t.year} className="glass rounded-[var(--radius)] p-6">
              <span className="font-mono text-sm text-accent">{t.year}</span>
              <h3 className="h-display mt-2 text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-fg/65">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <Awards />
      <CTA />
    </>
  );
}
