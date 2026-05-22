interface EvidenceCompositionProps {
    herbName: string;
}

const evidenceRows = [
    {
        label: "Traditional Use",
        score: 4,
        note: "Historical usage signals across regional materia medica traditions.",
    },
    {
        label: "Preclinical Evidence",
        score: 3,
        note: "Mechanistic and animal-level findings suggest functional direction.",
    },
    {
        label: "Human Evidence",
        score: 2,
        note: "Limited clinical translation; requires stronger human validation.",
    },
    {
        label: "Commercial Adoption",
        score: 4,
        note: "Existing market familiarity supports practical product readiness.",
    },
    {
        label: "AI Mechanistic Prediction",
        score: 3,
        note: "Computational inference indicates plausible multi-target activity.",
    },
];

const summaryMetrics = [
    ["Supporting Literatures", "186+"],
    ["Evidence Confidence", "Moderate"],
    ["Breakthrough Potential", "High"],
];

export function EvidenceComposition({ herbName }: EvidenceCompositionProps) {
    return (
        <div className="relative mt-16 overflow-hidden border border-white/[0.07] bg-[#08121A]/92 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-7 xl:p-8">
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
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D0A85C]/88">
                            Evidence Composition
                        </p>

                        <h3 className="mt-4 max-w-[760px] text-[22px] font-light tracking-[-0.05em] text-[#F3F1EA] md:text-[24px] xl:text-[28px]">
                            Evidence confidence profile for {herbName}
                        </h3>
                    </div>

                    <div className="border border-white/[0.06] bg-[#071016]/70 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/45">
                        Multi-layer signal model
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-[1px] bg-white/[0.05] md:grid-cols-3 xl:mt-10">
                    {summaryMetrics.map(([label, value]) => (
                        <div key={label} className="bg-[#071016] p-4 md:p-5">
                            <p className="text-[9px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                                {label}
                            </p>

                            <p className="mt-4 text-[22px] font-light tracking-[-0.04em] text-[#F3F1EA] md:text-[24px]">
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 space-y-4 xl:mt-10 xl:space-y-5">
                    {evidenceRows.map(({ label, score, note }) => {
                        const percentage = (score / 5) * 100;

                        return (
                            <div
                                key={label}
                                className="border border-white/[0.05] bg-[#071016]/70 p-4 md:p-5"
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <p className="text-[13px] text-[#F3F1EA]/88">
                                            {label}
                                        </p>
                                        <p className="mt-2 max-w-[620px] text-[12px] leading-6 text-[#D7DCE2]/45">
                                            {note}
                                        </p>
                                    </div>

                                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#D7DCE2]/42">
                                        {score}/5
                                    </p>
                                </div>

                                <div className="mt-5 h-[5px] overflow-hidden bg-white/[0.055]">
                                    <div
                                        className="h-full bg-[#D0A85C] shadow-[0_0_24px_rgba(208,168,92,0.32)]"
                                        style={{ width: `${percentage}%` }}
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