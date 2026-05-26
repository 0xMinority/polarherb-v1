import Image from "next/image";
import type { HerbProductSnapshotsData } from "../../types/herb-detail";
import {
    DETAIL_MODULE_SHELL_COLOR,
    detailModuleSectionClassName,
    detailModuleShellClassName,
} from "./detail-module-layout";

interface ProductSnapshotsProps {
    productSnapshots: HerbProductSnapshotsData;
}

const MODULE_CARD = "#0E1116";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_TEXT_MUTED = "#94A3B8";
const DETAIL_ACCENT_GOLD = "#C5A059";

export function ProductSnapshots({ productSnapshots }: ProductSnapshotsProps) {
    const { snapshots, idealFor } = productSnapshots;
    const displaySnapshots = [
        ...snapshots,
        {
            category: "Clinical Concept",
            title: "Energy Recovery Formula",
            image: snapshots[0]?.image ?? "",
        },
    ];

    return (
        <section className={`${detailModuleSectionClassName} lg:mt-8`}>
            <div
                className={`${detailModuleShellClassName} flex flex-col lg:h-[420px]`}
                style={{ backgroundColor: DETAIL_MODULE_SHELL_COLOR }}
            >
                <h2 className="shrink-0 text-[15px] font-medium text-white/92 md:text-[16px]">Product Snapshots</h2>

                <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:h-[272px] lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(260px,1.35fr)] lg:items-stretch lg:gap-6">
                    {displaySnapshots.map(({ category, title, image }) => (
                        <article
                            key={title}
                            className="flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-white/[0.06] lg:h-[272px]"
                            style={{ backgroundColor: MODULE_CARD }}
                        >
                            <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-black/50">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 1024px) 14vw, 50vw"
                                />
                            </div>

                            <div className="flex min-h-[92px] flex-col justify-center px-3">
                                <p
                                    className="text-[10px] font-medium uppercase leading-none tracking-[0.14em] md:text-[11px]"
                                    style={{ color: `${DETAIL_ACCENT_GOLD}CC` }}
                                >
                                    {category}
                                </p>
                                <p className="mt-1.5 text-[13px] leading-tight text-white/92">{title}</p>
                            </div>
                        </article>
                    ))}

                    <aside
                        className="flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-white/[0.06] px-4 py-4 lg:h-[272px] lg:px-5 lg:py-4"
                        style={{ backgroundColor: MODULE_CARD }}
                    >
                        <p
                            className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em]"
                            style={{ color: `${DETAIL_TEXT_MUTED}CC` }}
                        >
                            Ideal For
                        </p>

                        <div className="mt-4 flex flex-1 flex-col justify-between gap-3 overflow-hidden">
                            {idealFor.map(({ label, items }) => (
                                <div key={label} className="min-h-0">
                                    <p
                                        className="text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                                        style={{ color: DETAIL_ACCENT_GOLD }}
                                    >
                                        {label}
                                    </p>
                                    <ul className="mt-1.5 space-y-1">
                                        {items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 text-[12px] leading-snug md:text-[13px]"
                                                style={{ color: `${DETAIL_TEXT_PRIMARY}B8` }}
                                            >
                                                <span
                                                    className="mt-[6px] h-1 w-1 shrink-0 rounded-full"
                                                    style={{ backgroundColor: `${DETAIL_TEXT_MUTED}66` }}
                                                    aria-hidden
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
