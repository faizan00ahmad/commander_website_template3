import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Awards } from "@/components/Blocks";
import { contact } from "@/lib/data";

export const metadata: Metadata = { title: "Contact | Commander Group" };

const box = "rounded-[var(--radius)] border border-line bg-panel p-6";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's talk">
        Distributor enquiries, product questions or partnerships — send us a message.
      </PageHero>
      <section className="container-x grid items-start gap-10 pt-20 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <div className={box}><p className="eyebrow">Head office</p><p className="mt-3 text-fg/75">{contact.address}</p></div>
          <div className={box}>
            <p className="eyebrow">Phone</p>
            <p className="mt-3"><a href={contact.phoneHref} className="font-semibold text-accent">{contact.phone}</a></p>
            <p className="eyebrow mt-5">Fax</p>
            <p className="mt-3 text-fg/75">{contact.fax}</p>
          </div>
          <div className={box}>
            <p className="eyebrow">Mobile</p>
            <p className="mt-3"><a href={contact.mobileHref} className="font-semibold text-accent">{contact.mobile}</a></p>
            <p className="mt-1 text-sm text-fg/60">{contact.mobileName}</p>
          </div>
          <div className={box}>
            <p className="eyebrow">E-mail</p>
            <p className="mt-3 space-y-1">
              {contact.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block font-semibold text-accent">{e}</a>
              ))}
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
      <Awards />
    </>
  );
}
