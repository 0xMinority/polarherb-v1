interface CommercialReadinessProps {
    readiness: number;
  }
  
  const readinessFactors = [
    ["Market Familiarity", 86],
    ["Supply Plausibility", 72],
    ["Formulation Fit", 81],
    ["Brand Differentiation", 94],
  ];
  
  export function CommercialReadiness({
    readiness,
  }: CommercialReadinessProps) {
    return (
      <div className="mt-14 border border-white/[0.06] bg-[#0A141D] p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
          Commercial Readiness
        </p>
  
        <h3 className="mt-4 text-[24px] tracking-[-0.04em] text-[#F3F1EA]">
          Ingredient commercialization readiness score
        </h3>
  
        <div className="mt-8 grid grid-cols-[160px_1fr] gap-8">
          <div>
            <p className="text-[64px] tracking-[-0.08em] text-[#F3F1EA]">
              {readiness}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/38">
              Readiness / 100
            </p>
          </div>
  
          <div className="space-y-5">
            {readinessFactors.map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between">
                  <p className="text-[12px] text-[#D7DCE2]/70">{label}</p>
                  <p className="text-[11px] text-[#D7DCE2]/38">{value}%</p>
                </div>
  
                <div className="h-[6px] bg-white/[0.05]">
                  <div
                    className="h-full bg-[#D0A85C]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }