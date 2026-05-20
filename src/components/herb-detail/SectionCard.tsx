interface SectionCardProps {
    index: number;
    title: string;
    herb: {
      name: string;
      altitude: number;
      domain: string;
      readiness: number;
      power: number;
    };
  }
  
  export function SectionCard({
    index,
    title,
    herb,
  }: SectionCardProps) {
    return (
      <section
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className="relative min-h-[520px] scroll-mt-8 overflow-hidden bg-[#071016] p-10 lg:p-14"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[160px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent)]" />
        </div>
  
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]/75">
              {String(index + 1).padStart(2, "0")}
            </p>
  
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/32">
              <span>Intelligence Layer</span>
              <span>Structured Signal</span>
            </div>
          </div>
  
          <h2 className="mt-6 text-[34px] font-medium tracking-[-0.04em] text-[#F3F1EA]">
            {title}
          </h2>
  
          <p className="mt-6 max-w-[760px] text-[15px] leading-8 text-[#D7DCE2]/62">
            This module will expand into a structured intelligence layer for{" "}
            {herb.name}, combining data visualization, evidence interpretation,
            and commercialization context.
          </p>
  
          <div className="mt-14 max-w-[1100px] border-t border-white/[0.05] pt-10">
            <div className="grid grid-cols-2 gap-[1px] bg-white/[0.05] lg:grid-cols-4">
              {[
                ["Altitude Signal", `${herb.altitude}M`],
                ["Functional Domain", herb.domain],
                ["Readiness", `${herb.readiness}/100`],
                ["Bioactive Power", `Level ${herb.power}`],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#0A141D] p-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                    {label}
                  </p>
  
                  <p className="mt-4 text-[22px] tracking-[-0.03em] text-[#F3F1EA]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }