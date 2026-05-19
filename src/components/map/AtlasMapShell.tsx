"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { herbNodes, HerbNode } from "../../data/herbs";
import HerbMapNode from "./HerbMapNode";

export default function AtlasMapShell() {
    const [selectedHerb, setSelectedHerb] = useState<HerbNode | null>(
        herbNodes[0]
    );

    return (
        <div className="relative h-[620px] w-full overflow-hidden bg-[#071016]">
            {/* Atmospheric background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(208,168,92,0.09),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_24%,rgba(0,0,0,0.24))]" />
            <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#D0A85C]/[0.03] blur-[140px]" />
            <div className="absolute right-[-6%] top-[38%] h-[320px] w-[320px] rounded-full bg-[#7FAE8D]/[0.025] blur-[120px]" />
            <div className="absolute bottom-[-18%] left-[28%] h-[260px] w-[520px] rounded-full bg-white/[0.02] blur-[140px]" />

            {/* Axis frame */}
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
                <svg className="pointer-events-none absolute inset-10 h-[calc(100%-80px)] w-[calc(100%-80px)] overflow-visible">
                    {herbNodes
                        .filter((herb) => herb.id !== selectedHerb.id)
                        .map((herb) => {
                            const x1 = selectedHerb.readiness;
                            const y1 = 100 - (selectedHerb.altitude / 6000) * 100;

                            const x2 = herb.readiness;
                            const y2 = 100 - (herb.altitude / 6000) * 100;

                            return (
                                <line
                                    key={`${selectedHerb.id}-${herb.id}`}
                                    x1={`${x1}%`}
                                    y1={`${y1}%`}
                                    x2={`${x2}%`}
                                    y2={`${y2}%`}
                                    stroke="rgba(208,168,92,0.13)"
                                    strokeWidth="1"
                                    strokeDasharray="4 8"
                                />
                            );
                        })}
                </svg>
            )}

            {herbNodes.map((herb) => (
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
            </div>

            {/* Selected herb panel */}
            {selectedHerb && (
                <motion.div
                    key={selectedHerb.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-10 right-10 w-[340px] overflow-hidden border border-white/[0.05] bg-[#071016]/88 backdrop-blur-[18px]"
                >

                    <div className="border-b border-white/[0.05] px-6 py-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#D0A85C]">
                            Active Herb Node
                        </p>
                    </div>

                    <div className="px-6 py-6">
                        <h3 className="text-[30px] font-medium tracking-[-0.04em] text-[#F3F1EA]">
                            {selectedHerb.name}
                        </h3>

                        <div className="mt-8 grid grid-cols-2 gap-y-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                                    Altitude
                                </p>

                                <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
                                    {selectedHerb.altitude}m
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                                    Domain
                                </p>

                                <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
                                    {selectedHerb.domain}
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                                    Readiness
                                </p>

                                <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
                                    {selectedHerb.readiness}/100
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                                    Bioactive Power
                                </p>

                                <p className="mt-2 text-[15px] tracking-[-0.01em] text-[#F3F1EA]">
                                    Level {selectedHerb.power}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}