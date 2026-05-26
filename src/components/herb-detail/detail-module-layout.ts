/** Shared outer alignment for detail-page modules (Hero Panel baseline: 64px inset, 1312px at 1440). */
export const detailModuleSectionClassName =
    "relative z-10 w-full px-5 md:px-8 lg:ml-16 lg:mr-16 lg:w-auto lg:max-w-none lg:px-0";

/** Vertical gap between stacked detail modules — 32px. */
export const detailModuleGapClassName = "mt-8";

/**
 * Shared inner shell surface — padding matches HeroPanel shell (`p-5 md:p-6 lg:p-7`).
 * Do not add extra `lg:px-*` overrides on module shells; content edges align with Hero.
 */
export const detailModuleShellClassName =
    "w-full overflow-hidden rounded-[20px] border border-white/[0.055] p-5 md:p-6 lg:box-border lg:p-7";

/** Shell with 32px horizontal inset — full-width 1248px content rows (Modules 3–6). */
export const detailModuleShellWideContentClassName =
    "w-full overflow-hidden rounded-[20px] border border-white/[0.055] p-5 md:p-6 lg:box-border lg:px-8 lg:py-7";

/** Surface colors — aligned with HeroPanel / ProductSnapshots / Origin / Bioactive. */
export const DETAIL_MODULE_SHELL_COLOR = "#0A0C10";
export const DETAIL_MODULE_CARD_COLOR = "#0E1116";
export const DETAIL_TEXT_PRIMARY = "#F3F1EA";
export const DETAIL_TEXT_MUTED = "#94A3B8";
export const DETAIL_ACCENT_GOLD = "#C5A059";
export const DETAIL_STATUS_GREEN = "#7FAE8D";

/** Common alpha variants used across accepted modules. */
export const DETAIL_ACCENT_GOLD_SUBTITLE = `${DETAIL_ACCENT_GOLD}CC`;
export const DETAIL_TEXT_MUTED_LABEL = `${DETAIL_TEXT_MUTED}CC`;
export const DETAIL_TEXT_PRIMARY_BODY = `${DETAIL_TEXT_PRIMARY}B8`;
export const DETAIL_TEXT_PRIMARY_SECONDARY = `${DETAIL_TEXT_PRIMARY}99`;
export const DETAIL_ACCENT_GOLD_BORDER = `${DETAIL_ACCENT_GOLD}55`;
export const DETAIL_ACCENT_GOLD_IMAGE_BORDER = `${DETAIL_ACCENT_GOLD}59`;

/** Inline style helpers for module surfaces. */
export const detailModuleShellStyle = { backgroundColor: DETAIL_MODULE_SHELL_COLOR } as const;
export const detailModuleCardStyle = { backgroundColor: DETAIL_MODULE_CARD_COLOR } as const;

/** Card surface — border, radius (Module 2–4 standard). */
export const detailModuleCardSurfaceClassName =
    "overflow-hidden rounded-[14px] border border-white/[0.06]";

/** Default inner card padding rhythm. */
export const detailModuleCardPaddingClassName = "p-4 sm:p-5 lg:p-6";
export const detailModuleCardPaddingCompactClassName = "px-4 py-4 lg:px-5 lg:py-4";

/** Section title — Module 2–4 standard. */
export const detailModuleTitleClassName = "text-[15px] font-medium text-white/92 md:text-[16px]";

/** Section subtitle — muted gold, Module 2–4 standard. */
export const detailModuleSubtitleClassName =
    "mt-2 max-w-[62ch] text-[13px] leading-relaxed md:text-[14px]";

/** Small uppercase label — Application Context, Ideal For, etc. */
export const detailModuleLabelClassName =
    "text-[10px] font-medium uppercase tracking-[0.14em] md:text-[11px]";

/** Card / panel subheading. */
export const detailModuleCardTitleClassName =
    "text-[14px] font-medium leading-snug text-white/92 md:text-[15px]";

/** In-card content heading (Origin Narratives card title density). */
export const detailModuleCardHeadingClassName =
    "text-[15px] font-medium leading-snug text-white/92 md:text-[16px]";

/** Gold accent heading (synergy stack title, pairing names). */
export const detailModuleAccentHeadingClassName =
    "text-[15px] font-medium leading-snug md:text-[16px]";

/** Body copy — narrative / insight text. */
export const detailModuleBodyClassName = "text-[11px] leading-relaxed md:text-[12px]";

/** Body copy — compact lines. */
export const detailModuleBodySnugClassName = "text-[12px] leading-snug md:text-[13px]";

/** Insight / footer strip — Matchup Insight, Bioactive Insight compact row. */
export const detailModuleInsightStripClassName =
    "flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-[14px] border border-white/[0.06] px-4 lg:px-5";

/** Taxonomy / context chip — Bioactive Intelligence standard. */
export const detailModuleChipClassName =
    "flex h-8 w-full max-w-[164px] shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 text-[11px] leading-none text-white/88 md:text-[12px]";

export const detailModuleChipActiveClassName = "border-[#C5A059]/55 bg-[#C5A059]/10";

export const detailModuleChipInactiveClassName =
    "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.12]";

/** Selector button — Comparative Matchup challenger chips (174×40). */
export const detailModuleSelectorButtonClassName =
    "flex h-10 w-[174px] shrink-0 items-center justify-center gap-2 rounded-full border px-3 transition-colors";

/** Specimen image frame — gold border used in hero-adjacent modules. */
export const detailModuleSpecimenFrameClassName =
    "overflow-hidden rounded-[14px] border border-[#C5A059]/35 bg-black/40";

/** Circular specimen thumbnail. */
export const detailModuleSpecimenCircleClassName =
    "overflow-hidden rounded-full border border-[#C5A059]/40 bg-black/50";

/** Application tag pill — active stack tags, suggested applications. */
export const detailModuleTagActiveClassName =
    "rounded-full border border-[#C5A059]/50 bg-[#C5A059]/10 px-2.5 py-1 text-[10px] leading-none md:text-[11px]";

export const detailModuleTagInactiveClassName =
    "rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[10px] leading-none text-white/55 md:text-[11px]";
