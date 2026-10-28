import type { Metadata } from "next";
import Img from "@/components/Img";
import PageHero from "@/components/PageHero";
import { Awards, CTA } from "@/components/Blocks";
import { vision, mission } from "@/lib/data";

export const metadata: Metadata = { title: "About | Commander Group" };

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Our vision & mission">
        Commander Group has grown since 1996 into a diversified group in agro chemicals, seeds and LPG.
      </PageHero>
      <section className="container-x grid items-start gap-10 pt-20 md:grid-cols-2">
        <Img name="about-3-1.png" alt="About Commander Group" className="w-full rounded-[var(--radius)]" />
        <div className="space-y-5">
          <div className="rounded-[var(--radius)] border border-line bg-panel p-8">
            <h3 className="h-display text-2xl">Our Vision</h3>
            <p className="mt-3 text-fg/70">{vision}</p>
          </div>
          <div className="rounded-[var(--radius)] border border-line bg-panel p-8">
            <h3 className="h-display text-2xl">Our Mission</h3>
            <ul className="mt-3 space-y-2 text-fg/70">
              {mission.map((m) => (
                <li key={m} className="flex gap-3"><span className="text-accent">✦</span>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-x grid gap-5 pt-12 sm:grid-cols-2">
        <Img name="about-1-1.png" alt="Commander Group head office" className="w-full rounded-[var(--radius)]" />
        <Img name="about-1-2.png" alt="Commander Group" className="w-full rounded-[var(--radius)]" />
      </section>
      <Awards />
      <CTA />
    </>
  );
}
