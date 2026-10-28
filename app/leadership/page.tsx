import type { Metadata } from "next";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import { Awards, CTA } from "@/components/Blocks";
import { leaders } from "@/lib/data";

export const metadata: Metadata = { title: "Leadership | Commander Group" };

export default function Leadership() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Commitment, integrity and excellence">
        Messages from the people steering Commander Group.
      </PageHero>
      <section className="container-x space-y-6 pt-20">
        {leaders.map((l) => (
          <article key={l.name} className="grid gap-8 rounded-[var(--radius)] border border-line bg-panel p-8 md:grid-cols-[240px_1fr] md:p-10">
            <div>
              {l.photo && <Img name={l.photo} alt={l.name} className="mb-5 w-40 rounded-lg" />}
              <h2 className="h-display text-2xl">{l.name}</h2>
              <p className="eyebrow mt-2">{l.role}</p>
            </div>
            <div className="space-y-4 text-fg/70">
              {l.body.map((p, i) => <p key={i}>{p}</p>)}
              {l.sign && <Img name={l.sign} alt="Signature" className="h-16 w-auto" />}
            </div>
          </article>
        ))}
      </section>
      <Awards />
      <CTA />
    </>
  );
}
