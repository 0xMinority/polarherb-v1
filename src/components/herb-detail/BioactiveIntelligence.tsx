import Image from "next/image";
import Link from "next/link";
import type { HerbBioactiveIntelligenceData } from "../../types/herb-detail";
import {
    DETAIL_MODULE_SHELL_COLOR,
    detailModuleSectionClassName,
    detailModuleShellWideContentClassName,
} from "./detail-module-layout";

interface BioactiveIntelligenceProps {
    bioactiveIntelligence: HerbBioactiveIntelligenceData;
}

const MODULE_CARD = "#0E1116";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#94A3B8";
const DETAIL_ACCENT_GOLD = "#C5A059";

const TAXONOMY_CHIP_CLASS =
    "flex h-8 w-full max-w-[164px] shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 text-[11px] leading-none text-white/88 md:text-[12px]";

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

export function BioactiveIntelligence({ bioactiveIntelligence }: BioactiveIntelligenceProps) {
    const {
        subtitle,
        applicationContext,
        keyBioactives,
        intro,
        mechanismStages,
        bioactiveInsight,
        aiPredictedUsing,
        developerDashboardCta,
    } = bioactiveIntelligence;

    return (
        <section className={`${detailModuleSectionClassName} mt-8`}>
            <div
                className={`${detailModuleShellWideContentClassName} flex flex-col gap-0`}
                style={{ backgroundColor: DETAIL_MODULE_SHELL_COLOR }}
            >
                <header className="shrink-0">
                    <h2 className="text-[15px] font-medium text-white/92 md:text-[16px]">Bioactive Intelligence</h2>
                    <p
                        className="mt-2 max-w-[62ch] text-[13px] leading-relaxed md:text-[14px]"
                        style={{ color: `${DETAIL_ACCENT_GOLD}CC` }}
                    >
                        {subtitle}
                    </p>
                </header>

                <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                    <div className="min-w-0 flex-1">
                        <p
                            className="text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                            style={{ color: `${DETAIL_TEXT_MUTED}CC` }}
                        >
                            Application Context
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:max-w-[352px] sm:gap-3">
                            {applicationContext.map((label) => (
                                <span key={label} className={TAXONOMY_CHIP_CLASS}>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0 flex-1 lg:max-w-[704px]">
                        <p
                            className="text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                            style={{ color: `${DETAIL_TEXT_MUTED}CC` }}
                        >
                            Key Bioactives
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                            {keyBioactives.map((label) => (
                                <span key={label} className={TAXONOMY_CHIP_CLASS}>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 h-px w-full bg-white/[0.06]" aria-hidden />

                <p
                    className="mt-4 text-[12px] leading-relaxed md:text-[13px]"
                    style={{ color: `${DETAIL_TEXT_PRIMARY}B8` }}
                >
                    {intro}
                </p>

                <div className="mt-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
                    {mechanismStages.map(({ stage, title, body, icon, image }) => (
                        <article
                            key={stage}
                            className="flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-white/[0.06] p-4 lg:h-[330px] lg:p-4"
                            style={{ backgroundColor: MODULE_CARD }}
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="relative h-7 w-7 shrink-0">
                                    <Image src={icon} alt="" fill className="object-contain" sizes="28px" />
                                </div>
                                <p
                                    className="text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                                    style={{ color: DETAIL_ACCENT_GOLD }}
                                >
                                    {stage}
                                </p>
                            </div>

                            <h3 className="mt-2 text-[14px] font-medium leading-snug text-white/92 md:text-[15px]">
                                {title}
                            </h3>

                            <div className="relative mt-3 h-[120px] w-full shrink-0 overflow-hidden rounded-[10px] bg-black/40 lg:h-[132px]">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 1024px) 401px, 50vw"
                                />
                            </div>

                            <p
                                className="mt-3 min-h-0 flex-1 text-[11px] leading-relaxed md:text-[12px] lg:leading-[1.5]"
                                style={{ color: `${DETAIL_TEXT_PRIMARY}B8` }}
                            >
                                {body}
                            </p>
                        </article>
                    ))}
                </div>

                <div
                    className="mt-5 flex w-full flex-col gap-4 overflow-hidden rounded-[14px] border border-white/[0.06] px-4 py-4 md:flex-row md:items-center md:justify-between md:gap-6 lg:h-[96px] lg:px-5 lg:py-0"
                    style={{ backgroundColor: MODULE_CARD }}
                >
                    <div className="flex min-w-0 flex-1 items-start gap-3 md:items-center">
                        <div className="relative h-9 w-9 shrink-0">
                            <Image
                                src={bioactiveInsight.icon}
                                alt=""
                                fill
                                className="object-contain"
                                sizes="36px"
                            />
                        </div>
                        <div className="min-w-0">
                            <p
                                className="text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                                style={{ color: DETAIL_ACCENT_GOLD }}
                            >
                                Bioactive Insight
                            </p>
                            <p
                                className="mt-1 text-[11px] leading-snug md:text-[12px] lg:leading-[1.45]"
                                style={{ color: `${DETAIL_TEXT_PRIMARY}B8` }}
                            >
                                {bioactiveInsight.body}
                            </p>
                        </div>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                        {bioactiveInsight.traits.map(({ label, icon }) => (
                            <div key={label} className="flex min-w-[96px] flex-col items-center gap-1.5 text-center">
                                <div className="relative h-8 w-8">
                                    <Image src={icon} alt="" fill className="object-contain" sizes="32px" />
                                </div>
                                <p className="text-[10px] leading-tight text-white/80 md:text-[11px]">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="mt-5 flex w-full flex-col gap-4 overflow-hidden rounded-[14px] border border-white/[0.06] px-4 py-4 lg:h-[72px] lg:flex-row lg:items-center lg:gap-5 lg:px-5 lg:py-0"
                    style={{ backgroundColor: MODULE_CARD }}
                >
                    <p
                        className="shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                        style={{ color: `${DETAIL_TEXT_MUTED}CC` }}
                    >
                        AI-Predicted Using:
                    </p>

                    <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                        {aiPredictedUsing.map(({ name, description, icon }) => (
                            <div key={name} className="flex min-w-0 items-start gap-2">
                                <div className="relative mt-0.5 h-5 w-5 shrink-0">
                                    <Image src={icon} alt="" fill className="object-contain" sizes="20px" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-medium leading-tight text-white/90 md:text-[12px]">
                                        {name}
                                    </p>
                                    <p
                                        className="mt-0.5 text-[10px] leading-snug md:text-[11px]"
                                        style={{ color: `${DETAIL_TEXT_MUTED}CC` }}
                                    >
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    href={developerDashboardCta.href}
                    className="group mt-5 flex w-full min-w-0 items-center gap-4 overflow-hidden rounded-[12px] px-5 py-3 transition-opacity hover:opacity-95 lg:h-[60px] lg:px-6 lg:py-0"
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
