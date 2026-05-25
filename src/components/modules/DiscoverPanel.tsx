const discoverEntries = [
  {
    category: "Comparative Analysis",
    categoryColor: "#D0A85C",
    title: "Gymnadenia Conopsea vs. Ginseng",
    description:
      "How these adaptogens differ in energy metabolism and oxygen efficiency.",
    meta: "8 min read · 12 references",
  },
  {
    category: "Functional Insights",
    categoryColor: "#7FAE8D",
    title: "Rhodiola Rosea Stress Modulation",
    description:
      "Evidence signals for cortisol balance and high-altitude cognitive resilience.",
    meta: "6 min read · 9 references",
  },
  {
    category: "Application Perspective",
    categoryColor: "#6FAFCF",
    title: "Sea Buckthorn Respiratory Positioning",
    description:
      "Translational pathways from antioxidant density to commercial formulation.",
    meta: "5 min read · 7 references",
  },
  {
    category: "Origin Story",
    categoryColor: "#B08FD6",
    title: "Snow Lotus Rarity Economics",
    description:
      "Why altitude scarcity shapes premium longevity narratives in alpine botanicals.",
    meta: "10 min read · 15 references",
  },
];

export default function DiscoverPanel() {
  return (
    <section className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#071016]/94 shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/[0.05] px-5 py-5 md:px-6 md:py-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-[#D0A85C]/80" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </span>
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-[0.28em] text-[#F3F1EA]">
              Discover
            </h2>
            <p className="mt-2 text-[12px] leading-relaxed text-[#D7DCE2]/55">
              Research narratives and insights from the Atlas.
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#040B11]/50 px-4 py-2.5">
          <button
            type="button"
            className="flex items-center gap-1 text-[11px] text-[#D7DCE2]/55"
          >
            <span>Topics:</span>
            <span className="text-[#F3F1EA]">All</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-0.5" aria-hidden>
              <path d="M6 9L12 15L18 9" strokeLinecap="round" />
            </svg>
          </button>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#D7DCE2]/38">
            Live · 1358 entries
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-5">
        <ul className="space-y-3">
          {discoverEntries.map((entry) => (
            <li key={entry.title}>
              <article
                className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#08121A]/80 p-4 transition-colors hover:border-white/[0.1]"
                style={{ borderLeftColor: `${entry.categoryColor}88`, borderLeftWidth: "2px" }}
              >
                <p
                  className="text-[9px] font-medium uppercase tracking-[0.2em]"
                  style={{ color: entry.categoryColor }}
                >
                  {entry.category}
                </p>
                <h3 className="mt-3 text-[15px] font-medium leading-snug tracking-[-0.02em] text-[#F3F1EA]">
                  {entry.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#D7DCE2]/58">
                  {entry.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.04em] text-[#D0A85C]/72">{entry.meta}</p>
                  <button
                    type="button"
                    className="text-[#D7DCE2]/35 transition-colors hover:text-[#D0A85C]/80"
                    aria-label="Bookmark"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center border-t border-white/[0.04] py-3 text-[#D7DCE2]/30">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 9L12 15L18 9" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
