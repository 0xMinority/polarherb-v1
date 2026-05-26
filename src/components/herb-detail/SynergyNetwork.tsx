"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { HerbSynergyNetworkData, SynergyPairingNode } from "../../types/herb-detail";
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
    detailModuleCardTitleClassName,
    detailModuleChipActiveClassName,
    detailModuleChipClassName,
    detailModuleChipInactiveClassName,
    detailModuleGapClassName,
    detailModuleLabelClassName,
    detailModuleSectionClassName,
    detailModuleShellStyle,
    detailModuleShellWideContentClassName,
    detailModuleSpecimenCircleClassName,
    detailModuleSubtitleClassName,
    detailModuleTagActiveClassName,
    detailModuleTagInactiveClassName,
    detailModuleTitleClassName,
} from "./detail-module-layout";

interface SynergyNetworkProps {
    synergyNetwork: HerbSynergyNetworkData;
}

const ORBIT_RADIUS = 34;

function polarPosition(angleDeg: number, radiusPercent: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        left: `${50 + radiusPercent * Math.sin(rad)}%`,
        top: `${50 - radiusPercent * Math.cos(rad)}%`,
        x: 50 + radiusPercent * Math.sin(rad),
        y: 52 - radiusPercent * Math.cos(rad),
    };
}

function LightningIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                stroke={DETAIL_ACCENT_GOLD}
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronLeftIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

function ApplicationContextButton({
    label,
    icon,
    isActive,
    onSelect,
}: {
    label: string;
    icon: string;
    isActive: boolean;
    onSelect: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={`${detailModuleChipClassName} max-w-none gap-2 transition-colors ${
                isActive ? detailModuleChipActiveClassName : detailModuleChipInactiveClassName
            }`}
        >
            <div className="relative h-3.5 w-3.5 shrink-0">
                <Image src={icon} alt="" fill className="object-contain" sizes="14px" />
            </div>
            <span
                className="truncate text-[11px] leading-none md:text-[12px]"
                style={{ color: isActive ? DETAIL_ACCENT_GOLD : DETAIL_TEXT_PRIMARY_BODY }}
            >
                {label}
            </span>
        </button>
    );
}

function ConstellationPanel({
    centerHerb,
    pairingNodes,
    selectedPairingId,
    onSelectPairing,
}: {
    centerHerb: { name: string; image: string };
    pairingNodes: SynergyPairingNode[];
    selectedPairingId: string;
    onSelectPairing: (id: string) => void;
}) {
    return (
        <div
            className={`relative w-full ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:h-[626px] lg:w-[728px] lg:shrink-0`}
            style={detailModuleCardStyle}
        >
            <p className={detailModuleBodyClassName} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                Select a pairing herb to explore synergy.
            </p>

            <div className="relative mx-auto mt-4 h-[min(440px,58vw)] w-full max-w-[600px] sm:mt-6 lg:absolute lg:inset-x-6 lg:bottom-8 lg:top-16 lg:mt-0 lg:h-auto lg:max-w-none">
                {[150, 250, 350].map((size) => (
                    <div
                        key={size}
                        className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C5A059]/[0.075]"
                        style={{ width: size, height: size }}
                        aria-hidden
                    />
                ))}

                <div
                    className="pointer-events-none absolute left-1/2 top-[52%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(197,160,89,0.10) 0%, rgba(127,174,141,0.045) 35%, transparent 68%)",
                    }}
                    aria-hidden
                />

                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                >
                    {pairingNodes.map((node) => {
                        const pos = polarPosition(node.angle, ORBIT_RADIUS);
                        const isActive = node.id === selectedPairingId;
                        return (
                            <line
                                key={node.id}
                                x1={50}
                                y1={52}
                                x2={pos.x}
                                y2={pos.y}
                                stroke={isActive ? DETAIL_ACCENT_GOLD : "rgba(197,160,89,0.18)"}
                                strokeWidth={isActive ? 0.28 : 0.16}
                                strokeOpacity={isActive ? 0.62 : 0.28}
                            />
                        );
                    })}
                </svg>

                <div
                    className="absolute left-1/2 top-[52%] z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        filter: "drop-shadow(0 0 24px rgba(197,160,89,0.12))",
                    }}
                >
                    <div className={`relative h-[72px] w-[72px] ${detailModuleSpecimenCircleClassName}`}>
                        <Image
                            src={centerHerb.image}
                            alt={centerHerb.name}
                            fill
                            className="object-cover object-center"
                            sizes="72px"
                        />
                    </div>
                    <p
                        className={`mt-2 max-w-[120px] text-center ${detailModuleLabelClassName}`}
                        style={{ color: DETAIL_ACCENT_GOLD }}
                    >
                        {centerHerb.name}
                    </p>
                </div>

                {pairingNodes.map((node) => {
                    const pos = polarPosition(node.angle, ORBIT_RADIUS);
                    const isActive = node.id === selectedPairingId;

                    return (
                        <button
                            key={node.id}
                            type="button"
                            onClick={() => onSelectPairing(node.id)}
                            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                left: pos.left,
                                top: pos.top,
                                filter: isActive
                                    ? "drop-shadow(0 0 18px rgba(197,160,89,0.35))"
                                    : "drop-shadow(0 0 8px rgba(127,174,141,0.08))",
                            }}
                        >
                            <div
                                className={`relative h-[52px] w-[52px] ${detailModuleSpecimenCircleClassName} ${
                                    isActive ? "border-[#C5A059]/60" : "border-white/[0.12]"
                                }`}
                            >
                                <Image
                                    src={node.image}
                                    alt={node.name}
                                    fill
                                    className="object-cover object-center"
                                    sizes="52px"
                                />
                            </div>
                            <p
                                className={`mt-1.5 max-w-[88px] text-center ${detailModuleLabelClassName}`}
                                style={{ color: isActive ? DETAIL_ACCENT_GOLD : DETAIL_TEXT_PRIMARY_SECONDARY }}
                            >
                                {node.name}
                            </p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function ActiveStackPanel({
    stackIndex,
    totalStacks,
    centerHerb,
    stack,
    pairingNode,
    onPrev,
    onNext,
}: {
    stackIndex: number;
    totalStacks: number;
    centerHerb: { name: string; image: string };
    stack: HerbSynergyNetworkData["stacks"][number];
    pairingNode: SynergyPairingNode;
    onPrev: () => void;
    onNext: () => void;
}) {
    const pageLabel = `${String(stackIndex + 1).padStart(2, "0")} / ${String(totalStacks).padStart(2, "0")}`;

    return (
        <div
            className={`flex w-full min-w-0 flex-col ${detailModuleCardSurfaceClassName} ${detailModuleCardPaddingClassName} lg:h-[626px] lg:w-[488px] lg:shrink-0`}
            style={detailModuleCardStyle}
        >
            <div className="flex items-center justify-between gap-3">
                <h3 className={detailModuleCardTitleClassName}>Active Stack</h3>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-white/[0.14] hover:text-white/80"
                        aria-label="Previous stack"
                    >
                        <ChevronLeftIcon />
                    </button>
                    <span className={`min-w-[52px] text-center ${detailModuleBodySnugClassName} tabular-nums text-white/72`}>
                        {pageLabel}
                    </span>
                    <button
                        type="button"
                        onClick={onNext}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] text-white/50 transition-colors hover:border-white/[0.14] hover:text-white/80"
                        aria-label="Next stack"
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {stack.tags.map((tag) => (
                    <span
                        key={tag}
                        className={tag === stack.activeTag ? detailModuleTagActiveClassName : detailModuleTagInactiveClassName}
                        style={tag === stack.activeTag ? { color: DETAIL_ACCENT_GOLD } : undefined}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h4 className={`mt-5 ${detailModuleAccentHeadingClassName}`} style={{ color: DETAIL_ACCENT_GOLD }}>
                {stack.title}
            </h4>

            <div className="mt-5 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-1.5">
                    <div className={`relative h-[56px] w-[56px] ${detailModuleSpecimenCircleClassName}`}>
                        <Image src={centerHerb.image} alt={centerHerb.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <p className={`max-w-[100px] text-center ${detailModuleBodyClassName} text-white/70`}>{centerHerb.name}</p>
                </div>
                <span className="text-[14px] text-white/35">+</span>
                <div className="flex flex-col items-center gap-1.5">
                    <div className={`relative h-[56px] w-[56px] ${detailModuleSpecimenCircleClassName}`}>
                        <Image src={pairingNode.image} alt={pairingNode.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <p className={`max-w-[100px] text-center ${detailModuleBodyClassName} text-white/70`}>{pairingNode.name}</p>
                </div>
            </div>

            <div className="mt-6 min-h-0 flex-1">
                <p className={detailModuleLabelClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                    Key Synergetic Effects
                </p>
                <ul className="mt-3 space-y-3">
                    {stack.effects.map((effect) => (
                        <li key={effect.title} className="flex gap-2.5">
                            <span className="mt-0.5 shrink-0">
                                <LightningIcon />
                            </span>
                            <div className="min-w-0">
                                <p className={detailModuleBodySnugClassName} style={{ color: DETAIL_ACCENT_GOLD }}>
                                    {effect.title}
                                </p>
                                <p className={`mt-1 ${detailModuleBodyClassName}`} style={{ color: DETAIL_TEXT_PRIMARY_BODY }}>
                                    {effect.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 flex flex-col gap-4 border-t border-white/[0.06] pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <div>
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                        Evidence Level
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span
                                    key={index}
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            index < stack.evidenceFilled
                                                ? DETAIL_ACCENT_GOLD
                                                : "rgba(255,255,255,0.12)",
                                    }}
                                    aria-hidden
                                />
                            ))}
                        </div>
                        <span className={detailModuleBodySnugClassName}>{stack.evidenceLabel}</span>
                    </div>
                </div>

                <div className="min-w-0 sm:text-right">
                    <p className={detailModuleLabelClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                        Suggested Applications
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 sm:justify-end">
                        {stack.suggestedApplications.map((app) => (
                            <span
                                key={app}
                                className={detailModuleTagActiveClassName}
                                style={{ color: `${DETAIL_ACCENT_GOLD}CC` }}
                            >
                                {app}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SynergyNetwork({ synergyNetwork }: SynergyNetworkProps) {
    const {
        subtitle,
        applicationContexts,
        defaultApplicationContextId,
        centerHerb,
        pairingNodes,
        stacks,
        defaultPairingId,
    } = synergyNetwork;

    const [contextId, setContextId] = useState(defaultApplicationContextId);
    const [pairingId, setPairingId] = useState(defaultPairingId);

    const stackIndex = useMemo(() => {
        const index = stacks.findIndex((s) => s.pairingHerbId === pairingId);
        return index >= 0 ? index : 0;
    }, [stacks, pairingId]);

    const activeStack = stacks[stackIndex] ?? stacks[0];
    const activePairing = pairingNodes.find((n) => n.id === pairingId) ?? pairingNodes[0];

    if (!activeStack || !activePairing) {
        return null;
    }

    const goToStack = (index: number) => {
        const normalized = ((index % stacks.length) + stacks.length) % stacks.length;
        const next = stacks[normalized];
        if (next) {
            setPairingId(next.pairingHerbId);
        }
    };

    return (
        <section className={`${detailModuleSectionClassName} ${detailModuleGapClassName}`}>
            <div className={`${detailModuleShellWideContentClassName} flex flex-col lg:h-[800px]`} style={detailModuleShellStyle}>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                    <header className="min-w-0 shrink-0">
                        <h2 className={detailModuleTitleClassName}>Synergy Network</h2>
                        <p className={detailModuleSubtitleClassName} style={{ color: DETAIL_ACCENT_GOLD_SUBTITLE }}>
                            {subtitle}
                        </p>
                    </header>

                    <div className="min-w-0 lg:max-w-[704px]">
                        <p className={detailModuleLabelClassName} style={{ color: DETAIL_TEXT_MUTED_LABEL }}>
                            Application Context
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                            {applicationContexts.map((ctx) => (
                                <ApplicationContextButton
                                    key={ctx.id}
                                    label={ctx.label}
                                    icon={ctx.icon}
                                    isActive={ctx.id === contextId}
                                    onSelect={() => setContextId(ctx.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-8">
                    <ConstellationPanel
                        centerHerb={centerHerb}
                        pairingNodes={pairingNodes}
                        selectedPairingId={pairingId}
                        onSelectPairing={setPairingId}
                    />

                    <ActiveStackPanel
                        stackIndex={stackIndex}
                        totalStacks={stacks.length}
                        centerHerb={centerHerb}
                        stack={activeStack}
                        pairingNode={activePairing}
                        onPrev={() => goToStack(stackIndex - 1)}
                        onNext={() => goToStack(stackIndex + 1)}
                    />
                </div>
            </div>
        </section>
    );
}
