import type { Herb } from "../../types/herb";
import type { HerbDetailData } from "../../types/herb-detail";
import { getDomainColor } from "../../lib/domain-colors";
import { EvidenceComposition } from "./EvidenceComposition";
import { BioactiveMechanism } from "./BioactiveMechanism";
import { CommercialReadiness } from "./CommercialReadiness";
import { RegulatoryOutlook } from "./RegulatoryOutlook";
import type { HerbProfileSection } from "../../config/herb-sections";
import { herbSectionMeta } from "../../config/herb-section-meta";
import { toSectionId } from "../../lib/section-id";

interface SectionCardProps {
    index: number;
    title: HerbProfileSection;
    herb: Herb;
    detail: HerbDetailData;
}

const DETAIL_SURFACE = "#071016";
const DETAIL_CARD_SURFACE = "#0A141D";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#D7DCE2";
const DETAIL_ACCENT_GOLD = "#D0A85C";
const DETAIL_GRID_BORDER = "bg-white/[0.05]";

type SectionRendererProps = {
    herb: Herb;
    detail: HerbDetailData;
};

const sectionRenderers: Partial<
    Record<HerbProfileSection, ({ herb, detail }: SectionRendererProps) => React.ReactNode>
> = {
    "Bioactive Mechanism": ({ herb, detail }) => (
        <BioactiveMechanism
            herbName={herb.name}
            domain={herb.domain}
            mechanism={detail.mechanism}
        />
    ),
    "Commercial Readiness": ({ detail }) => (
        <CommercialReadiness commercial={detail.commercial} />
    ),
    "Regulatory Outlook": ({ detail }) => (
        <RegulatoryOutlook regulatory={detail.regulatory} />
    ),
    "Evidence Layer": ({ herb, detail }) => (
        <EvidenceComposition herbName={herb.name} evidence={detail.evidence} />
    ),
};

function renderSectionContent(
    title: HerbProfileSection,
    herb: Herb,
    detail: HerbDetailData
) {
    const SectionRenderer = sectionRenderers[title];

    if (!SectionRenderer) {
        return null;
    }

    return <SectionRenderer herb={herb} detail={detail} />;
}

export function SectionCard({
    index,
    title,
    herb,
    detail,
}: SectionCardProps) {
    const meta = herbSectionMeta[title];
    return (
        <section
            id={toSectionId(title)}
            className="relative min-h-[520px] scroll-mt-8 overflow-hidden px-5 py-[80px] md:px-8 md:py-[100px] xl:min-h-[620px] xl:px-12 xl:py-[120px]"
            style={{
                background: meta.priority
                    ? `linear-gradient(to bottom, rgba(255,255,255,0.018), ${DETAIL_SURFACE})`
                    : DETAIL_SURFACE,
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
                    <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: `${DETAIL_ACCENT_GOLD}BF` }}>
                        {String(index + 1).padStart(2, "0")}
                    </p>

                    <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}52` }}>
                        <span>Intelligence Layer</span>
                        <span>Structured Signal</span>
                    </div>
                </div>

                <h2 className="mt-5 text-[32px] font-light tracking-[-0.05em] md:text-[38px] xl:mt-6 xl:text-[44px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
                    {title}
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: `${DETAIL_TEXT_MUTED}9E` }}>
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

                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: `${DETAIL_TEXT_MUTED}9E` }}>
                        Readiness {herb.readiness}
                    </div>

                    <div className="border border-white/[0.08] px-3 py-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: `${DETAIL_TEXT_MUTED}9E` }}>
                        Power {herb.power}
                    </div>
                </div>

                <p className="mt-7 max-w-[820px] text-[15px] leading-8 md:text-[16px] xl:mt-10 xl:text-[17px] xl:leading-[2.1]" style={{ color: `${DETAIL_TEXT_MUTED}AD` }}>
                    {meta.description}
                </p>

                <div className="mt-12 max-w-[1240px] border-t border-white/[0.05] pt-8 md:pt-10 xl:mt-16 xl:pt-12">
                    <div className={`grid grid-cols-2 gap-[1px] ${DETAIL_GRID_BORDER} lg:grid-cols-4`}>
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
                                            : DETAIL_CARD_SURFACE,

                                    border:
                                        label === "Functional Domain" ||
                                            label === "Bioactive Power"
                                            ? `1px solid ${getDomainColor(herb.domain)}18`
                                            : "1px solid rgba(255,255,255,0.04)",
                                }}
                            >
                                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}59` }}>
                                    {label}
                                </p>

                                <p
                                    className="mt-3 text-[18px] tracking-[-0.03em] md:text-[20px] xl:mt-4 xl:text-[22px]"
                                    style={{
                                        color:
                                            label === "Functional Domain"
                                                ? getDomainColor(herb.domain)
                                                : DETAIL_TEXT_PRIMARY,
                                    }}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {renderSectionContent(title, herb, detail)}
        </section>
    );
}