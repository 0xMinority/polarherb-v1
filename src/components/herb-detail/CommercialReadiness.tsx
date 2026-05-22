import type { HerbCommercialData } from "../../types/herb-detail";

interface CommercialReadinessProps {
  commercial: HerbCommercialData;
}

const readinessStages = ["Discovery", "Validation", "Formulation", "Launch-Ready"];

export function CommercialReadiness({
  commercial,
}: CommercialReadinessProps) {
  const { readiness, factors } = commercial;

  return (
    <div className="relative mt-16 overflow-hidden border border-white/[0.07] bg-[#08121A]/92 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 xl:p-8">
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
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]/88">
              Commercial Readiness
            </p>

            <h3 className="mt-4 max-w-[780px] text-[22px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[24px] xl:text-[28px]">
              Ingredient commercialization readiness score
            </h3>
          </div>

          <div className="border border-white/[0.06] bg-[#071016]/70 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/45">
            Go-to-market signal model
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] xl:mt-10 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-[#071016] p-5 md:p-7">
            <div className="flex min-h-[300px] flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
                  Readiness Index
                </p>

                <div className="mt-8 flex items-end gap-3">
                  <p className="text-[72px] font-light leading-none tracking-[-0.09em] text-[#F3F1EA] md:text-[92px]">
                    {readiness}
                  </p>
                  <p className="pb-3 text-[13px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                    / 100
                  </p>
                </div>

                <div className="mt-8 h-[6px] overflow-hidden bg-white/[0.055]">
                  <div
                    className="h-full bg-[#D0A85C] shadow-[0_0_28px_rgba(208,168,92,0.36)]"
                    style={{ width: `${readiness}%` }}
                  />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-[1px] bg-white/[0.05]">
                {readinessStages.map((stage, index) => {
                  const isReached = readiness >= (index + 1) * 25;

                  return (
                    <div
                      key={stage}
                      className={`p-3 text-center text-[9px] uppercase tracking-[0.16em] ${
                        isReached
                          ? "bg-[#D0A85C]/12 text-[#D0A85C]"
                          : "bg-[#08121A] text-[#D7DCE2]/28"
                      }`}
                    >
                      {stage}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-[1px] bg-white/[0.05]">
            {factors.map((factor) => (
              <div key={factor.label} className="bg-[#071016] p-4 md:p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[13px] text-[#F3F1EA]/88">
                      {factor.label}
                    </p>
                    <p className="mt-2 max-w-[580px] text-[12px] leading-6 text-[#D7DCE2]/45">
                      {factor.note}
                    </p>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                    {factor.value}%
                  </p>
                </div>

                <div className="mt-5 h-[5px] overflow-hidden bg-white/[0.055]">
                  <div
                    className="h-full bg-[#D0A85C] shadow-[0_0_24px_rgba(208,168,92,0.28)]"
                    style={{ width: `${factor.value}%` }}
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