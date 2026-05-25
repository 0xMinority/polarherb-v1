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

    const MIN_SCALE = 0.8;
    const MAX_SCALE = 2.4;

    const clampScale = (value: number) => {
        return Math.min(Math.max(value, MIN_SCALE), MAX_SCALE);
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

    const readinessStages = [
        "Wild Discovery",
        "Functional Adaptation",
        "Translational Potential",
        "Commercial Integration",
        "Mainstream Presence",
    ];

    const altitudeMarks = [6000, 5000, 4000, 3000, 2000, 1000, 0];

    return (
        <div className="relative h-[min(72vh,760px)] min-h-[480px] w-full overflow-hidden bg-[#071016]/94 sm:min-h-[520px] lg:h-[min(68vh,820px)]">
            {/* Atmospheric background */}
            <motion.div
                className="absolute inset-0 opacity-95"
                style={{
                    background: `
        radial-gradient(circle at top center, rgba(208,168,92,0.10), transparent 24%),
        radial-gradient(circle at 20% 30%, rgba(90,120,160,0.10), transparent 36%),
        radial-gradient(circle at 80% 60%, rgba(120,160,220,0.06), transparent 42%),
        linear-gradient(to bottom, #08131B 0%, #050D14 46%, #03070B 100%)
        `,
                }}
                animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.88, 0.98, 0.88],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                    backgroundImage: `
        linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
                    backgroundSize: "120px 120px",
                    maskImage:
                        "radial-gradient(circle at center, black 45%, transparent 100%)",
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "120px 120px"],
                }}
                transition={{
                    duration: 48,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02]" />
            {/* Axis frame */}
            <div
                onMouseDown={(event) => {
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

                    setMapScale((prev) => {
                        const intensity =
                            prev > 1.8 ? 0.00045 : prev > 1.3 ? 0.00065 : 0.0009;

                        const nextScale = prev - event.deltaY * intensity;

                        return clampScale(nextScale);
                    });
                }}
                className="absolute inset-0 will-change-transform transition-transform duration-500 ease-out"
                style={{
                    transform: `
                      translate3d(${mapOffset.x}px, ${mapOffset.y}px, 0)
                      scale(${mapScale})
                    `,
                    transformOrigin: "center center",
                }}
            >
                <div className="absolute inset-10 border border-white/[0.06]" />

                {/* Vertical grid */}
                <div className="absolute inset-10 flex justify-between">
                    {[...Array(6)].map((_, i) => (
                        <div key={`v-${i}`} className="h-full w-px bg-white/[0.03]" />
                    ))}
                </div>

                {/* Horizontal grid */}
                <div className="absolute inset-10 flex flex-col justify-between">
                    {[...Array(5)].map((_, i) => (
                        <div key={`h-${i}`} className="h-px w-full bg-white/[0.025]" />
                    ))}
                </div>

                <div className="pointer-events-none absolute bottom-14 left-10 right-10 flex justify-between text-[9px] uppercase tracking-[0.14em] text-[#D7DCE2]/42">
                    {readinessStages.map((stage) => (
                        <span key={stage} className="max-w-[88px] text-center leading-tight">
                            {stage}
                        </span>
                    ))}
                </div>

                <div className="pointer-events-none absolute left-3 top-10 bottom-16 flex flex-col justify-between text-[9px] tabular-nums tracking-[0.08em] text-[#D7DCE2]/38">
                    {altitudeMarks.map((mark) => (
                        <span key={mark}>{mark === 0 ? "0m" : `${mark}m`}</span>
                    ))}
                </div>

                <div className="pointer-events-none absolute right-3 top-10 flex flex-col gap-3 text-[9px] tabular-nums tracking-[0.08em] text-[#D7DCE2]/32">
                    {["4.0x", "3.0x", "2.0x", "1.0x", "0.75x"].map((mark) => (
                        <span key={mark}>{mark}</span>
                    ))}
                </div>

                {visibleHerbs.map((herb) => (
                    <HerbMapNode
                        key={herb.id}
                        herb={herb}
                        isSelected={selectedHerb?.id === herb.id}
                        onSelect={() => {
                            setSelectedHerb(herb);

                            const focus = calculateMapFocus(herb);

                            setMapScale(focus.scale);
                            setMapOffset(focus.offset);
                        }}
                    />
                ))}

                <div className="absolute left-12 top-10 max-w-[420px]">
                    <div className="flex flex-wrap gap-2">
                        {domainFilters.map((domain) => {
                            const isActive = activeDomain === domain;
                            const filterColor =
                                domain === "All" ? "#D0A85C" : getDomainColor(domain);

                            return (
                                <button
                                    key={domain}
                                    type="button"
                                    onClick={() => setActiveDomain(domain)}
                                    className="border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300"
                                    style={{
                                        borderColor: isActive
                                            ? `${filterColor}66`
                                            : "rgba(255,255,255,0.06)",
                                        background: isActive
                                            ? `${filterColor}14`
                                            : "rgba(255,255,255,0.02)",
                                        color: isActive
                                            ? filterColor
                                            : "rgba(215,220,226,0.45)",
                                    }}
                                >
                                    {domain}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setMapScale(1);
                                setMapOffset({ x: 0, y: 0 });
                            }}
                            className="border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/45 transition-all duration-300 hover:border-[#D0A85C]/30 hover:text-[#D0A85C]"
                        >
                            Reset View
                        </button>

                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                            Scale {mapScale.toFixed(2)}x
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                            Showing {visibleHerbs.length}/{herbNodes.length}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-5 right-5 z-10 hidden rounded-xl border border-white/[0.08] bg-[#08121A]/88 px-4 py-3 backdrop-blur-md sm:block md:bottom-6 md:right-6">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/45">
                    Bioactive Power
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                        <span
                            key={level}
                            className="rounded-full border border-white/[0.12] bg-white/[0.04]"
                            style={{
                                width: `${6 + level * 3}px`,
                                height: `${6 + level * 3}px`,
                            }}
                        />
                    ))}
                </div>
                <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/45">
                    Functional Domains
                </p>
                <ul className="mt-2 space-y-1">
                    {domainFilters
                        .filter((domain): domain is HerbDomain => domain !== "All")
                        .map((domain) => (
                            <li
                                key={domain}
                                className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-[#D7DCE2]/55"
                            >
                                <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ background: getDomainColor(domain) }}
                                />
                                {domain}
                            </li>
                        ))}
                </ul>
            </div>

            {selectedHerb && (
                <div className="absolute bottom-5 left-5 right-5 z-20 border border-white/[0.07] bg-[#08121A]/92 p-4 shadow-[0_32px_100px_rgba(0,0,0,0.34)] backdrop-blur-[14px] sm:max-w-[320px] md:bottom-6 md:left-6 md:right-auto md:p-5">
                    <p
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: getDomainColor(selectedHerb.domain) }}
                    >
                        Selected Herb
                    </p>

                    <h3 className="mt-3 text-[20px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[22px]">
                        {selectedHerb.name}
                    </h3>

                    <div className="mt-6 grid grid-cols-2 gap-[1px] bg-white/[0.05]">
                        {[
                            ["Altitude", `${selectedHerb.altitude}m`],
                            ["Domain", selectedHerb.domain],
                            ["Readiness", `${selectedHerb.readiness}/100`],
                            ["Power", `Level ${selectedHerb.power}`],
                        ].map(([label, value]) => (
                            <div key={label} className="bg-[#071016] p-4">
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                                    {label}
                                </p>

                                <p
                                    className="mt-3 text-[14px] text-[#F3F1EA]"
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
                        className="mt-6 inline-flex text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/55 transition-colors hover:text-[#F3F1EA]"
                    >
                        Open Herb Profile →
                    </a>
                </div>
            )}
        </div>
    );
}
