import type { HerbRegulatoryStatusData, RegulatoryMarketProfile } from "../../types/herb-detail";
import {
    DETAIL_ACCENT_GOLD,
    DETAIL_ACCENT_GOLD_SUBTITLE,
    DETAIL_STATUS_GREEN,
    DETAIL_TEXT_MUTED_LABEL,
    DETAIL_TEXT_PRIMARY_BODY,
    detailModuleBodyClassName,
    detailModuleCardHeadingClassName,
    detailModuleCardPaddingClassName,
    detailModuleCardStyle,
    detailModuleCardSurfaceClassName,
    detailModuleGapClassName,
    detailModuleLabelClassName,
    detailModuleSectionClassName,
    detailModuleShellStyle,
    detailModuleShellWideContentClassName,
    detailModuleSubtitleClassName,
    detailModuleTitleClassName,
} from "./detail-module-layout";

interface RegulatoryStatusProps {
    regulatoryStatus: HerbRegulatoryStatusData;
}

function SearchIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-white/45">
            <circle cx="6" cy="6" r="4.25" stroke="currentColor" strokeWidth="1.1" />
            <path d="M9.25 9.25L12 12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
    );
}

function ChevronDownIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0 text-white/45">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function MarketSelector({ market }: { market: RegulatoryMarketProfile }) {
    return (
        <button
            type="button"
            className="inline-flex h-9 max-w-full items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 text-[12px] leading-none text-white/88 transition-colors hover:border-white/[0.12]"
            aria-haspopup="listbox"
            aria-label={`Selected market: ${market.countryName}`}
        >
            <SearchIcon />
            <span className="shrink-0 text-[14px] leading-none" aria-hidden>
                {market.flagEmoji}
            </span>
            <span className="truncate">{market.countryName}</span>
            <ChevronDownIcon />
        </button>
    );
}

function AccessStatusPill({ label }: { label: string }) {
    return (
        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: DETAIL_STATUS_GREEN }} aria-hidden />
            <span className="text-[11px] leading-none md:text-[12px]" style={{ color: DETAIL_STATUS_GREEN }}>
                {label}
            </span>
        </div>
    );
}

function CommercializationExtent({
    labels,
    filled,
}: {
    labels: string[];
    filled: number;
}) {
    return (
        <div className="min-w-0">
            <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                Overall Commercialization Extent
            </p>

            <div className="mt-5 flex max-w-full flex-wrap justify-start gap-1 lg:flex-nowrap">
                {labels.map((label, index) => {
                    const isFilled = index < filled;

                    return (
                        <div key={label} className="flex min-w-0 flex-col items-center gap-2">
                            <div
                                className="h-5 w-[120px] max-w-full shrink-0 rounded-full"
                                style={
                                    isFilled
                                        ? { backgroundColor: DETAIL_STATUS_GREEN }
                                        : {
                                              backgroundColor: "transparent",
                                              border: "1px solid rgba(255,255,255,0.12)",
                                          }
                                }
                                aria-hidden
                            />
                            <span className="w-[120px] max-w-full text-center text-[10px] leading-tight text-white/45 md:text-[11px]">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function DeploymentNotes({ notes }: { notes: string[] }) {
    return (
        <div className="min-w-0 lg:pl-6">
            <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                Deployment Notes
            </p>

            <ul className="mt-5 space-y-3">
                {notes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5">
                        <span
                            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: DETAIL_STATUS_GREEN }}
                            aria-hidden
                        />
                        <span className={detailModuleBodyClassName} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                            {note}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function MarketCard({ market }: { market: RegulatoryMarketProfile }) {
    return (
        <div
            className={`w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:min-h-[360px] lg:box-border`}
            style={detailModuleCardStyle}
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="text-[22px] leading-none md:text-[24px]" aria-hidden>
                        {market.flagEmoji}
                    </span>
                    <h3 className={detailModuleCardHeadingClassName}>{market.countryName}</h3>
                </div>
                <AccessStatusPill label={market.accessLabel} />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 border-b border-white/[0.06] pb-16 md:grid-cols-3 md:gap-8 lg:gap-10">
                {market.columns.map((column) => (
                    <div key={column.heading} className="min-w-0">
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                            {column.heading}
                        </p>
                        <p className={`mt-2 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                            {column.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
                <CommercializationExtent labels={market.commercializationLabels} filled={market.commercializationFilled} />
                <DeploymentNotes notes={market.deploymentNotes} />
            </div>
        </div>
    );
}

export function RegulatoryStatus({ regulatoryStatus }: RegulatoryStatusProps) {
    const { subtitle, defaultMarketId, markets, footerNote } = regulatoryStatus;
    const activeMarket = markets.find((market) => market.id === defaultMarketId) ?? markets[0];

    if (!activeMarket) {
        return null;
    }

    return (
        <section className={`${detailModuleSectionClassName} ${detailModuleGapClassName}`}>
            <div
                className={`${detailModuleShellWideContentClassName} flex min-h-0 flex-col lg:min-h-[620px]`}
                style={detailModuleShellStyle}
            >
                <header className="shrink-0">
                    <h2 className={detailModuleTitleClassName}>Regulatory Status</h2>
                    <p className={detailModuleSubtitleClassName} style={{ color: DETAIL_ACCENT_GOLD_SUBTITLE }}>
                        {subtitle}
                    </p>
                </header>

                <div className="mt-7">
                    <MarketSelector market={activeMarket} />
                </div>

                <div className="mt-8">
                    <MarketCard market={activeMarket} />
                </div>

                <p className="mt-7 text-[11px] leading-relaxed md:text-[12px]" style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                    <span className="text-white/55">Note:</span> {footerNote}
                </p>
            </div>
        </section>
    );
}
