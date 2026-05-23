import type { HerbEvidenceData } from "../../types/herb-detail";

interface EvidenceCompositionProps {
    herbName: string;
    evidence: HerbEvidenceData;
}

const DETAIL_SURFACE = "#071016";
const DETAIL_PANEL_SURFACE = "#08121A";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#D7DCE2";
const DETAIL_ACCENT_GOLD = "#D0A85C";
const DETAIL_GRID_BORDER = "bg-white/[0.05]";

export function EvidenceComposition({ herbName, evidence }: EvidenceCompositionProps) {
    const summaryMetrics = [
        ["Supporting Literatures", evidence.supportingLiteratures],
        ["Evidence Confidence", evidence.confidence],
        ["Breakthrough Potential", evidence.breakthroughPotential],
    ];

    return (
        <div className="relative mt-16 overflow-hidden border border-white/[0.07] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 xl:p-8" style={{ backgroundColor: `${DETAIL_PANEL_SURFACE}EB` }}>
            <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                    background: `
                        radial-gradient(circle at top left, rgba(208,168,92,0.08), transparent 38%),
                        linear-gradient(to bottom, rgba(255,255,255,0.018), transparent 32%)
                    `,
                }}
            />

            <div className="relative z-10">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: `${DETAIL_ACCENT_GOLD}E0` }}>
                            Evidence Composition
                        </p>

                        <h3 className="mt-4 max-w-[760px] text-[22px] font-light tracking-[-0.05em] md:text-[24px] xl:text-[28px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
                            Evidence confidence profile for {herbName}
                        </h3>
                    </div>

                    <div className="border border-white/[0.06] px-4 py-3 text-[10px] uppercase tracking-[0.18em]" style={{ backgroundColor: `${DETAIL_SURFACE}B3`, color: `${DETAIL_TEXT_MUTED}73` }}>
                        Multi-layer signal model
                    </div>
                </div>

                <div className={`mt-8 grid grid-cols-1 gap-[1px] ${DETAIL_GRID_BORDER} md:grid-cols-3 xl:mt-10`}>
                    {summaryMetrics.map(([label, value]) => (
                        <div key={label} className="p-4 md:p-5" style={{ backgroundColor: DETAIL_SURFACE }}>
                            <p className="text-[9px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}59` }}>
                                {label}
                            </p>

                            <p className="mt-4 text-[22px] font-light tracking-[-0.04em] md:text-[24px]" style={{ color: DETAIL_TEXT_PRIMARY }}>
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 space-y-4 xl:mt-10 xl:space-y-5">
                    {evidence.layers.map(({ label, score, note }) => {
                        const percentage = (score / 5) * 100;

                        return (
                            <div
                                key={label}
                                className="border border-white/[0.05] p-4 md:p-5"
                                style={{ backgroundColor: `${DETAIL_SURFACE}B3` }}
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <p className="text-[13px]" style={{ color: `${DETAIL_TEXT_PRIMARY}E0` }}>
                                            {label}
                                        </p>
                                        <p className="mt-2 max-w-[620px] text-[12px] leading-6" style={{ color: `${DETAIL_TEXT_MUTED}73` }}>
                                            {note}
                                        </p>
                                    </div>

                                    <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: `${DETAIL_TEXT_MUTED}6B` }}>
                                        {score}/5
                                    </p>
                                </div>

                                <div className="mt-5 h-[5px] overflow-hidden bg-white/[0.055]">
                                    <div
                                        className="h-full shadow-[0_0_24px_rgba(208,168,92,0.32)]"
                                        style={{ width: `${percentage}%`, backgroundColor: DETAIL_ACCENT_GOLD }}
                                    />
                                </div>

                                <div className="mt-3 grid grid-cols-5 gap-2">
                                    {[1, 2, 3, 4, 5].map((dot) => (
                                        <div
                                            key={dot}
                                            className={`h-[3px] ${
                                                dot <= score
                                                    ? "bg-[#D0A85C]/75"
                                                    : "bg-white/[0.06]"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}