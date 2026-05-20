import Image from "next/image";
import { notFound } from "next/navigation";
import { herbNodes } from "../../../src/data/herbs";

const profileSections = [
  "Origin Signal",
  "Bioactive Mechanism",
  "Commercial Readiness",
  "Regulatory Outlook",
  "Evidence Layer",
];

interface HerbDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function HerbDetailPage({ params }: HerbDetailPageProps) {
  const { id } = await params;

  const herb = herbNodes.find((item) => item.id === id);

  if (!herb) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040B11] text-[#F3F1EA]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[160px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent)]" />
      </div>
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
                <p className="mt-3 text-[18px] text-[#F3F1EA]">{value}</p>
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
      <section className="relative z-10 mx-auto grid max-w-[1540px] grid-cols-1 gap-[1px] bg-white/[0.05] px-8 pb-[140px] lg:grid-cols-[360px_1fr]">
        <aside className="bg-[#071016] p-8 lg:sticky lg:top-8 lg:self-start">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]">
            Profile Index
          </p>

          <div className="mt-8 space-y-[1px] bg-white/[0.05]">
            {profileSections.map((section, index) => {
              const isActive = index === 0;

              return (
                <a
                  href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                  key={section}
                  className={`block px-4 py-4 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${isActive
                    ? "bg-[#0A141D] text-[#F3F1EA]"
                    : "bg-[#071016] text-[#D7DCE2]/42 hover:bg-[#0A141D] hover:text-[#F3F1EA]"
                    }`}
                >
                  {String(index + 1).padStart(2, "0")} / {section}
                </a>
              );
            })}
          </div>
        </aside>

        <div className="space-y-[1px]">
          {profileSections.map((title, index) => (
            <section
              id={title.toLowerCase().replace(/\s+/g, "-")}
              key={title}
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
                  This module will expand into a structured intelligence layer for {herb.name},
                  combining data visualization, evidence interpretation, and commercialization context.
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
          ))}
        </div>
      </section>
    </main>
  );
}