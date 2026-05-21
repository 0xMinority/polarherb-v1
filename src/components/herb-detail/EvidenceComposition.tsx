interface EvidenceCompositionProps {
    herbName: string;
}

const evidenceRows = [
    ["Traditional Use", 4],
    ["Preclinical Evidence", 3],
    ["Human Evidence", 2],
    ["Commercial Adoption", 4],
    ["AI Mechanistic Prediction", 3],
];

export function EvidenceComposition({ herbName }: EvidenceCompositionProps) {
    return (
        <div className="mt-16 border border-white/[0.07] bg-[#08121A]/92 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D7DCE2]/35">
                Evidence Composition
            </p>

            <h3 className="mt-4 text-[24px] tracking-[-0.04em] text-[#F3F1EA]">
                Evidence confidence profile for {herbName}
            </h3>

            <div className="mt-8 grid grid-cols-3 gap-[1px] bg-white/[0.05]">
                {[
                    ["Supporting Literatures", "186+"],
                    ["Evidence Confidence", "Moderate"],
                    ["Breakthrough Potential", "High"],
                ].map(([label, value]) => (
                    <div key={label} className="bg-[#071016] p-5">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#D7DCE2]/35">
                            {label}
                        </p>

                        <p className="mt-4 text-[24px] tracking-[-0.04em] text-[#F3F1EA]">
                            {value}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-8 space-y-5">
                {evidenceRows.map(([label, score]) => (
                    <div key={label}>
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-[12px] text-[#D7DCE2]/70">{label}</p>
                            <p className="text-[11px] text-[#D7DCE2]/38">{score}/5</p>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                            {[1, 2, 3, 4, 5].map((dot) => (
                                <div
                                    key={dot}
                                    className={`h-[6px] ${dot <= Number(score)
                                            ? "bg-[#D0A85C]"
                                            : "bg-white/[0.06]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}