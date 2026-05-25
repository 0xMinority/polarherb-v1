import type { HerbCommercialData } from "../../types/herb-detail";

interface CommercialReadinessProps {
  commercial: HerbCommercialData;
}

const readinessStages = ["Discovery", "Validation", "Formulation", "Launch-Ready"];

const DETAIL_SURFACE = "#071016";
const DETAIL_PANEL_SURFACE = "#08121A";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#D7DCE2";
const DETAIL_ACCENT_GOLD = "#D0A85C";
const DETAIL_GRID_BORDER = "bg-white/[0.05]";

export function CommercialReadiness({
  commercial,
}: CommercialReadinessProps) {
  const { readiness, factors } = commercial;

  return (
    <div className="relative mt-16 overflow-hidden border border-white/[0.07] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-8 xl:p-8" style={{ backgroundColor: `${DETAIL_PANEL_SURFACE}EB` }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(208,168,92,0.08), transparent 38%),
            radial-gradient(circle at 84% 20%, rgba(255,255,255,0.035), transparent 34%),
            linear-gradient(to bottom, rgba(255,255,255,0.018), transparent 32%)
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em]" style={{ color: `${DETAIL_ACCENT_GOLD}E0` }}>
              Commercial Readiness
            </p>

            <h3 className="mt-4 max-w-[780px] text-[22px] font-light tracking-[-0.05em] md:text-[24px] xl:text-[28px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
              Ingredient commercialization readiness score
            </h3>
          </div>

          <div className="border border-white/[0.06] px-4 py-3 text-[12px] uppercase tracking-[0.18em]" style={{ backgroundColor: `${DETAIL_SURFACE}B3`, color: `${DETAIL_TEXT_MUTED}73` }}>
            Go-to-market signal model
          </div>
        </div>

        <div className={`mt-8 grid grid-cols-1 gap-[1px] ${DETAIL_GRID_BORDER} xl:mt-10 xl:grid-cols-[0.82fr_1.18fr]`}>
          <div className="relative overflow-hidden p-6 md:p-8" style={{ backgroundColor: DETAIL_SURFACE }}>
            <div className="flex min-h-[300px] flex-col justify-between">
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em]" style={{ color: `${DETAIL_TEXT_MUTED}59` }}>
                  Readiness Index
                </p>

                <div className="mt-8 flex items-end gap-3">
                  <p className="text-[72px] font-light leading-none tracking-[-0.09em] md:text-[92px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
                    {readiness}
                  </p>
                  <p className="pb-3 text-[15px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}6B` }}>
                    / 100
                  </p>
                </div>

                <div className="mt-8 h-[6px] overflow-hidden bg-white/[0.055]">
                  <div
                    className="h-full shadow-[0_0_28px_rgba(208,168,92,0.36)]"
                    style={{ width: `${readiness}%`, backgroundColor: DETAIL_ACCENT_GOLD }}
                  />
                </div>
              </div>

              <div className={`mt-10 grid grid-cols-4 gap-[1px] ${DETAIL_GRID_BORDER}`}>
                {readinessStages.map((stage, index) => {
                  const isReached = readiness >= (index + 1) * 25;

                  return (
                    <div
                      key={stage}
                      className={`p-3.5 text-center text-[11px] uppercase tracking-[0.16em] ${
                        isReached
                          ? "bg-[#D0A85C]/12"
                          : "bg-[#08121A]"
                      }`}
                      style={{ color: isReached ? DETAIL_ACCENT_GOLD : `${DETAIL_TEXT_MUTED}47` }}
                    >
                      {stage}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`space-y-[1px] ${DETAIL_GRID_BORDER}`}>
            {factors.map((factor) => (
              <div key={factor.label} className="p-5 md:p-6" style={{ backgroundColor: DETAIL_SURFACE }}>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[15px]" style={{ color: `${DETAIL_TEXT_PRIMARY}E0` }}>
                      {factor.label}
                    </p>
                    <p className="mt-2 max-w-[580px] text-[14px] leading-6" style={{ color: `${DETAIL_TEXT_MUTED}73` }}>
                      {factor.note}
                    </p>
                  </div>

                  <p className="text-[13px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}6B` }}>
                    {factor.value}%
                  </p>
                </div>

                <div className="mt-5 h-[5px] overflow-hidden bg-white/[0.055]">
                  <div
                    className="h-full shadow-[0_0_24px_rgba(208,168,92,0.28)]"
                    style={{ width: `${factor.value}%`, backgroundColor: DETAIL_ACCENT_GOLD }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}