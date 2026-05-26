import Image from "next/image";
import type { HerbOriginNarrativesData } from "../../types/herb-detail";
import {
    DETAIL_MODULE_SHELL_COLOR,
    detailModuleSectionClassName,
    detailModuleShellWideContentClassName,
} from "./detail-module-layout";

interface OriginNarrativesProps {
    originNarratives: HerbOriginNarrativesData;
}

const MODULE_CARD = "#0E1116";
const DETAIL_TEXT_PRIMARY = "#F3F1EA";
const DETAIL_ACCENT_GOLD = "#C5A059";

export function OriginNarratives({ originNarratives }: OriginNarrativesProps) {
    const { subtitle, cards } = originNarratives;

    return (
        <section className={`${detailModuleSectionClassName} lg:mt-8`}>
            <div
                className={`${detailModuleShellWideContentClassName} flex flex-col lg:h-[640px]`}
                style={{ backgroundColor: DETAIL_MODULE_SHELL_COLOR }}
            >
                <header className="shrink-0">
                    <h2 className="text-[15px] font-medium text-white/92 md:text-[16px]">Origin Narratives</h2>
                    <p
                        className="mt-2 max-w-[62ch] text-[13px] leading-relaxed md:text-[14px]"
                        style={{ color: `${DETAIL_ACCENT_GOLD}CC` }}
                    >
                        {subtitle}
                    </p>
                </header>

                <div className="mt-6 flex min-h-0 flex-1 flex-col gap-4 sm:gap-5 lg:gap-6">
                    {cards.map(({ category, title, body, image }) => (
                        <article
                            key={title}
                            className="grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-[14px] border border-white/[0.06] md:grid-cols-[46fr_54fr] lg:h-[148px]"
                            style={{ backgroundColor: MODULE_CARD }}
                        >
                            <div className="relative h-[180px] w-full shrink-0 overflow-hidden bg-black/50 md:h-full md:min-h-0">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 768px) 46vw, 100vw"
                                />
                            </div>

                            <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-hidden px-4 py-4 md:px-5 md:py-3 lg:px-6 lg:py-3.5">
                                <p
                                    className="shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]"
                                    style={{ color: DETAIL_ACCENT_GOLD }}
                                >
                                    {category}
                                </p>
                                <h3 className="mt-1 shrink-0 text-[15px] font-medium leading-snug text-white/92 md:text-[16px]">
                                    {title}
                                </h3>
                                <div className="mt-1.5 min-h-0 space-y-1 overflow-hidden">
                                    {body.split("\n\n").map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-[11px] leading-snug md:text-[12px] lg:text-[12px] lg:leading-[1.45]"
                                            style={{ color: `${DETAIL_TEXT_PRIMARY}B8` }}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
