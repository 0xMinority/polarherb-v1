"use client";

import { useEffect, useState } from "react";
import { herbNodes, HerbNode } from "../../data/herbs";
import HerbMapNode from "./HerbMapNode";
import ActiveHerbPanel from "./ActiveHerbPanel";
import AtlasConnectionLines from "./AtlasConnectionLines";

export default function AtlasMapShell() {
    const [selectedHerb, setSelectedHerb] = useState<HerbNode | null>(
        herbNodes[0]
    );

    const [activeDomain, setActiveDomain] = useState<string>("All");

    const [mapScale] = useState(1);
    const [mapOffset] = useState({ x: 0, y: 0 });

    const domainFilters = [
        "All",
        "Energy",
        "Immunity",
        "Cognitive",
        "Respiratory",
        "Longevity",
    ];

    const visibleHerbs =
        activeDomain === "All"
            ? herbNodes
            : herbNodes.filter((herb) => herb.domain === activeDomain);

    useEffect(() => {
        if (!selectedHerb) return;

        const herbStillVisible = visibleHerbs.some(
            (herb) => herb.id === selectedHerb.id
        );

        if (!herbStillVisible) {
            setSelectedHerb(visibleHerbs[0] ?? null);
        }
    }, [activeDomain, selectedHerb, visibleHerbs]);

    return (
        <div className="relative h-[620px] w-full overflow-hidden bg-[#071016]">
            {/* Atmospheric background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(208,168,92,0.09),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_24%,rgba(0,0,0,0.24))]" />
            <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#D0A85C]/[0.03] blur-[140px]" />
            <div className="absolute right-[-6%] top-[38%] h-[320px] w-[320px] rounded-full bg-[#7FAE8D]/[0.025] blur-[120px]" />
            <div className="absolute bottom-[-18%] left-[28%] h-[260px] w-[520px] rounded-full bg-white/[0.02] blur-[140px]" />

            {/* Axis frame */}
            <div
                className="absolute inset-0 transition-transform duration-500"
                style={{
                    transform: `translate(${mapOffset.x}px, ${mapOffset.y}px) scale(${mapScale})`,
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
                            background:
                                "radial-gradient(circle, rgba(208,168,92,0.10) 0%, rgba(208,168,92,0.03) 38%, transparent 72%)",
                        }}
                    />
                )}

                {selectedHerb && (
                    <AtlasConnectionLines selectedHerb={selectedHerb} herbs={herbNodes} />
                )}

                {visibleHerbs.map((herb) => (
                    <HerbMapNode
                        key={herb.id}
                        herb={herb}
                        isSelected={selectedHerb?.id === herb.id}
                        onSelect={() => setSelectedHerb(herb)}
                    />
                ))}

                {/* Center label */}
                <div className="absolute left-12 top-10">
                    <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#D0A85C]">
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
                                    className={`border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${isActive
                                        ? "border-[#D0A85C]/40 bg-[#D0A85C]/10 text-[#D0A85C]"
                                        : "border-white/[0.06] bg-white/[0.02] text-[#D7DCE2]/45 hover:border-white/[0.12] hover:text-[#D7DCE2]/75"
                                        }`}
                                >
                                    {domain}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Selected herb panel */}
            {selectedHerb && <ActiveHerbPanel herb={selectedHerb} />}
        </div>
    );
}