import Image from "next/image";
import type { HerbDomain } from "../../types/herb";
import type { Herb } from "../../types/herb";
import type { HerbDetailData } from "../../types/herb-detail";
import { getDomainColor } from "../../lib/domain-colors";

interface HeroPanelProps {
    herb: Herb;
    detail: HerbDetailData;
}

const HERO_SHELL = "#0A0C10";
const HERO_CARD = "#0E1116";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#94A3B8";
const DETAIL_ACCENT_GOLD = "#C5A059";
const DETAIL_ACCENT_GREEN = "#7FD4A8";
const DETAIL_BADGE_GREEN = "#7FAE8D";

type DotFill = 0 | 0.5 | 1;

function getDotFills(score: number): DotFill[] {
    return Array.from({ length: 5 }, (_, index) => {
        const remaining = score - index;
        if (remaining >= 1) return 1;
        if (remaining >= 0.5) return 0.5;
        return 0;
    });
}

function DomainDot({ fill, color }: { fill: DotFill; color: string }) {
    if (fill === 0) {
        return <span className="h-[10px] w-[10px] rounded-full bg-white/[0.1]" />;
    }

    if (fill === 1) {
        return <span className="h-[10px] w-[10px] rounded-full" style={{ backgroundColor: color }} />;
    }

    return (
        <span className="relative h-[10px] w-[10px] overflow-hidden rounded-full bg-white/[0.1]">
            <span className="absolute inset-y-0 left-0 w-1/2 rounded-l-full" style={{ backgroundColor: color }} />
        </span>
    );
}

function DomainDotBar({ score, color }: { score: number; color: string }) {
    return (
        <div className="flex items-center gap-[6px]" aria-hidden>
            {getDotFills(score).map((fill, index) => (
                <DomainDot key={index} fill={fill} color={color} />
            ))}
        </div>
    );
}

function DomainIcon({ domain }: { domain: HerbDomain }) {
    const color = getDomainColor(domain);

    switch (domain) {
        case "Energy":
            return (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden>
                    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
                </svg>
            );
        case "Respiratory":
            return (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden>
                    <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4v1.5c1.4.7 2.3 2.1 2.3 3.8 0 2.3-1.9 4.2-4.2 4.2h-3.8C8.9 19.5 7 17.6 7 15.3c0-1.7.9-3.1 2.3-3.8V10z" />
                    <path d="M12 6v12" />
                </svg>
            );
        case "Immunity":
            return (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden>
                    <path d="M12 3c-2.5 2.8-6 3.8-6 8.2 0 4.2 3.4 6.8 6 9.8 2.6-3 6-5.6 6-9.8 0-4.4-3.5-5.4-6-8.2z" />
                </svg>
            );
        case "Longevity":
            return (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden>
                    <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" />
                    <path d="M6 12c0 3.3 2.7 6 6 6" />
                </svg>
            );
        case "Cognitive":
            return (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" aria-hidden>
                    <path d="M8 10a4 4 0 118 0c0 2.2-1.8 4-4 4" />
                    <path d="M9 18h6" />
                    <path d="M10 14h4" />
                </svg>
            );
        default:
            return null;
    }
}

function AltitudeIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
            <path d="M4 18l6-10 4 6 3-4 3 8H4z" />
        </svg>
    );
}

function RegionIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
            <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
            <circle cx="12" cy="11" r="2.2" />
        </svg>
    );
}

function DevelopmentGauge({ score }: { score: number }) {
    const size = 168;
    const stroke = 4;
    const center = size / 2;
    const normalizedRadius = center - stroke;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = Math.min(100, Math.max(0, score));
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative h-[168px] w-[168px] shrink-0">
            <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`} aria-hidden>
                <circle
                    cx={center}
                    cy={center}
                    r={normalizedRadius}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={stroke}
                />
                <circle
                    cx={center}
                    cy={center}
                    r={normalizedRadius}
                    fill="none"
                    stroke={DETAIL_ACCENT_GOLD}
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[44px] font-medium leading-none tracking-[-0.04em]" style={{ color: DETAIL_ACCENT_GREEN }}>
                    {score}
                </p>
                <p className="mt-1 text-[13px] leading-none" style={{ color: `${DETAIL_TEXT_MUTED}99` }}>
                    / 100
                </p>
            </div>
        </div>
    );
}

export function HeroPanel({ herb, detail }: HeroPanelProps) {
    const hero = detail.hero;

    return (
        <section className="relative z-10 w-full px-5 py-8 md:px-8 lg:ml-16 lg:mr-16 lg:-mt-1 lg:w-auto lg:max-w-none lg:px-0 lg:py-0">
            <div
                className="grid grid-cols-1 gap-6 overflow-hidden rounded-[20px] border border-white/[0.055] p-5 md:gap-8 md:p-6 lg:box-border lg:h-[440px] lg:grid-cols-[25fr_40fr_25fr] lg:gap-[5%] lg:p-7"
                style={{ backgroundColor: HERO_SHELL }}
            >
                <div className="flex min-w-0 flex-col gap-6 lg:h-[386px] lg:w-full lg:gap-[28px]">
                    <div className="min-w-0 lg:h-[180px]">
                        <div className="flex flex-wrap items-center gap-3">
                            <p className="text-[13px] font-medium tracking-[0.01em] text-white/92">PolarHerb® ATLAS</p>
                            <span
                                className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-[0.04em]"
                                style={{
                                    borderColor: `${DETAIL_BADGE_GREEN}55`,
                                    backgroundColor: `${DETAIL_BADGE_GREEN}14`,
                                    color: DETAIL_BADGE_GREEN,
                                }}
                            >
                                {hero.atlasId}
                            </span>
                        </div>

                        <h1
                            className="mt-4 max-w-[14ch] font-[ui-serif,Georgia,Cambria,'Times_New_Roman',Times,serif] text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] lg:text-[30px]"
                            style={{ color: DETAIL_ACCENT_GOLD }}
                        >
                            {hero.commonName || herb.name}
                        </h1>

                        <p className="mt-2 text-[14px] italic leading-snug" style={{ color: `${DETAIL_ACCENT_GOLD}A8` }}>
                            ({hero.latinName})
                        </p>

                        <div className="mt-6 flex items-start gap-4">
                            <div className="flex min-w-0 flex-1 items-start gap-2">
                                <span className="mt-0.5 shrink-0 text-white/35">
                                    <AltitudeIcon />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[12px] leading-none" style={{ color: `${DETAIL_TEXT_MUTED}CC` }}>
                                        Altitude Range:
                                    </p>
                                    <p className="mt-2 text-[14px] leading-snug text-white/92">{hero.altitude}</p>
                                </div>
                            </div>

                            <div className="h-10 w-px shrink-0 bg-white/[0.1]" aria-hidden />

                            <div className="flex min-w-0 flex-1 items-start gap-2">
                                <span className="mt-0.5 shrink-0 text-white/35">
                                    <RegionIcon />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[12px] leading-none" style={{ color: `${DETAIL_TEXT_MUTED}CC` }}>
                                        Region:
                                    </p>
                                    <p className="mt-2 text-[14px] leading-snug text-white/92">
                                        {hero.region}
                                        {hero.regionDetail ? (
                                            <span className="ml-1 text-[13px]" style={{ color: `${DETAIL_TEXT_MUTED}B3` }}>
                                                {hero.regionDetail}
                                            </span>
                                        ) : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex min-h-0 min-w-0 flex-col rounded-[14px] border border-white/[0.06] px-5 py-4 lg:h-[178px] lg:overflow-hidden"
                        style={{ backgroundColor: HERO_CARD }}
                    >
                        <p className="shrink-0 text-[14px] font-medium text-white/92">Functional Domains</p>

                        <ul className="mt-4 flex min-h-0 flex-1 flex-col justify-between">
                            {hero.functionalDomains.map(({ domain, score }) => {
                                const color = getDomainColor(domain);

                                return (
                                    <li key={domain} className="flex items-center gap-3">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                                            <DomainIcon domain={domain} />
                                        </span>

                                        <span className="w-[82px] shrink-0 text-[13px] font-medium leading-none" style={{ color }}>
                                            {domain}
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <DomainDotBar score={score} color={color} />
                                        </div>

                                        <span
                                            className="w-8 shrink-0 text-right text-[13px] tabular-nums leading-none"
                                            style={{ color: `${DETAIL_TEXT_PRIMARY}CC` }}
                                        >
                                            {score.toFixed(1)}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[520px] md:max-w-none lg:mx-0 lg:h-[386px] lg:w-full lg:min-w-0">
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: "radial-gradient(circle at 50% 46%, rgba(208,168,92,0.08), transparent 58%)",
                        }}
                    />

                    <div
                        className="relative h-[280px] w-full sm:h-[320px] lg:h-[386px] lg:w-full"
                        style={{
                            filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.42))",
                        }}
                    >
                        <Image
                            src={hero.heroImage}
                            alt={hero.commonName || herb.name}
                            fill
                            className="object-contain object-center"
                            priority
                            sizes="(max-width: 1280px) 92vw, 520px"
                        />
                    </div>
                </div>

                <div className="min-w-0 lg:h-[386px] lg:w-full">
                    <div
                        className="flex h-full min-h-[320px] flex-col rounded-[14px] border border-white/[0.06] px-5 py-5 lg:min-h-0"
                        style={{ backgroundColor: HERO_CARD }}
                    >
                        <p className="shrink-0 text-[14px] font-medium text-white/92">Development Score</p>

                        <div className="flex flex-1 flex-col items-center justify-center py-4">
                            <DevelopmentGauge score={hero.developmentScore} />
                        </div>

                        <p
                            className="shrink-0 text-center text-[13px] leading-[1.65] lg:text-[14px] lg:leading-[1.7]"
                            style={{ color: `${DETAIL_TEXT_MUTED}E6` }}
                        >
                            {hero.developmentBlurb}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
