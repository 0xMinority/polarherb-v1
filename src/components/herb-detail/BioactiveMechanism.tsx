import { getDomainColor } from "../../lib/domain-colors";
import type { HerbDomain } from "../../types/herb";

interface BioactiveMechanismProps {
  herbName: string;
  domain: HerbDomain;
}

const pathways = [
  {
    label: "AMPK Activation",
    strength: 82,
    description: "Energy-sensing pathway associated with metabolic resilience and cellular efficiency.",
  },
  {
    label: "Mitochondrial Support",
    strength: 74,
    description: "Predicted support for ATP-linked mitochondrial performance and fatigue resistance.",
  },
  {
    label: "Neuroinflammation Modulation",
    strength: 68,
    description: "Possible interaction with inflammatory signaling relevant to cognitive recovery.",
  },
  {
    label: "Oxidative Stress Reduction",
    strength: 91,
    description: "Strong antioxidant-direction signal across stress response and cellular protection pathways.",
  },
];

const mechanismMetrics = [
  ["Predicted Targets", "42"],
  ["Pathway Confidence", "High"],
  ["Mechanistic Convergence", "78%"],
];

export function BioactiveMechanism({
  herbName,
  domain,
}: BioactiveMechanismProps) {
  const domainColor = getDomainColor(domain);

  return (
    <div className="relative mt-16 overflow-hidden border border-white/[0.07] bg-[#08121A]/92 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 xl:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-75"
        style={{
          background: `
            radial-gradient(circle at top left, ${domainColor}14, transparent 38%),
            radial-gradient(circle at 80% 20%, ${domainColor}08, transparent 34%),
            linear-gradient(to bottom, rgba(255,255,255,0.018), transparent 32%)
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: domainColor }}
            >
              Mechanistic Intelligence
            </p>

            <h3 className="mt-4 max-w-[780px] text-[22px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[24px] xl:text-[28px]">
              Predicted pathway interactions for {herbName}
            </h3>
          </div>

          <div
            className="border px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/45"
            style={{
              borderColor: `${domainColor}22`,
              background: `${domainColor}08`,
            }}
          >
            AI-inferred network layer
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] md:grid-cols-3 xl:mt-10">
          {mechanismMetrics.map(([label, value]) => (
            <div key={label} className="bg-[#071016] p-4 md:p-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                {label}
              </p>

              <p
                className="mt-4 text-[22px] font-light tracking-[-0.04em] md:text-[24px]"
                style={{
                  color: label === "Pathway Confidence" ? domainColor : "#F3F1EA",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] xl:mt-10 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-[#071016] p-5 md:p-7">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ borderColor: `${domainColor}22` }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{ borderColor: `${domainColor}33` }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${domainColor}24, transparent 68%)`,
                boxShadow: `0 0 80px ${domainColor}22`,
              }}
            />

            <div className="relative z-10 flex h-full min-h-[280px] items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#D7DCE2]/38">
                  Pathway Convergence
                </p>
                <p
                  className="mt-5 text-[52px] font-light tracking-[-0.08em] md:text-[64px]"
                  style={{ color: domainColor }}
                >
                  78%
                </p>
                <p className="mx-auto mt-5 max-w-[260px] text-[12px] leading-6 text-[#D7DCE2]/48">
                  Multi-target signal concentration across predicted biological pathways.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-[1px] bg-white/[0.05]">
            {pathways.map((item) => (
              <div
                key={item.label}
                className="bg-[#071016] p-4 transition-opacity duration-300 hover:opacity-90 md:p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[13px] text-[#F3F1EA]/88">{item.label}</p>
                    <p className="mt-2 max-w-[580px] text-[12px] leading-6 text-[#D7DCE2]/45">
                      {item.description}
                    </p>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                    {item.strength}%
                  </p>
                </div>

                <div className="mt-5 h-[5px] overflow-hidden bg-white/[0.055]">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${item.strength}%`,
                      background: domainColor,
                      boxShadow: `0 0 24px ${domainColor}33`,
                    }}
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