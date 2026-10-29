import { contact } from "@/lib/data";

// Always-reachable call button: removes friction for distributors and farmers who prefer to phone.
export default function FloatingContact() {
  return (
    <a
      href={contact.phoneHref}
      aria-label={`Call Commander Group ${contact.phone}`}
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 md:bottom-5 md:right-5 flex items-center gap-3 rounded-full bg-accent px-4 py-3 text-onaccent shadow-2xl shadow-black/30 transition hover:scale-105 md:pr-5"
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-onaccent/25" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
      </span>
      <span className="hidden text-sm font-bold md:inline">Call us</span>
    </a>
  );
}
