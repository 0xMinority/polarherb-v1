import Image from "next/image";
import type { Herb } from "../../types/herb";
import { getDomainColor } from "../../lib/domain-colors";

interface HeroPanelProps {
    herb: Herb;
}

export function HeroPanel({ herb }: HeroPanelProps) {
    return (
        <section className="relative z-10 mx-auto grid min-h-[980px] max-w-[1680px] grid-cols-1 gap-[1px] bg-white/[0.05] px-5 py-[90px] md:px-8 md:py-[120px] xl:min-h-[1180px] xl:px-10 xl:py-[150px] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative overflow-hidden bg-[#071016] p-7 md:p-10 xl:p-[72px]">

                <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{
                        background: `
                    radial-gradient(
                    circle at top left,
                    ${getDomainColor(herb.domain)}10,
                    transparent 42%
                     )
                    `,
                    }}
                />

                <div className="relative z-10">

                    <p
                        className="text-[11px] uppercase tracking-[0.26em]"
                        style={{ color: getDomainColor(herb.domain) }}
                    >
                        Herb Intelligence Profile
                    </p>

                    <h1 className="mt-8 max-w-4xl text-[54px] font-medium leading-[0.92] tracking-[-0.08em] text-[#F3F1EA] md:text-[72px] xl:mt-10 xl:text-[92px]">
                        {herb.name}
                    </h1>

                    <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#D7DCE2]/70 md:text-[16px] md:leading-8 xl:mt-8 xl:text-[17px]">
                        {herb.summary}
                    </p>

                    <div className="mt-14 grid max-w-2xl grid-cols-2 gap-[1px] bg-white/[0.05]">
                        {[
                            ["Altitude", `${herb.altitude}M`],
                            ["Domain", herb.domain],
                            ["Readiness", `${herb.readiness}/100`],
                            ["Bioactive Power", `Level ${herb.power}`],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="p-6"
                                style={{
                                    background:
                                        label === "Domain" || label === "Bioactive Power"
                                            ? `${getDomainColor(herb.domain)}08`
                                            : "#071016",
                                    border:
                                        label === "Domain" || label === "Bioactive Power"
                                            ? `1px solid ${getDomainColor(herb.domain)}18`
                                            : "1px solid rgba(255,255,255,0.04)",
                                }}
                            >
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/38">
                                    {label}
                                </p>

                                <p
                                    className="mt-3 text-[18px]"
                                    style={{
                                        color:
                                            label === "Domain"
                                                ? getDomainColor(herb.domain)
                                                : "#F3F1EA",
                                    }}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden bg-[#071016] p-10">
                <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                        background: `radial-gradient(circle at center, ${getDomainColor(
                            herb.domain
                        )}12, transparent 48%)`,
                    }}
                />

                <div
                    className="relative h-[320px] w-[320px] opacity-[0.96] md:h-[460px] md:w-[460px] xl:h-[620px] xl:w-[620px]"
                    style={{
                        filter: `drop-shadow(0 0 120px ${getDomainColor(
                            herb.domain
                        )}22) drop-shadow(0 0 220px ${getDomainColor(
                            herb.domain
                        )}11)`,
                    }}
                >
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