"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { herbNodes } from "../../data/herbs";
import type { HerbNode } from "../../data/herbs";
import type { HerbDomain } from "../../types/herb";
import HerbMapNode from "./HerbMapNode";
import { calculateMapFocus } from "../../lib/map-focus";
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

const PLOT_INSET = "44px 52px 56px 44px";

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

    const mapViewportRef = useRef<HTMLDivElement>(null);
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

    const mapHerbs =
        activeDomain === "All"
            ? herbNodes
            : herbNodes.filter((herb) => herb.domain === activeDomain);

    useEffect(() => {
        const viewport = mapViewportRef.current;
        if (!viewport) return;

        const onWheel = (event: WheelEvent) => {
            event.preventDefault();
            event.stopPropagation();
            setSmoothCamera(false);

            setMapScale((prev) => {
                const nextScale = prev - event.deltaY * 0.00011;
                return clampScale(nextScale);
            });
        };

        viewport.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            viewport.removeEventListener("wheel", onWheel);
        };
    }, []);

    const cameraTransform = `translate3d(${mapOffset.x}px, ${mapOffset.y}px, 0) scale(${mapScale})`;

    return (
        <div
            ref={mapViewportRef}
            className="relative h-full min-h-[min(72vh,680px)] w-full overscroll-contain touch-none sm:min-h-[min(74vh,760px)] lg:min-h-[min(76vh,860px)]"
            style={{ overscrollBehavior: "contain" }}
        >
            {/* Fixed map chrome (HUD) — does not pan with canvas */}
            <div className="pointer-events-none absolute inset-[44px_52px_56px_44px] z-[3]">
                <div className="absolute inset-0 rounded-sm border border-white/[0.07]" />
            </div>

            <div className="pointer-events-none absolute bottom-[56px] left-3 top-[44px] z-[3] flex w-7 flex-col justify-between text-[8px] tabular-nums leading-none text-[#D7DCE2]/44">
                {altitudeMarks.map((mark) => (
                    <span key={mark}>{mark === 0 ? "0m" : `${mark}m`}</span>
                ))}
            </div>

            <div className="pointer-events-none absolute bottom-2.5 left-[44px] right-[52px] z-[3] flex justify-between gap-1">
                {readinessStages.map((stage) => (
                    <span
                        key={stage}
                        className="max-w-[84px] text-center text-[7px] uppercase leading-tight tracking-[0.1em] text-[#D7DCE2]/42 sm:text-[8px]"
                    >
                        {stage}
                    </span>
                ))}
            </div>

            <div className="pointer-events-none absolute right-[52px] top-[44px] z-[3] flex flex-col items-end gap-3">
                <div className="h-12 w-px bg-white/[0.08]" />
                {powerScaleMarks.map((mark) => (
                    <span
                        key={mark}
                        className="text-[7px] tabular-nums tracking-[0.05em] text-[#D7DCE2]/32"
                    >
                        {mark}
                    </span>
                ))}
            </div>

            {/* Unified pannable + zoomable canvas */}
            <div
                className={`absolute inset-0 z-[1] will-change-transform ${
                    smoothCamera
                        ? "transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        : ""
                }`}
                style={{
                    transform: cameraTransform,
                    transformOrigin: "center center",
                }}
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
            >
                <div className="absolute inset-0 overflow-visible bg-[#050C12]">
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
                    <motion.div
                        className="pointer-events-none absolute inset-0 opacity-80"
                        style={{
                            background:
                                "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(208,168,92,0.06) 0%, transparent 70%)",
                        }}
                        animate={{ opacity: [0.58, 0.66, 0.58] }}
                        transition={{
                            duration: 26,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
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

                    <div
                        className="pointer-events-none absolute opacity-[0.03]"
                        style={{ inset: PLOT_INSET }}
                    >
                        <div className="absolute inset-0 flex justify-between">
                            {readinessStages.map((stage) => (
                                <div
                                    key={stage}
                                    className="h-full w-px bg-white/[0.04]"
                                />
                            ))}
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-between">
                            {altitudeMarks.map((mark) => (
                                <div key={mark} className="h-px w-full bg-white/[0.035]" />
                            ))}
                        </div>
                    </div>

                    {mapHerbs.map((herb) => (
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
            </div>

            {/* In-map HUD: compact filters (bottom-left) */}
            <div className="absolute bottom-7 left-3 z-[4] max-w-[calc(100%-120px)] sm:left-4 sm:bottom-8">
                <div className="rounded-lg border border-white/[0.07] bg-[#061018]/78 px-2 py-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                    <div className="flex flex-wrap items-center gap-1">
                        {domainFilters.map((domain) => {
                            const isActive = activeDomain === domain;
                            const filterColor =
                                domain === "All" ? "#D0A85C" : getDomainColor(domain);

                            return (
                                <button
                                    key={domain}
                                    type="button"
                                    onClick={() => setActiveDomain(domain)}
                                    className="rounded border px-2 py-0.5 text-[7px] uppercase tracking-[0.12em] transition-all duration-300"
                                    style={{
                                        borderColor: isActive
                                            ? `${filterColor}50`
                                            : "rgba(255,255,255,0.06)",
                                        background: isActive
                                            ? `${filterColor}16`
                                            : "rgba(255,255,255,0.02)",
                                        color: isActive
                                            ? filterColor
                                            : "rgba(215,220,226,0.4)",
                                    }}
                                >
                                    {domain}
                                </button>
                            );
                        })}
                        <button
                            type="button"
                            onClick={() => moveCamera(1, { x: 0, y: 0 }, true)}
                            className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[7px] uppercase tracking-[0.12em] text-[#D7DCE2]/38 hover:text-[#D0A85C]"
                        >
                            Reset
                        </button>
                        <span className="px-1 text-[7px] tabular-nums text-[#D7DCE2]/28">
                            {mapScale.toFixed(2)}x
                        </span>
                    </div>
                </div>
            </div>

            {/* In-map HUD: compact legend (bottom-right) */}
            <div className="pointer-events-none absolute bottom-7 right-3 z-[4] hidden rounded-lg border border-white/[0.07] bg-[#061018]/78 px-2.5 py-2 backdrop-blur-sm sm:block sm:right-4 sm:bottom-8">
                <p className="text-[7px] font-medium uppercase tracking-[0.16em] text-[#D7DCE2]/38">
                    Bioactive Power
                </p>
                <div className="mt-1 flex items-end gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                        <span
                            key={level}
                            className="rounded-full border border-[#D0A85C]/30 bg-[#D0A85C]/10"
                            style={{
                                width: `${3 + level * 2.5}px`,
                                height: `${3 + level * 2.5}px`,
                            }}
                        />
                    ))}
                </div>
                <p className="mt-2 text-[7px] font-medium uppercase tracking-[0.16em] text-[#D7DCE2]/38">
                    Domains
                </p>
                <ul className="mt-1 space-y-0.5">
                    {domainFilters
                        .filter((domain): domain is HerbDomain => domain !== "All")
                        .map((domain) => (
                            <li
                                key={domain}
                                className="flex items-center gap-1.5 text-[7px] uppercase tracking-[0.08em] text-[#D7DCE2]/50"
                            >
                                <span
                                    className="h-[2px] w-3 shrink-0 rounded-full"
                                    style={{ background: getDomainColor(domain) }}
                                />
                                {domain}
                            </li>
                        ))}
                </ul>
            </div>

            {selectedHerb && (
                <div className="absolute bottom-7 left-3 z-[4] hidden max-w-[240px] rounded-lg border border-white/[0.07] bg-[#061018]/90 p-3 backdrop-blur-md md:left-auto md:right-[108px] md:block">
                    <p
                        className="text-[7px] uppercase tracking-[0.18em]"
                        style={{ color: getDomainColor(selectedHerb.domain) }}
                    >
                        Selected
                    </p>
                    <h3 className="mt-1 text-[14px] font-light tracking-[-0.03em] text-[#F3F1EA]">
                        {selectedHerb.name}
                    </h3>
                    <a
                        href={`/herbs/${selectedHerb.id}`}
                        className="mt-2 inline-flex text-[8px] uppercase tracking-[0.14em] text-[#D7DCE2]/48 hover:text-[#F3F1EA]"
                    >
                        Open profile →
                    </a>
                </div>
            )}
        </div>
    );
}
