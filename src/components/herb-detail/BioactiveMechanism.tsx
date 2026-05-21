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
  },
  {
    label: "Mitochondrial Support",
    strength: 74,
  },
  {
    label: "Neuroinflammation Modulation",
    strength: 68,
  },
  {
    label: "Oxidative Stress Reduction",
    strength: 91,
  },
];

export function BioactiveMechanism({
  herbName,
  domain,
}: BioactiveMechanismProps) {
  return (
    <div className="mt-16 border border-white/[0.07] bg-[#08121A]/92 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
        Mechanistic Intelligence
      </p>

      <h3 className="mt-4 text-[24px] tracking-[-0.04em] text-[#F3F1EA]">
        Predicted pathway interactions for {herbName}
      </h3>

      <div className="mt-8 grid grid-cols-3 gap-[1px] bg-white/[0.05]">
        {[
          ["Predicted Targets", "42"],
          ["Pathway Confidence", "High"],
          ["Mechanistic Convergence", "78%"],
        ].map(([label, value]) => (
          <div key={label} className="bg-[#071016] p-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
              {label}
            </p>

            <p
              className="mt-4 text-[24px] tracking-[-0.04em]"
              style={{
                color:
                  label === "Pathway Confidence"
                    ? getDomainColor(domain)
                    : "#F3F1EA",
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {pathways.map((item) => (
          <div
            key={item.label}
            className="transition-opacity duration-300 hover:opacity-85"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[13px] text-[#D7DCE2]/78">
                {item.label}
              </p>

              <p className="text-[11px] text-[#D7DCE2]/38">
                {item.strength}%
              </p>
            </div>

            <div className="h-[6px] bg-white/[0.05]">
              <div
                className="h-full transition-all duration-700 ease-out"
                style={{
                  width: `${item.strength}%`,
                  background: getDomainColor(domain),
                  boxShadow: `0 0 24px ${getDomainColor(domain)}33`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}