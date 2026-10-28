import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { AboutBlock, SectionHead, Awards, CTA } from "@/components/Blocks";
import { gharbeenGallery, gharbeenText } from "@/lib/data";

export const metadata: Metadata = { title: "Gharbeen | Commander Group" };

export default function Gharbeen() {
  return (
    <>
      <PageHero eyebrow="Est. 2011 · Retail & Seeds" title="Gharbeen (Pvt) Ltd.">
        Our retail venture under the flagship of Commander Agro, taking quality products and farmer training to the field.
      </PageHero>
      <AboutBlock logo="gharbeen-logo.png" paras={gharbeenText} />
      <section className="container-x pt-24">
        <SectionHead eyebrow="Products" title="Product details" />
        <Gallery names={gharbeenGallery} />
      </section>
      <Awards />
      <CTA />
    </>
  );
}
