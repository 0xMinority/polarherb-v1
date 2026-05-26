import Image from "next/image";
import type { HerbFormulationReadinessData } from "../../types/herb-detail";
import {
    DETAIL_ACCENT_GOLD,
    DETAIL_ACCENT_GOLD_SUBTITLE,
    DETAIL_TEXT_MUTED_LABEL,
    DETAIL_TEXT_PRIMARY_BODY,
    detailModuleAccentHeadingClassName,
    detailModuleBodyClassName,
    detailModuleBodySnugClassName,
    detailModuleCardPaddingClassName,
    detailModuleCardPaddingCompactClassName,
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

interface FormulationReadinessProps {
    formulationReadiness: HerbFormulationReadinessData;
}

const READINESS_GREEN = "#7FAE8D";

const FORMULATION_ICON_BASE = "/herb/001_cordyceps_sinensis/module7_formulation_readiness";

function resolveFormulationIconSrc(icon: string) {
    if (icon.startsWith(FORMULATION_ICON_BASE)) return icon;
    const filename = icon.split("/").filter(Boolean).pop();
    return filename ? `${FORMULATION_ICON_BASE}/${filename}` : icon;
}

function MiniScoreBars({ filled, total = 5, size = "default" }: { filled: number; total?: number; size?: "default" | "large" }) {
    const barClassName = size === "large" ? "h-[4px] w-[18px]" : "h-[3px] w-[14px]";

    return (
        <div className="flex gap-[4px]" aria-hidden>
            {Array.from({ length: total }).map((_, index) => (
                <span
                    key={index}
                    className={`${barClassName} rounded-full`}
                    style={{
                        backgroundColor: index < filled ? DETAIL_ACCENT_GOLD : "rgba(255,255,255,0.1)",
                    }}
                />
            ))}
        </div>
    );
}

function ConsiderationItem({
    title,
    description,
    score,
    icon,
}: {
    title: string;
    description: string;
    score: number;
    icon: string;
}) {
    const filled = Math.min(5, Math.max(0, Math.round(score)));

    return (
        <div className="grid min-w-0 grid-cols-[40px_minmax(0,0.72fr)_172px] items-start gap-5 pr-4">
            <div className="relative mt-0.5 h-8 w-8 shrink-0">
                <Image src={resolveFormulationIconSrc(icon)} alt="" fill className="object-contain" sizes="32px" />
            </div>

            <div className="min-w-0 max-w-[235px]">
                <p className={`${detailModuleBodySnugClassName} font-medium text-white/90`}>{title}</p>
                <p className={`mt-1 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                    {description}
                </p>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-4 pt-1.5">
                <MiniScoreBars filled={filled} size="large" />
                <span className="w-[38px] whitespace-nowrap text-right text-[11px] tabular-nums leading-none text-white/72 md:text-[12px]">
                    {score.toFixed(1)} / 5
                </span>
            </div>
        </div>
    );
}

function FormatRow({
    name,
    suitability,
    filledBars,
    icon,
}: {
    name: string;
    suitability: string;
    filledBars: number;
    icon: string;
}) {
    const isStrong = suitability.toLowerCase().includes("very");

    return (
        <div className="grid grid-cols-[260px_132px_100px] items-center gap-6 border-b border-white/[0.06] py-2.5 last:border-b-0">
            <div className="flex min-w-0 items-center gap-3">
                <div className="relative h-6 w-6 shrink-0">
                    <Image src={resolveFormulationIconSrc(icon)} alt="" fill className="object-contain" sizes="24px" />
                </div>
                <span className={detailModuleBodySnugClassName}>{name}</span>
            </div>

            <div className="flex justify-start">
                <MiniScoreBars filled={filledBars} size="large" />
            </div>
            <span
                className="text-right text-[11px] leading-none md:text-[12px]"
                style={{ color: isStrong ? `${DETAIL_ACCENT_GOLD}CC` : `${DETAIL_TEXT_MUTED_LABEL}` }}
            >
                {suitability}
            </span>
        </div>
    );
}

function ReadinessIndicatorRow({ label, icon }: { label: string; icon: string }) {
    return (
        <div className="grid min-w-0 grid-cols-[40px_8px_minmax(0,1fr)] items-center gap-2.5">
            <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A059]/34 bg-black/25"
                aria-hidden
            >
                <div className="relative h-6 w-6">
                    <Image src={resolveFormulationIconSrc(icon)} alt="" fill className="object-contain" sizes="20px" />
                </div>
            </div>
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: READINESS_GREEN }} aria-hidden />
            <span className={`${detailModuleBodyClassName} min-w-0 leading-snug`}>{label}</span>
        </div>
    );
}

export function FormulationReadiness({ formulationReadiness }: FormulationReadinessProps) {
    const { subtitle, considerations, suitableFormats, readinessInsight } = formulationReadiness;

    return (
        <section className={`${detailModuleSectionClassName} ${detailModuleGapClassName}`}>
            <div
                className={`${detailModuleShellWideContentClassName} flex flex-col`}
                style={detailModuleShellStyle}
            >
                <header className="shrink-0">
                    <h2 className={detailModuleTitleClassName}>Formulation Readiness</h2>
                    <p className={detailModuleSubtitleClassName} style={{ color: DETAIL_ACCENT_GOLD_SUBTITLE }}>
                        {subtitle}
                    </p>
                </header>

                <div
                    className={`mt-6 w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:h-[262px]`}
                    style={detailModuleCardStyle}
                >
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                        Key Formulation Considerations
                    </p>

                    <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-9">
                        {considerations.map((item) => (
                            <ConsiderationItem key={item.title} {...item} />
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[586px_minmax(0,1fr)] lg:items-stretch">
                    <div
                        className={`w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingCompactClassName} lg:h-[292px] lg:w-[586px] lg:shrink-0`}
                        style={detailModuleCardStyle}
                    >
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                            Suitable Product Formats
                        </p>

                        <div className="mt-4">
                            {suitableFormats.map((format) => (
                                <FormatRow key={format.name} {...format} />
                            ))}
                        </div>
                    </div>

                    <div
                        className={`w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingCompactClassName} lg:h-[292px] lg:min-w-0`}
                        style={detailModuleCardStyle}
                    >
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                            Readiness Insights
                        </p>

                        <div className="mt-5 grid h-[calc(100%-36px)] grid-cols-[176px_minmax(0,1fr)] items-center gap-7">
                            <div className="flex shrink-0 justify-center">
                                <div
                                    className="relative flex h-[144px] w-[144px] items-center justify-center rounded-full border border-[#C5A059]/25 p-2"
                                    style={{
                                        boxShadow: "0 0 28px rgba(197,160,89,0.08)",
                                        background:
                                            "radial-gradient(circle, rgba(197,160,89,0.06) 0%, rgba(10,12,16,0.95) 62%)",
                                    }}
                                >
                                    <div className="relative h-[108px] w-[108px] overflow-hidden rounded-full bg-black/60">
                                        <Image
                                            src={readinessInsight.centerImage}
                                            alt=""
                                            fill
                                            className="object-contain p-3"
                                            sizes="108px"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col justify-center">
                                <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                                    {readinessInsight.overallLabel}
                                </p>
                                <p className={`mt-2 ${detailModuleAccentHeadingClassName} text-white/92`}>
                                    {readinessInsight.headline}
                                </p>
                                <p className={`mt-2 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                                    {readinessInsight.description}
                                </p>

                                <div className="mt-7 grid grid-cols-3 gap-x-5 border-t border-white/[0.06] pt-5">
                                    {readinessInsight.indicators.map((indicator) => (
                                        <ReadinessIndicatorRow key={indicator.label} {...indicator} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
