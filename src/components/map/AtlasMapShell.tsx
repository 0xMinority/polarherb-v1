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

    return (
        <div className="relative h-[1080px] w-full overflow-hidden border border-white/[0.07] bg-[#071016]/94 shadow-[0_60px_180px_rgba(0,0,0,0.38)]">
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
                        const sensitivity = prev > 1.4 ? 0.0006 : 0.001;

                        const next = prev - event.deltaY * sensitivity;

                        return Math.min(Math.max(next, 0.8), 2.4);
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

                {/* Altitude label */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.28em] text-[#D7DCE2]/45">
                    Altitude Range
                </div>

                {/* Development label */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-[#D7DCE2]/45">
                    Commercialization Readiness
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

                {/* Center label */}
                <div className="absolute left-12 top-10">
                    <p
                        className="text-[11px] font-medium uppercase tracking-[0.26em]"
                        style={{
                            color: selectedHerb
                                ? getDomainColor(selectedHerb.domain)
                                : "#D0A85C",
                        }}
                    >
                        Atlas Map
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#D7DCE2]/65">
                        Spatial intelligence layer for altitude origin, biological rarity,
                        evidence signal, and commercialization position.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
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
            {selectedHerb && (
                <div className="absolute bottom-8 left-8 z-20 w-[360px] border border-white/[0.07] bg-[#08121A]/92 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.34)] backdrop-blur-[14px]">
                    <p
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: getDomainColor(selectedHerb.domain) }}
                    >
                        Selected Herb
                    </p>

                    <h3 className="mt-4 text-[28px] font-light tracking-[-0.05em] text-[#F3F1EA]">
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