import Image from "next/image";

interface HeroPanelProps {
  herb: {
    name: string;
    altitude: number;
    domain: string;
    readiness: number;
    power: number;
  };
}

export function HeroPanel({ herb }: HeroPanelProps) {
  return (
    <section className="relative z-10 mx-auto grid min-h-screen max-w-[1540px] grid-cols-1 gap-[1px] bg-white/[0.05] px-8 py-[120px] lg:grid-cols-[1.08fr_0.92fr]">
      <div className="bg-[#071016] p-10 lg:p-14">
        <p className="text-[11px] uppercase tracking-[0.26em] text-[#D0A85C]">
          Herb Intelligence Profile
        </p>

        <h1 className="mt-8 max-w-4xl text-[72px] font-medium leading-[0.95] tracking-[-0.065em] text-[#F3F1EA]">
          {herb.name}
        </h1>

        <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#D7DCE2]/70">
          A structured commercialization intelligence profile combining
          altitude origin, functional domain, biological power, readiness
          signal, and future evidence-layer expansion.
        </p>

        <div className="mt-14 grid max-w-2xl grid-cols-2 gap-[1px] bg-white/[0.05]">
          {[
            ["Altitude", `${herb.altitude}M`],
            ["Domain", herb.domain],
            ["Readiness", `${herb.readiness}/100`],
            ["Bioactive Power", `Level ${herb.power}`],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#071016] p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/38">
                {label}
              </p>

              <p className="mt-3 text-[18px] text-[#F3F1EA]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#071016] p-10">
        <div className="relative h-[460px] w-[460px] opacity-90">
          <Image
            src="/Cordyceps_sinensis.png"
            alt={herb.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}