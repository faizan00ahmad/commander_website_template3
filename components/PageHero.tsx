export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="container-x relative py-20 md:py-28">
        <p className="eyebrow animate-rise">{`// ${eyebrow}`}</p>
        <h1 className="h-display mt-4 max-w-4xl animate-rise text-4xl md:text-6xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl animate-rise text-lg text-fg/65">{children}</p>}
      </div>
    </section>
  );
}
