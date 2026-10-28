// Isometric supply-chain illustration: Import -> Formulate -> Warehouse -> Distribute
function Cube({ cx, cy, w = 46, h = 38, label, sub }: { cx: number; cy: number; w?: number; h?: number; label: string; sub: string }) {
  const top = `${cx},${cy} ${cx + w},${cy + w / 2} ${cx},${cy + w} ${cx - w},${cy + w / 2}`;
  const left = `${cx - w},${cy + w / 2} ${cx},${cy + w} ${cx},${cy + w + h} ${cx - w},${cy + w / 2 + h}`;
  const right = `${cx},${cy + w} ${cx + w},${cy + w / 2} ${cx + w},${cy + w / 2 + h} ${cx},${cy + w + h}`;
  return (
    <g className="animate-float" style={{ animationDelay: `${(cx % 5) * 0.3}s` }}>
      <polygon points={left} fill="rgb(var(--tint))" stroke="rgb(var(--accent))" strokeOpacity=".5" />
      <polygon points={right} fill="rgb(var(--panel))" stroke="rgb(var(--accent))" strokeOpacity=".5" />
      <polygon points={top} fill="rgb(var(--accent))" fillOpacity=".85" stroke="rgb(var(--accent))" />
      <text x={cx} y={cy + w + h + 28} textAnchor="middle" className="fill-white text-[13px] font-semibold">{label}</text>
      <text x={cx} y={cy + w + h + 45} textAnchor="middle" className="fill-white/50 font-mono text-[10px] uppercase tracking-widest">{sub}</text>
    </g>
  );
}

export default function SupplyChain() {
  const nodes = [
    { cx: 100, cy: 210, label: "Import", sub: "pesticides · LPG" },
    { cx: 270, cy: 120, label: "Formulate", sub: "Multan plants" },
    { cx: 440, cy: 210, label: "Store", sub: "300 MT / day" },
    { cx: 610, cy: 120, label: "Distribute", sub: "nationwide" },
  ];
  return (
    <svg viewBox="0 0 720 400" className="h-auto w-full" role="img" aria-label="Supply chain from import to nationwide distribution">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(45 212 126)" stopOpacity=".25" />
          <stop offset="100%" stopColor="rgb(45 212 126)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="360" cy="230" rx="340" ry="150" fill="url(#g)" />
      {nodes.slice(0, -1).map((n, i) => {
        const m = nodes[i + 1];
        const x1 = n.cx, y1 = n.cy + 23, x2 = m.cx, y2 = m.cy + 23;
        return (
          <path
            key={i}
            d={`M${x1},${y1} C${(x1 + x2) / 2},${y1 - 50} ${(x1 + x2) / 2},${y2 - 50} ${x2},${y2}`}
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="animate-flow"
          />
        );
      })}
      {nodes.map((n) => <Cube key={n.label} {...n} />)}
    </svg>
  );
}
