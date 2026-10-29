"use client";
import { useState } from "react";

const field =
  "w-full rounded-[var(--radius)] border border-line bg-bg px-4 py-3.5 text-sm text-fg outline-none transition placeholder:text-fg/35 focus:border-accent focus:ring-4 focus:ring-accent/15";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-fg/55";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="rounded-[var(--radius)] border border-line bg-panel p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-onaccent">✓</span>
        <p className="mt-5 font-display text-2xl">Thank you — message received.</p>
        <p className="mt-2 text-fg/60">Our team will get back to you shortly.</p>
      </div>
    );

  return (
    <form
      className="space-y-5 rounded-[var(--radius)] border border-line bg-panel p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to an email service / API route
        setSent(true);
      }}
    >
      <div>
        <h3 className="font-display text-2xl">Send us a message</h3>
        <p className="mt-1 text-sm text-fg/55">Takes under a minute. We read every enquiry.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={label}>Your name</label><input id="name" required name="name" autoComplete="name" placeholder="Full name" className={field} /></div>
        <div><label htmlFor="email" className={label}>Email</label><input id="email" required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={field} /></div>
      </div>
      <div>
        <label htmlFor="subject" className={label}>I&apos;m interested in</label>
        <select id="subject" name="subject" required defaultValue="" className={field}>
          <option value="" disabled>Select a topic</option>
          <option>Agro chemicals</option>
          <option>LPG / Petrogas</option>
          <option>Seeds &amp; retail (Gharbeen)</option>
          <option>Becoming a distributor</option>
          <option>Something else</option>
        </select>
      </div>
      <div><label htmlFor="message" className={label}>Message</label><textarea id="message" required name="message" rows={5} placeholder="How can we help?" className={field} /></div>
      <button className="btn btn-primary w-full sm:w-auto">Send message →</button>
    </form>
  );
}
