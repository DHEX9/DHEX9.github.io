export default function ChipSvg() {
  return (
    <div className="hero-chip reveal in-view" aria-hidden="true">
      <svg viewBox="0 0 320 224" className="chip-svg">
        <g stroke="var(--void-line-strong)" strokeWidth="1" fill="none">
          <path d="M18 18h12M18 18v12" />
          <path d="M302 18h-12M302 18v12" />
          <path d="M18 206h12M18 206v-12" />
          <path d="M302 206h-12M302 206v-12" />
        </g>
        <g fill="var(--iron)">
          <rect x="55" y="44" width="25" height="7" />
          <rect x="55" y="84" width="25" height="7" />
          <rect x="55" y="124" width="25" height="7" />
          <rect x="55" y="164" width="25" height="7" />
        </g>
        <g fill="var(--iron)">
          <rect x="240" y="44" width="25" height="7" />
          <rect x="240" y="84" width="25" height="7" className="pin-clk" />
          <rect x="240" y="124" width="25" height="7" />
          <rect x="240" y="164" width="25" height="7" />
        </g>
        <rect
          x="80"
          y="27"
          width="160"
          height="164"
          rx="3"
          fill="var(--void-raised)"
          stroke="var(--copper-dim)"
          strokeWidth="1.5"
        />
        <circle cx="97" cy="44" r="3" fill="var(--copper)" />
        <text x="160" y="105" textAnchor="middle" className="chip-label-main">
          D6809
        </text>
        <text x="160" y="123" textAnchor="middle" className="chip-label-sub">
          DEV · 2026
        </text>
        <text x="269" y="80" className="chip-pin-label">
          CLK
        </text>
      </svg>
    </div>
  );
}
