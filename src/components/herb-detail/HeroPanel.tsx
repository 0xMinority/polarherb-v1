import Image from "next/image";
import type { Herb } from "../../types/herb";
import { getDomainColor } from "../../lib/domain-colors";

interface HeroPanelProps {
    herb: Herb;
}

export function HeroPanel({ herb }: HeroPanelProps) {
    return (
        <section className="relative z-10 mx-auto grid min-h-screen max-w-[1540px] grid-cols-1 gap-[1px] bg-white/[0.05] px-8 py-[120px] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-[#071016] p-10 lg:p-14">
                <p
                    className="text-[11px] uppercase tracking-[0.26em]"
                    style={{ color: getDomainColor(herb.domain) }}
                >
                    Herb Intelligence Profile
                </p>

                <h1 className="mt-8 max-w-4xl text-[72px] font-medium leading-[0.95] tracking-[-0.065em] text-[#F3F1EA]">
                    {herb.name}
                </h1>

                <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#D7DCE2]/70">
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

            <div className="flex items-center justify-center bg-[#071016] p-10">
                <div
                    className="relative h-[460px] w-[460px] opacity-90"
                    style={{
                        filter: `drop-shadow(0 0 80px ${getDomainColor(herb.domain)}22)`,
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