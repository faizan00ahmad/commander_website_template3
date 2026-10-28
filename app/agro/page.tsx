import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { AboutBlock, SectionHead, Awards, CTA } from "@/components/Blocks";
import { agroGallery, agroText } from "@/lib/data";

export const metadata: Metadata = { title: "Commander Agro | Commander Group" };

export default function Agro() {
  return (
    <>
      <PageHero eyebrow="Est. 1996 · Agro Chemicals" title="Commander Agro (Pvt) Ltd.">
        One of the leading importers and formulators of pesticides, fungicides, rodenticides, acaricides and weedicides in Pakistan.
      </PageHero>
      <AboutBlock logo="commander-agro-logo.png" paras={agroText} />
      <section className="container-x pt-24">
        <SectionHead eyebrow="Products" title="Product details" />
        <Gallery names={agroGallery} />
      </section>
      <Awards />
      <CTA />
    </>
  );
}
