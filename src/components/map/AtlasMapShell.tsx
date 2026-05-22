"use client";

import { useRef, useState } from "react";
import { herbNodes } from "../../data/herbs";
import type { HerbNode } from "../../data/herbs";
import HerbMapNode from "./HerbMapNode";
import ActiveHerbPanel from "./ActiveHerbPanel";
import AtlasConnectionLines from "./AtlasConnectionLines";
import { calculateMapFocus } from "../../lib/map-focus";
import { isHerbLikelyVisible } from "../../lib/map-visibility";
import { getDomainColor } from "../../lib/domain-colors";

export default function AtlasMapShell() {
    const [selectedHerb, setSelectedHerb] = useState<HerbNode | null>(
        herbNodes[0]
    );

    const [activeDomain, setActiveDomain] = useState<string>("All");

    const [mapScale, setMapScale] = useState(1);

    const [mapOffset, setMapOffset] = useState({
        x: 0,
        y: 0,
    });

    const dragStartRef = useRef<{
        x: number;
        y: number;
    } | null>(null);

    const domainFilters = [
        "All",
        "Energy",
        "Immunity",
        "Cognitive",
        "Respiratory",
        "Longevity",
    ];

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
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    background: `
                    radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 34%),
                    radial-gradient(circle at center, rgba(90,120,160,0.08), transparent 52%),
                    linear-gradient(to bottom, #061018 0%, #040B11 58%, #03070B 100%)
                    `,
                }}
            />
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

                {selectedHerb && (
                    <div
                        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full blur-[120px] transition-all duration-700"
                        style={{
                            left: `${selectedHerb.readiness}%`,
                            top: `${100 - (selectedHerb.altitude / 6000) * 100}%`,
                            transform: "translate(-50%, -50%)",
                            background: `radial-gradient(circle, ${getDomainColor(
                                selectedHerb.domain
                            )}22 0%, ${getDomainColor(
                                selectedHerb.domain
                            )}0A 38%, transparent 72%)`,
                        }}
                    />
                )}

                {selectedHerb && (
                    <AtlasConnectionLines selectedHerb={selectedHerb} herbs={visibleHerbs} />
                )}

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

                            return (
                                <button
                                    key={domain}
                                    type="button"
                                    onClick={() => setActiveDomain(domain)}
                                    className="border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300"
                                    style={{
                                        borderColor: isActive
                                            ? `${selectedHerb ? getDomainColor(selectedHerb.domain) : "#D0A85C"}66`
                                            : "rgba(255,255,255,0.06)",
                                        background: isActive
                                            ? `${selectedHerb ? getDomainColor(selectedHerb.domain) : "#D0A85C"}14`
                                            : "rgba(255,255,255,0.02)",
                                        color: isActive
                                            ? selectedHerb
                                                ? getDomainColor(selectedHerb.domain)
                                                : "#D0A85C"
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
            {/* Selected herb panel */}
            {selectedHerb && <ActiveHerbPanel herb={selectedHerb} />}
        </div>
    );
}