"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type {
    ComparativeChallenger,
    HerbComparativeMatchupData,
    MatchupMetricScores,
} from "../../types/herb-detail";
import {
    DETAIL_ACCENT_GOLD,
    DETAIL_ACCENT_GOLD_SUBTITLE,
    DETAIL_TEXT_MUTED_LABEL,
    DETAIL_TEXT_PRIMARY_BODY,
    DETAIL_TEXT_PRIMARY_SECONDARY,
    detailModuleAccentHeadingClassName,
    detailModuleBodyClassName,
    detailModuleBodySnugClassName,
    detailModuleCardPaddingClassName,
    detailModuleCardStyle,
    detailModuleCardSurfaceClassName,
    detailModuleChipActiveClassName,
    detailModuleChipInactiveClassName,
    detailModuleGapClassName,
    detailModuleInsightStripClassName,
    detailModuleLabelClassName,
    detailModuleSelectorButtonClassName,
    detailModuleSectionClassName,
    detailModuleShellStyle,
    detailModuleShellWideContentClassName,
    detailModuleSpecimenFrameClassName,
    detailModuleSubtitleClassName,
    detailModuleTitleClassName,
} from "./detail-module-layout";

interface ComparativeMatchupProps {
    comparativeMatchup: HerbComparativeMatchupData;
}

const MATCHUP_METRICS: { key: keyof MatchupMetricScores; label: string }[] = [
    { key: "bioactivePower", label: "Bioactive Power" },
    { key: "commercialReadiness", label: "Commercial Readiness" },
    { key: "evidenceStrength", label: "Evidence Strength" },
    { key: "originRarity", label: "Origin Rarity" },
    { key: "applicationFit", label: "Application Fit" },
];

function StatBulletIcon() {
    return (
        <span
            className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border"
            style={{ borderColor: `${DETAIL_ACCENT_GOLD}55`, backgroundColor: `${DETAIL_ACCENT_GOLD}18` }}
            aria-hidden
        >
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: DETAIL_ACCENT_GOLD }} />
        </span>
    );
}

function ComparisonBar({
    primaryValue,
    challengerValue,
    label,
}: {
    primaryValue: number;
    challengerValue: number;
    label: string;
}) {
    const primaryLeads = primaryValue >= challengerValue;

    return (
        <div className="grid w-full grid-cols-[minmax(0,1fr)_128px_minmax(0,1fr)] items-center gap-4">
            <div className="flex items-center justify-end gap-2">
                <span
                    className="w-[24px] shrink-0 text-right text-[13px] tabular-nums md:text-[14px]"
                    style={{ color: primaryLeads ? DETAIL_ACCENT_GOLD : DETAIL_TEXT_PRIMARY_SECONDARY }}
                >
                    {primaryValue}
                </span>
                <div className="h-[8px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: `${primaryValue}%`,
                            backgroundColor: DETAIL_ACCENT_GOLD,
                        }}
                    />
                </div>
            </div>

            <span
                className="shrink-0 text-center text-[11px] leading-tight md:text-[12px]"
                style={{ color: `${DETAIL_TEXT_MUTED_LABEL}` }}
            >
                {label}
            </span>

            <div className="flex items-center justify-start gap-2">
                <div className="h-[8px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                        className="ml-auto h-full rounded-full"
                        style={{
                            width: `${challengerValue}%`,
                            backgroundColor: DETAIL_ACCENT_GOLD,
                        }}
                    />
                </div>
                <span
                    className="w-[24px] shrink-0 text-left text-[13px] tabular-nums md:text-[14px]"
                    style={{ color: !primaryLeads ? DETAIL_ACCENT_GOLD : DETAIL_TEXT_PRIMARY_SECONDARY }}
                >
                    {challengerValue}
                </span>
            </div>
        </div>
    );
}

function HerbSidePanel({
    name,
    image,
    altitude,
    coreTrait,
    align,
}: {
    name: string;
    image: string;
    altitude: string;
    coreTrait: string;
    align: "left" | "right";
}) {
    const textAlign = align === "left" ? "text-left" : "text-right";
    const itemsAlign = align === "left" ? "items-start" : "items-end";

    return (
        <div className={`flex min-w-0 flex-col ${itemsAlign}`}>
            <div className={`relative h-[112px] w-[112px] shrink-0 ${detailModuleSpecimenFrameClassName}`}>
                <Image src={image} alt={name} fill className="object-contain object-center p-2" sizes="112px" />
            </div>

            <p
                className={`mt-4 ${detailModuleAccentHeadingClassName} ${textAlign}`}
                style={{ color: DETAIL_ACCENT_GOLD }}
            >
                {name}
            </p>

            <div className={`mt-3 flex w-full max-w-[190px] flex-col gap-2 ${itemsAlign}`}>
                <div className={`flex gap-2 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
                    <StatBulletIcon />
                    <div className="min-w-0">
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                            Altitude Range:
                        </p>
                        <p className={`mt-1 ${detailModuleBodySnugClassName} text-white/88`}>{altitude}</p>
                    </div>
                </div>
                <div className={`flex gap-2 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
                    <StatBulletIcon />
                    <div className="min-w-0">
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                            Core Trait:
                        </p>
                        <p className={`mt-1 ${detailModuleBodySnugClassName} text-white/88`}>{coreTrait}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChallengerButton({
    challenger,
    isActive,
    onSelect,
}: {
    challenger: ComparativeChallenger;
    isActive: boolean;
    onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`${detailModuleSelectorButtonClassName} ${
                isActive ? detailModuleChipActiveClassName : detailModuleChipInactiveClassName
            }`}
        >
            <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-white/[0.08]">
                <Image
                    src={challenger.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="28px"
                />
            </div>
            <span
                className={`truncate ${detailModuleBodySnugClassName}`}
                style={{ color: isActive ? DETAIL_ACCENT_GOLD : DETAIL_TEXT_PRIMARY_BODY }}
            >
                {challenger.name}
            </span>
        </button>
    );
}

export function ComparativeMatchup({ comparativeMatchup }: ComparativeMatchupProps) {
    const { subtitle, primary, challengers, defaultChallengerId, insightIcon } = comparativeMatchup;

    const [selectedId, setSelectedId] = useState(defaultChallengerId);

    const selectedChallenger = useMemo(
        () => challengers.find((c) => c.id === selectedId) ?? challengers[0],
        [challengers, selectedId]
    );

    if (!selectedChallenger) {
        return null;
    }

    return (
        <section className={`${detailModuleSectionClassName} ${detailModuleGapClassName}`}>
            <div className={`${detailModuleShellWideContentClassName} flex flex-col lg:min-h-[560px]`} style={detailModuleShellStyle}>
                <header className="shrink-0">
                    <h2 className={detailModuleTitleClassName}>Comparative Matchup</h2>
                    <p className={detailModuleSubtitleClassName} style={{ color: DETAIL_ACCENT_GOLD_SUBTITLE }}>
                        {subtitle}
                    </p>
                </header>

                <div
                    className={`mt-6 w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:h-[314px]`}
                    style={detailModuleCardStyle}
                >
                    <div className="flex flex-col gap-6 lg:hidden">
                        <HerbSidePanel
                            name={primary.name}
                            image={primary.image}
                            altitude={primary.altitude}
                            coreTrait={primary.coreTrait}
                            align="left"
                        />
                        <div className="space-y-3">
                            <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/40">vs</p>
                            {MATCHUP_METRICS.map(({ key, label }) => (
                                <ComparisonBar
                                    key={key}
                                    label={label}
                                    primaryValue={primary.scores[key]}
                                    challengerValue={selectedChallenger.scores[key]}
                                />
                            ))}
                        </div>
                        <HerbSidePanel
                            name={selectedChallenger.name}
                            image={selectedChallenger.image}
                            altitude={selectedChallenger.altitude}
                            coreTrait={selectedChallenger.coreTrait}
                            align="right"
                        />
                    </div>

                    <div className="hidden min-h-0 lg:grid lg:h-full lg:grid-cols-[190px_minmax(0,1fr)_190px] lg:items-center lg:gap-8">
                        <HerbSidePanel
                            name={primary.name}
                            image={primary.image}
                            altitude={primary.altitude}
                            coreTrait={primary.coreTrait}
                            align="left"
                        />

                        <div className="flex min-w-0 flex-col justify-center gap-4">
                            <p
                                className="text-center text-[11px] uppercase tracking-[0.18em]"
                                style={{ color: `${DETAIL_ACCENT_GOLD}B8` }}
                            >
                                VS
                            </p>
                            <div className="space-y-3.5">
                                {MATCHUP_METRICS.map(({ key, label }) => (
                                    <ComparisonBar
                                        key={key}
                                        label={label}
                                        primaryValue={primary.scores[key]}
                                        challengerValue={selectedChallenger.scores[key]}
                                    />
                                ))}
                            </div>
                        </div>

                        <HerbSidePanel
                            name={selectedChallenger.name}
                            image={selectedChallenger.image}
                            altitude={selectedChallenger.altitude}
                            coreTrait={selectedChallenger.coreTrait}
                            align="right"
                        />
                    </div>
                </div>

                <div className="mt-6 flex flex-col items-center">
                    <p className={detailModuleBodySnugClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                        Select challenger herb:
                    </p>
                    <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
                        {challengers.map((challenger) => (
                            <ChallengerButton
                                key={challenger.id}
                                challenger={challenger}
                                isActive={challenger.id === selectedChallenger.id}
                                onSelect={() => setSelectedId(challenger.id)}
                            />
                        ))}
                    </div>
                </div>

                <div className={`mt-5 ${detailModuleInsightStripClassName} lg:h-[48px]`} style={detailModuleCardStyle}>
                    <div className="relative h-5 w-5 shrink-0">
                        <Image src={insightIcon} alt="" fill className="object-contain" sizes="20px" />
                    </div>
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                        Matchup Insight
                    </p>
                    <p className={`min-w-0 flex-1 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                        {selectedChallenger.insight}
                    </p>
                </div>
            </div>
        </section>
    );
}
