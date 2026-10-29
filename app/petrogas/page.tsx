import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import { AboutBlock, SectionHead, Awards, CTA } from "@/components/Blocks";
import { petrogasGallery, petrogasText, distributors, contact } from "@/lib/data";

export const metadata: Metadata = { title: "Commander Petrogas | Commander Group" };

export default function Petrogas() {
  return (
    <>
      <PageHero eyebrow="Est. 2017 · LPG" title="Commander Petrogas (Pvt) Ltd.">
        Import and distribution of liquefied petroleum gas all over Pakistan from our plant in Multan.
      </PageHero>
      <AboutBlock
        logo="petrogas-logo.png"
        paras={petrogasText}
        extra={
          <div className="mt-8 rounded-[var(--radius)] border border-line bg-panel p-5 text-sm">
            <p className="eyebrow">Plant site address</p>
            <p className="mt-2 text-fg/70">{contact.plant}</p>
          </div>
        }
      />
      <section className="container-x pt-24">
        <SectionHead eyebrow="Gallery" title="Product details" />
        <Gallery names={petrogasGallery} />
      </section>
      <section className="container-x pt-24">
        <SectionHead eyebrow="Network" title="Distributor list" />
        <div className="overflow-x-auto rounded-[var(--radius)] border border-line bg-panel">
          <table className="w-full sm:min-w-[520px] text-left text-sm">
            <thead className="bg-tint text-xs uppercase tracking-wider text-fg/60">
              <tr><th className="hidden p-4 sm:table-cell">S.N</th><th className="p-4">Distributor name</th><th className="hidden p-4 sm:table-cell">Address</th><th className="p-4">Contact number</th></tr>
            </thead>
            <tbody>
              {distributors.map(([name, phone], i) => (
                <tr key={name} className="border-t border-line">
                  <td className="hidden p-4 text-fg/40 sm:table-cell">{i + 1}</td>
                  <td className="p-4 font-medium">{name}</td>
                  <td className="hidden p-4 text-fg/60 sm:table-cell">Multan</td>
                  <td className="p-4"><a href={`tel:${phone.replace(/\s/g, "")}`} className="font-semibold text-accent hover:underline">{phone}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Awards />
      <CTA />
    </>
  );
}
