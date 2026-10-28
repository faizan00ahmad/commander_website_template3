"use client";
import { useState } from "react";

const field =
  "w-full rounded-[var(--radius)] border border-line bg-bg px-4 py-3 text-sm text-fg outline-none transition focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="rounded-[var(--radius)] border border-line bg-panel p-10">
        <p className="eyebrow">Thank you</p>
        <p className="mt-3 font-display text-2xl">We&apos;ve received your message.</p>
      </div>
    );

  return (
    <form
      className="space-y-4 rounded-[var(--radius)] border border-line bg-panel p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to an email service / API route
        setSent(true);
      }}
    >
      <h3 className="font-display text-2xl">Send us a message</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className={field} />
        <input required type="email" name="email" placeholder="Your email" className={field} />
      </div>
      <input required name="subject" placeholder="Subject" className={field} />
      <textarea required name="message" rows={6} placeholder="Message" className={field} />
      <button className="btn btn-primary">Send message</button>
    </form>
  );
}
