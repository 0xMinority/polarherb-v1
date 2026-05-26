import Link from "next/link";
import type {
    EvidenceCompositionRow,
    EvidenceGlanceMetric,
    HerbEvidenceLevelData,
} from "../../types/herb-detail";
import {
    DETAIL_ACCENT_GOLD,
    DETAIL_ACCENT_GOLD_SUBTITLE,
    DETAIL_STATUS_GREEN,
    DETAIL_TEXT_MUTED_LABEL,
    DETAIL_TEXT_PRIMARY_BODY,
    detailModuleBodyClassName,
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

interface EvidenceLevelProps {
    evidenceLevel: HerbEvidenceLevelData;
}

const BAR_WIDTH = 26;
const BAR_HEIGHT = 9;
const BAR_GAP = 5;
const TOTAL_BARS = 5;

function ExternalLinkIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

function EvidenceStrengthBars({ filled, tone }: { filled: number; tone: EvidenceCompositionRow["tone"] }) {
    const fillColor = tone === "strong" ? DETAIL_STATUS_GREEN : `${DETAIL_ACCENT_GOLD}CC`;

    return (
        <div className="flex shrink-0" style={{ gap: BAR_GAP }} aria-hidden>
            {Array.from({ length: TOTAL_BARS }).map((_, index) => (
                <span
                    key={index}
                    className="rounded-full"
                    style={{
                        width: BAR_WIDTH,
                        height: BAR_HEIGHT,
                        backgroundColor: index < filled ? fillColor : "rgba(255,255,255,0.1)",
                    }}
                />
            ))}
        </div>
    );
}

function GlanceMetric({ metric, showDivider }: { metric: EvidenceGlanceMetric; showDivider: boolean }) {
    const metricFontSize = metric.valueVariant === "number" ? 42 : 38;

    return (
        <div
            className={`flex min-w-0 flex-col items-center justify-center px-0 py-4 text-center lg:py-0 ${
                showDivider ? "lg:border-l lg:border-white/[0.06]" : ""
            }`}
        >
            <p
                className="text-center font-medium leading-none tracking-tight"
                style={{ color: DETAIL_STATUS_GREEN, fontSize: metricFontSize }}
            >
                {metric.value}
            </p>
            <p className={`mt-2.5 text-center ${detailModuleBodyClassName} font-medium text-white/90`}>{metric.label}</p>
            <p className={`mt-1.5 max-w-[210px] text-center ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                {metric.caption}
            </p>
        </div>
    );
}

function CompositionRow({ row }: { row: EvidenceCompositionRow }) {
    return (
        <div className="grid grid-cols-1 items-center gap-4 border-b border-white/[0.06] py-2 last:border-b-0 lg:grid-cols-[minmax(0,210px)_minmax(0,250px)_minmax(0,1fr)] lg:gap-6 lg:py-[6px]">
            <p className={`${detailModuleBodyClassName} font-medium text-white/88`}>{row.dimension}</p>

            <div className="flex min-w-0 items-center gap-3.5">
                <EvidenceStrengthBars filled={row.filledBars} tone={row.tone} />
                <span className={`${detailModuleBodyClassName} shrink-0 whitespace-nowrap text-white/80`}>
                    {row.level}
                </span>
            </div>

            <p className={`${detailModuleBodyClassName} min-w-0`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                {row.description}
            </p>
        </div>
    );
}

function InsightColumn({ title, body, showDivider }: { title: string; body: string; showDivider: boolean }) {
    return (
        <div
            className={`flex min-w-0 flex-col justify-center py-3 lg:py-0 ${
                showDivider ? "lg:border-l lg:border-white/[0.06] lg:pl-7" : "lg:pr-4"
            }`}
        >
            <p className={`${detailModuleBodyClassName} font-medium text-white/90`}>{title}</p>
            <p className={`mt-2 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                {body}
            </p>
        </div>
    );
}

export function EvidenceLevel({ evidenceLevel }: EvidenceLevelProps) {
    const { subtitle, glance, composition, insight, developerDashboardCta } = evidenceLevel;

    return (
        <section className={`${detailModuleSectionClassName} ${detailModuleGapClassName}`}>
            <div
                className={`${detailModuleShellWideContentClassName} flex min-h-0 flex-col`}
                style={detailModuleShellStyle}
            >
                <header className="shrink-0">
                    <h2 className={detailModuleTitleClassName}>Evidence Level</h2>
                    <p className={detailModuleSubtitleClassName} style={{ color: DETAIL_ACCENT_GOLD_SUBTITLE }}>
                        {subtitle}
                    </p>
                </header>

                <div
                    className={`mt-6 w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:box-border lg:h-[224px]`}
                    style={detailModuleCardStyle}
                >
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                        Evidence at a Glance
                    </p>

                    <div className="mt-5 grid h-[144px] grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-0">
                        {glance.map((metric, index) => (
                            <GlanceMetric key={metric.label} metric={metric} showDivider={index > 0} />
                        ))}
                    </div>
                </div>

                <div
                    className={`mt-6 w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:box-border`}
                    style={detailModuleCardStyle}
                >
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                        Evidence Composition
                    </p>

                    <div className="mt-1.5">
                        {composition.map((row) => (
                            <CompositionRow key={row.dimension} row={row} />
                        ))}
                    </div>
                </div>

                <div
                    className={`mt-6 w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:box-border lg:h-[150px]`}
                    style={detailModuleCardStyle}
                >
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                        Evidence Insight
                    </p>

                    <div className="mt-3 grid grid-cols-1 gap-6 lg:mt-4 lg:grid-cols-3 lg:gap-0">
                        {insight.map((column, index) => (
                            <InsightColumn
                                key={column.title}
                                title={column.title}
                                body={column.body}
                                showDivider={index > 0}
                            />
                        ))}
                    </div>
                </div>

                <Link
                    href={developerDashboardCta.href}
                    className="group mt-6 flex w-full min-w-0 items-center gap-4 overflow-hidden rounded-[12px] px-5 py-3 transition-opacity hover:opacity-95 lg:mt-6 lg:h-[56px] lg:px-6 lg:py-0"
                    style={{
                        background: "linear-gradient(90deg, #C5A059 0%, #D0A85C 48%, #B8924A 100%)",
                    }}
                >
                    <span className="flex shrink-0 items-center gap-2 text-[#1A1408]">
                        <ExternalLinkIcon />
                        <span className="text-[12px] font-semibold md:text-[13px]">{developerDashboardCta.label}</span>
                    </span>

                    <span className="hidden min-w-0 flex-1 text-[10px] leading-snug text-[#1A1408]/72 md:block md:text-[11px]">
                        {developerDashboardCta.description}
                    </span>

                    <span className="ml-auto shrink-0 text-[#1A1408]/70 transition-transform group-hover:translate-x-0.5">
                        <ChevronRightIcon />
                    </span>
                </Link>
            </div>
        </section>
    );
}
