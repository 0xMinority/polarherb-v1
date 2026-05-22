import type { Herb } from "../../types/herb";
import type { HerbDetailData } from "../../types/herb-detail";
import { getDomainColor } from "../../lib/domain-colors";
import { EvidenceComposition } from "./EvidenceComposition";
import { BioactiveMechanism } from "./BioactiveMechanism";
import { CommercialReadiness } from "./CommercialReadiness";
import { RegulatoryOutlook } from "./RegulatoryOutlook";
import type { HerbProfileSection } from "../../config/herb-sections";

interface SectionCardProps {
    index: number;
    title: HerbProfileSection;
    herb: Herb;
    detail: HerbDetailData;
}

export function SectionCard({
    index,
    title,
    herb,
    detail,
}: SectionCardProps) {
    return (
        <section
            id={title.toLowerCase().replace(/\s+/g, "-")}
            className="relative min-h-[520px] scroll-mt-8 overflow-hidden px-5 py-[80px] md:px-8 md:py-[100px] xl:min-h-[620px] xl:px-12 xl:py-[120px]"
            style={{
                background: isPrioritySection(title)
                    ? "linear-gradient(to bottom, rgba(255,255,255,0.018), #071016)"
                    : "#071016",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    background: `
            radial-gradient(
                circle at top left,
                ${getDomainColor(herb.domain)}08,
                transparent 42%
            )
        `,
                }}
            />
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

                <h2 className="mt-5 text-[32px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[38px] xl:mt-6 xl:text-[44px]">
                    {title}
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#D7DCE2]/62">
                        {herb.altitude}m
                    </div>

                    <div
                        className="border px-3 py-2 text-[11px] uppercase tracking-[0.16em]"
                        style={{
                            borderColor: `${getDomainColor(herb.domain)}22`,
                            color: getDomainColor(herb.domain),
                            background: `${getDomainColor(herb.domain)}08`,
                        }}
                    >
                        {herb.domain}
                    </div>

                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#D7DCE2]/62">
                        Readiness {herb.readiness}
                    </div>

                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#D7DCE2]/62">
                        Power {herb.power}
                    </div>
                </div>

                <p className="mt-7 max-w-[820px] text-[15px] leading-8 text-[#D7DCE2]/68 md:text-[16px] xl:mt-10 xl:text-[17px] xl:leading-[2.1]">
                    {getSectionDescription(title, herb.name)}
                </p>

                <div className="mt-12 max-w-[1240px] border-t border-white/[0.05] pt-8 md:pt-10 xl:mt-16 xl:pt-12">
                    <div className="grid grid-cols-2 gap-[1px] bg-white/[0.05] lg:grid-cols-4">
                        {[
                            ["Altitude Signal", `${herb.altitude}M`],
                            ["Functional Domain", herb.domain],
                            ["Readiness", `${herb.readiness}/100`],
                            ["Bioactive Power", `Level ${herb.power}`],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="p-4 xl:p-5"
                                style={{
                                    background:
                                        label === "Functional Domain" ||
                                            label === "Bioactive Power"
                                            ? `${getDomainColor(herb.domain)}08`
                                            : "#0A141D",

                                    border:
                                        label === "Functional Domain" ||
                                            label === "Bioactive Power"
                                            ? `1px solid ${getDomainColor(herb.domain)}18`
                                            : "1px solid rgba(255,255,255,0.04)",
                                }}
                            >
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                                    {label}
                                </p>

                                <p
                                    className="mt-3 text-[18px] tracking-[-0.03em] md:text-[20px] xl:mt-4 xl:text-[22px]"
                                    style={{
                                        color:
                                            label === "Functional Domain"
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
            {title === "Bioactive Mechanism" && (
                <BioactiveMechanism
                    herbName={herb.name}
                    domain={herb.domain}
                    mechanism={detail.mechanism}
                />
            )}
            {title === "Commercial Readiness" && (
                <CommercialReadiness commercial={detail.commercial} />
            )}
            {title === "Regulatory Outlook" && (
                <RegulatoryOutlook regulatory={detail.regulatory} />
            )}
            {title === "Evidence Layer" && (
                <EvidenceComposition herbName={herb.name} evidence={detail.evidence} />
            )}
        </section>
    );
}

function getSectionDescription(title: HerbProfileSection, herbName: string) {
    const descriptions: Record<string, string> = {
        "Origin Signal": `${herbName} is evaluated through its altitude ecology, origin constraints, and environmental positioning to determine whether its natural habitat can support a differentiated commercialization narrative.`,

        "Bioactive Mechanism": `${herbName} is analyzed through its dominant functional domain, biological strength level, and future compound-level evidence layers to identify its most credible mechanism direction.`,

        "Commercial Readiness": `${herbName} is assessed through readiness scoring, market familiarity, supply-chain plausibility, and suitability for ingredient-led product development.`,

        "Regulatory Outlook": `${herbName} will be mapped against market-entry constraints, claim boundaries, ingredient category risks, and documentation requirements across target jurisdictions.`,

        "Evidence Layer": `${herbName} will aggregate traditional use, preclinical findings, human evidence, commercial adoption, and AI-assisted mechanistic signals into a transparent evidence composition system.`,
    };

    return descriptions[title] ?? `${herbName} is being evaluated as part of the PolarHerb intelligence system.`;
}

function isPrioritySection(title: HerbProfileSection) {
    return [
        "Bioactive Mechanism",
        "Commercial Readiness",
        "Evidence Layer",
    ].includes(title);
}