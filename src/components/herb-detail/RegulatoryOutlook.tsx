const regulatoryItems = [
  {
    label: "Ingredient Category",
    value: "Botanical / Herbal Ingredient",
    note: "Positioned as a functional botanical ingredient rather than a drug-like active.",
    status: "Defined",
  },
  {
    label: "Claim Boundary",
    value: "Structure-function positioning preferred",
    note: "Marketing should avoid disease-treatment language and focus on wellness support.",
    status: "Controlled",
  },
  {
    label: "Market Entry Risk",
    value: "Medium",
    note: "Requires market-specific review before claims, labeling, and product launch.",
    status: "Watch",
  },
  {
    label: "Documentation Need",
    value: "Identity, safety, evidence package",
    note: "Core dossier should include botanical identity, safety basis, and evidence summary.",
    status: "Required",
  },
];

const readinessSteps = ["Identity", "Safety", "Evidence", "Claims", "Market Review"];

export function RegulatoryOutlook() {
  return (
    <div className="relative mt-16 overflow-hidden border border-white/[0.07] bg-[#08121A]/92 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 xl:p-8">
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
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]/88">
              Regulatory Outlook
            </p>

            <h3 className="mt-4 max-w-[780px] text-[22px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[24px] xl:text-[28px]">
              Market-entry and claim-positioning overview
            </h3>
          </div>

          <div className="border border-white/[0.06] bg-[#071016]/70 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/45">
            Compliance readiness layer
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] xl:mt-10 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="bg-[#071016] p-5 md:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
              Regulatory Pathway
            </p>

            <div className="mt-8 space-y-[1px] bg-white/[0.05]">
              {readinessSteps.map((step, index) => {
                const isComplete = index < 3;
                const isCurrent = index === 3;

                return (
                  <div
                    key={step}
                    className={`flex items-center justify-between p-4 text-[10px] uppercase tracking-[0.17em] ${
                      isComplete
                        ? "bg-[#D0A85C]/12 text-[#D0A85C]"
                        : isCurrent
                          ? "bg-[#0B1821] text-[#F3F1EA]/76"
                          : "bg-[#08121A] text-[#D7DCE2]/30"
                    }`}
                  >
                    <span>{step}</span>
                    <span>{isComplete ? "Ready" : isCurrent ? "Review" : "Pending"}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-[12px] leading-6 text-[#D7DCE2]/46">
              Regulatory treatment varies by market and final product format. This module frames
              early diligence priorities rather than replacing jurisdiction-specific legal review.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[1px] bg-white/[0.05] md:grid-cols-2">
            {regulatoryItems.map((item) => (
              <div key={item.label} className="bg-[#071016] p-4 md:p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                    {item.label}
                  </p>

                  <span className="border border-[#D0A85C]/20 bg-[#D0A85C]/10 px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-[#D0A85C]/80">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-[16px] leading-7 text-[#F3F1EA]">
                  {item.value}
                </p>

                <p className="mt-4 text-[12px] leading-6 text-[#D7DCE2]/45">
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