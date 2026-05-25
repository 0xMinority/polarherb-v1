"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { herbNodes } from "../../data/herbs";
import type { HerbNode } from "../../data/herbs";
import type { HerbDomain } from "../../types/herb";
import HerbMapNode from "./HerbMapNode";
import { calculateMapFocus } from "../../lib/map-focus";
import { isHerbLikelyVisible } from "../../lib/map-visibility";
import { getDomainColor } from "../../lib/domain-colors";

const readinessStages = [
    "Wild Discovery",
    "Functional Adaptation",
    "Translational Potential",
    "Commercial Integration",
    "Mainstream Presence",
];

const altitudeMarks = [6000, 5000, 4000, 3000, 2000, 1000, 0];

const powerScaleMarks = ["4.0x", "3.0x", "2.0x", "1.0x", "0.75x"];

export default function AtlasMapShell() {
    const [selectedHerb, setSelectedHerb] = useState<HerbNode | null>(
        herbNodes[0]
    );

    const [activeDomain, setActiveDomain] = useState<"All" | HerbDomain>("All");

    const [mapScale, setMapScale] = useState(1);

    const [mapOffset, setMapOffset] = useState({
        x: 0,
        y: 0,
    });

    const [smoothCamera, setSmoothCamera] = useState(false);

    const dragStartRef = useRef<{
        x: number;
        y: number;
    } | null>(null);

    const domainFilters: Array<"All" | HerbDomain> = [
        "All",
        "Energy",
        "Immunity",
        "Cognitive",
        "Respiratory",
        "Longevity",
    ];

    const MIN_SCALE = 0.94;
    const MAX_SCALE = 1.48;

    const clampScale = (value: number) => {
        return Math.min(Math.max(value, MIN_SCALE), MAX_SCALE);
    };

    const moveCamera = (
        scale: number,
        offset: { x: number; y: number },
        smooth: boolean
    ) => {
        setSmoothCamera(smooth);
        setMapScale(clampScale(scale));
        setMapOffset(offset);
    };

    const visibleHerbs = (
        activeDomain === "All"
            ? herbNodes
            : herbNodes.filter((herb) => herb.domain === activeDomain)
    ).filter((herb) =>
        isHerbLikelyVisible(herb, {
            scale: mapScale,
            offset: mapOffset,
        })
    );

    return (
        <div className="relative h-[min(72vh,760px)] min-h-[480px] w-full overflow-hidden bg-[#050C12] sm:min-h-[520px] lg:h-[min(68vh,820px)]">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse 90% 55% at 50% 108%, rgba(42,58,74,0.55) 0%, transparent 58%),
                        radial-gradient(ellipse 70% 40% at 18% 22%, rgba(90,120,150,0.12) 0%, transparent 50%),
                        radial-gradient(ellipse 55% 35% at 82% 28%, rgba(208,168,92,0.08) 0%, transparent 48%),
                        linear-gradient(180deg, #0A1520 0%, #071016 38%, #040A0F 100%)
                    `,
                }}
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] opacity-[0.42]"
                style={{
                    background: `
                        radial-gradient(ellipse 120% 80% at 50% 100%, rgba(28,38,48,0.9) 0%, transparent 62%),
                        linear-gradient(180deg, transparent 0%, rgba(18,26,34,0.35) 42%, rgba(12,18,24,0.75) 100%)
                    `,
                    maskImage:
                        "linear-gradient(180deg, transparent 0%, black 28%, black 100%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-x-[-10%] bottom-[-8%] h-[58%] opacity-30"
                style={{
                    background: `
                        conic-gradient(from 200deg at 30% 100%, transparent 0deg, rgba(55,72,88,0.5) 40deg, transparent 80deg),
                        conic-gradient(from 160deg at 70% 100%, transparent 0deg, rgba(48,62,76,0.45) 50deg, transparent 95deg)
                    `,
                    filter: "blur(28px)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "180px 180px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                    background:
                        "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(208,168,92,0.06) 0%, transparent 70%)",
                }}
                animate={{ opacity: [0.58, 0.66, 0.58] }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
                        radial-gradient(ellipse 85% 75% at 50% 50%, transparent 35%, rgba(2,6,10,0.55) 100%),
                        linear-gradient(90deg, rgba(4,8,12,0.5) 0%, transparent 12%, transparent 88%, rgba(4,8,12,0.45) 100%)
                    `,
                }}
            />
            <div className="pointer-events-none absolute inset-[44px_52px_56px_44px]">
                <div className="absolute inset-0 rounded-sm border border-white/[0.07]" />
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.12]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white/[0.12] via-white/[0.06] to-white/[0.14]" />
                <div className="absolute inset-0 flex justify-between px-0">
                    {readinessStages.map((stage) => (
                        <div key={stage} className="flex h-full flex-col items-center">
                            <div className="h-full w-px bg-white/[0.04]" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex flex-col justify-between">
                    {altitudeMarks.map((mark) => (
                        <div key={mark} className="relative w-full">
                            <div className="h-px w-full bg-white/[0.035]" />
                            <div className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white/[0.12]" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-[56px] left-3 top-[44px] flex w-8 flex-col justify-between text-[9px] tabular-nums leading-none text-[#D7DCE2]/48">
                {altitudeMarks.map((mark) => (
                    <span key={mark}>{mark === 0 ? "0m" : `${mark}m`}</span>
                ))}
            </div>
            <div className="pointer-events-none absolute bottom-3 left-[44px] right-[52px] flex justify-between gap-1">
                {readinessStages.map((stage) => (
                    <span
                        key={stage}
                        className="max-w-[92px] text-center text-[8px] uppercase leading-tight tracking-[0.12em] text-[#D7DCE2]/46 sm:text-[9px]"
                    >
                        {stage}
                    </span>
                ))}
            </div>
            <div className="pointer-events-none absolute right-[52px] top-[44px] flex flex-col items-end gap-[18px]">
                <div className="h-16 w-px bg-white/[0.08]" />
                {powerScaleMarks.map((mark) => (
                    <span
                        key={mark}
                        className="text-[8px] tabular-nums tracking-[0.06em] text-[#D7DCE2]/34"
                    >
                        {mark}
                    </span>
                ))}
            </div>
            {/* Pannable map layer */}
            <div
                onMouseDown={(event) => {
                    setSmoothCamera(false);
                    dragStartRef.current = {
                        x: event.clientX - mapOffset.x,
                        y: event.clientY - mapOffset.y,
                    };
                }}
                onMouseMove={(event) => {
                    if (!dragStartRef.current) return;

                    setMapOffset({
                        x: event.clientX - dragStartRef.current.x,
                        y: event.clientY - dragStartRef.current.y,
                    });
                }}
                onMouseUp={() => {
                    dragStartRef.current = null;
                }}
                onMouseLeave={() => {
                    dragStartRef.current = null;
                }}
                onWheel={(event) => {
                    event.preventDefault();
                    setSmoothCamera(false);

                    setMapScale((prev) => {
                        const intensity = 0.00011;

                        const nextScale = prev - event.deltaY * intensity;

                        return clampScale(nextScale);
                    });
                }}
                className={`absolute inset-0 z-[2] will-change-transform ${
                    smoothCamera
                        ? "transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        : ""
                }`}
                style={{
                    transform: `
                      translate3d(${mapOffset.x}px, ${mapOffset.y}px, 0)
                      scale(${mapScale})
                    `,
                    transformOrigin: "center center",
                }}
            >
                <div
                    className="pointer-events-none absolute inset-[44px_52px_56px_44px] opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "calc(100% / 5) calc(100% / 6)",
                    }}
                />

                {visibleHerbs.map((herb) => (
                    <HerbMapNode
                        key={herb.id}
                        herb={herb}
                        isSelected={selectedHerb?.id === herb.id}
                        onSelect={() => {
                            setSelectedHerb(herb);

                            const focus = calculateMapFocus(herb);

                            moveCamera(focus.scale, focus.offset, true);
                        }}
                    />
                ))}
            </div>

            <div className="absolute left-4 top-4 z-20 max-w-[min(100%,420px)] sm:left-5 sm:top-5">
                <div className="rounded-xl border border-white/[0.08] bg-[#061018]/82 px-2.5 py-2 shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur-md">
                    <div className="flex flex-wrap gap-1.5">
                        {domainFilters.map((domain) => {
                            const isActive = activeDomain === domain;
                            const filterColor =
                                domain === "All" ? "#D0A85C" : getDomainColor(domain);

                            return (
                                <button
                                    key={domain}
                                    type="button"
                                    onClick={() => setActiveDomain(domain)}
                                    className="rounded-md border px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em] transition-all duration-300"
                                    style={{
                                        borderColor: isActive
                                            ? `${filterColor}55`
                                            : "rgba(255,255,255,0.06)",
                                        background: isActive
                                            ? `${filterColor}18`
                                            : "rgba(255,255,255,0.02)",
                                        color: isActive
                                            ? filterColor
                                            : "rgba(215,220,226,0.42)",
                                    }}
                                >
                                    {domain}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-white/[0.05] pt-2">
                        <button
                            type="button"
                            onClick={() => {
                                moveCamera(1, { x: 0, y: 0 }, true);
                            }}
                            className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em] text-[#D7DCE2]/42 transition-all duration-300 hover:border-[#D0A85C]/30 hover:text-[#D0A85C]"
                        >
                            Reset View
                        </button>
                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#D7DCE2]/32">
                            {mapScale.toFixed(2)}x · {visibleHerbs.length}/{herbNodes.length}
                        </p>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-6 right-5 z-10 hidden min-w-[168px] rounded-xl border border-white/[0.09] bg-[#061018]/90 px-4 py-3.5 shadow-[0_20px_56px_rgba(0,0,0,0.4)] backdrop-blur-md sm:block md:right-6">
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#D7DCE2]/42">
                    Bioactive Power
                </p>
                <div className="mt-2.5 flex items-end gap-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                        <span
                            key={level}
                            className="rounded-full border border-[#D0A85C]/35 bg-[#D0A85C]/12"
                            style={{
                                width: `${5 + level * 4}px`,
                                height: `${5 + level * 4}px`,
                                boxShadow:
                                    level >= 4 ? "0 0 10px rgba(208,168,92,0.25)" : undefined,
                            }}
                        />
                    ))}
                </div>
                <p className="mt-4 text-[8px] font-medium uppercase tracking-[0.2em] text-[#D7DCE2]/42">
                    Functional Domains
                </p>
                <ul className="mt-2.5 space-y-2">
                    {domainFilters
                        .filter((domain): domain is HerbDomain => domain !== "All")
                        .map((domain) => (
                            <li
                                key={domain}
                                className="flex items-center gap-2.5 text-[9px] uppercase tracking-[0.1em] text-[#D7DCE2]/58"
                            >
                                <span
                                    className="h-[2px] w-5 shrink-0 rounded-full"
                                    style={{
                                        background: getDomainColor(domain),
                                        boxShadow: `0 0 8px ${getDomainColor(domain)}44`,
                                    }}
                                />
                                {domain}
                            </li>
                        ))}
                </ul>
            </div>

            {selectedHerb && (
                <div className="absolute bottom-6 left-4 right-4 z-20 rounded-xl border border-white/[0.08] bg-[#061018]/94 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-md sm:max-w-[300px] md:left-5">
                    <p
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: getDomainColor(selectedHerb.domain) }}
                    >
                        Selected Herb
                    </p>

                    <h3 className="mt-2.5 text-[18px] font-light tracking-[-0.04em] text-[#F3F1EA] md:text-[20px]">
                        {selectedHerb.name}
                    </h3>

                    <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/[0.06]">
                        {[
                            ["Altitude", `${selectedHerb.altitude}m`],
                            ["Domain", selectedHerb.domain],
                            ["Readiness", `${selectedHerb.readiness}/100`],
                            ["Power", `Level ${selectedHerb.power}`],
                        ].map(([label, value]) => (
                            <div key={label} className="bg-[#071016] px-3 py-3">
                                <p className="text-[8px] uppercase tracking-[0.16em] text-[#D7DCE2]/34">
                                    {label}
                                </p>
                                <p
                                    className="mt-1.5 text-[13px] text-[#F3F1EA]"
                                    style={{
                                        color:
                                            label === "Domain"
                                                ? getDomainColor(selectedHerb.domain)
                                                : "#F3F1EA",
                                    }}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <a
                        href={`/herbs/${selectedHerb.id}`}
                        className="mt-4 inline-flex text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/52 transition-colors hover:text-[#F3F1EA]"
                    >
                        Open Herb Profile →
                    </a>
                </div>
            )}
        </div>
    );
}
