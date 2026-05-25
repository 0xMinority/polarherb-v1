import type { HerbRegulatoryData } from "../../types/herb-detail";

interface RegulatoryOutlookProps {
  regulatory: HerbRegulatoryData;
}

const readinessSteps = ["Identity", "Safety", "Evidence", "Claims", "Market Review"];

const DETAIL_SURFACE = "#071016";
const DETAIL_PANEL_SURFACE = "#08121A";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#D7DCE2";
const DETAIL_ACCENT_GOLD = "#D0A85C";
const DETAIL_GRID_BORDER = "bg-white/[0.05]";

export function RegulatoryOutlook({ regulatory }: RegulatoryOutlookProps) {
  return (
    <div className="relative mt-16 overflow-hidden border border-white/[0.07] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-8 xl:p-8" style={{ backgroundColor: `${DETAIL_PANEL_SURFACE}EB` }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(208,168,92,0.08), transparent 38%),
            radial-gradient(circle at 84% 22%, rgba(120,160,220,0.055), transparent 36%),
            linear-gradient(to bottom, rgba(255,255,255,0.018), transparent 32%)
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em]" style={{ color: `${DETAIL_ACCENT_GOLD}E0` }}>
              Regulatory Outlook
            </p>

            <h3 className="mt-4 max-w-[780px] text-[22px] font-light tracking-[-0.05em] md:text-[24px] xl:text-[28px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
              Market-entry and claim-positioning overview
            </h3>
          </div>

          <div className="border border-white/[0.06] px-4 py-3 text-[12px] uppercase tracking-[0.18em]" style={{ backgroundColor: `${DETAIL_SURFACE}B3`, color: `${DETAIL_TEXT_MUTED}73` }}>
            Compliance readiness layer
          </div>
        </div>

        <div className={`mt-8 grid grid-cols-1 gap-[1px] ${DETAIL_GRID_BORDER} xl:mt-10 xl:grid-cols-[0.88fr_1.12fr]`}>
          <div className="p-6 md:p-8" style={{ backgroundColor: DETAIL_SURFACE }}>
            <p className="text-[12px] uppercase tracking-[0.2em]" style={{ color: `${DETAIL_TEXT_MUTED}59` }}>
              Regulatory Pathway
            </p>

            <div className={`mt-8 space-y-[1px] ${DETAIL_GRID_BORDER}`}>
              {readinessSteps.map((step, index) => {
                const isComplete = index < 3;
                const isCurrent = index === 3;

                return (
                  <div
                    key={step}
                    className={`flex items-center justify-between p-4 text-[12px] uppercase tracking-[0.17em] ${
                      isComplete
                        ? "bg-[#D0A85C]/12"
                        : isCurrent
                          ? "bg-[#0B1821]"
                          : "bg-[#08121A]"
                    }`}
                    style={{
                      color: isComplete
                        ? DETAIL_ACCENT_GOLD
                        : isCurrent
                          ? `${DETAIL_TEXT_PRIMARY}C2`
                          : `${DETAIL_TEXT_MUTED}4D`,
                    }}
                  >
                    <span>{step}</span>
                    <span>{isComplete ? "Ready" : isCurrent ? "Review" : "Pending"}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-[14px] leading-6" style={{ color: `${DETAIL_TEXT_MUTED}75` }}>
              Regulatory treatment varies by market and final product format. This module frames
              early diligence priorities rather than replacing jurisdiction-specific legal review.
            </p>
          </div>

          <div className={`grid grid-cols-1 gap-[1px] ${DETAIL_GRID_BORDER} md:grid-cols-2`}>
            {regulatory.items.map((item) => (
              <div key={item.label} className="p-5 md:p-6" style={{ backgroundColor: DETAIL_SURFACE }}>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}59` }}>
                    {item.label}
                  </p>

                  <span className="border border-[#D0A85C]/20 bg-[#D0A85C]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]" style={{ color: `${DETAIL_ACCENT_GOLD}CC` }}>
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-[16px] leading-7" style={{ color: DETAIL_TEXT_PRIMARY }}>
                  {item.value}
                </p>

                <p className="mt-4 text-[14px] leading-6" style={{ color: `${DETAIL_TEXT_MUTED}73` }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}