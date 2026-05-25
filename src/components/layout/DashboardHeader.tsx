"use client";

import Image from "next/image";
import Link from "next/link";
const SEARCH_BG = "#0D1117";
const SEARCH_BORDER = "#1B222C";
const GOLD = "#B09B6A";
const GOLD_BUTTON_TEXT = "#0A0A0A";

export default function DashboardHeader() {
    return (
        <header className="absolute left-[32px] right-[32px] top-[32px] z-50 grid h-[48px] grid-cols-[auto_minmax(180px,720px)_auto] items-center gap-4 md:left-[76px] md:right-[76px] md:gap-5 xl:left-[84px] xl:right-[84px] xl:gap-8">
            <Link href="/" className="relative block h-[24px] w-[124px] shrink-0 md:h-[30px] md:w-[156px] xl:h-[34px] xl:w-[178px]">
                <Image
                    src="/logo.png"
                    alt="Polar Herb Atlas"
                    fill
                    priority
                    className="object-contain object-left"
                    sizes="(min-width: 1280px) 178px, (min-width: 768px) 156px, 124px"
                />
            </Link>

            <label className="relative w-full min-w-[180px] justify-self-center">
                <span className="sr-only">Search herbs</span>
                <input
                    type="search"
                    placeholder="Search herb, function, compound or keyword..."
                    className="h-[42px] w-full rounded-full border px-6 pr-12 text-[14px] outline-none transition-colors placeholder:text-[#8D9299] focus:border-[#B09B6A]/50"
                    style={{
                        backgroundColor: SEARCH_BG,
                        borderColor: SEARCH_BORDER,
                        color: "#E5E7EB",
                    }}
                />
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2" style={{ color: GOLD }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20L16.5 16.5" strokeLinecap="round" />
                    </svg>
                </span>
            </label>

            <div className="flex shrink-0 items-center justify-self-end gap-2 md:gap-3 xl:gap-5">
                <button
                    type="button"
                    className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full px-0 text-[12px] font-medium transition-opacity hover:opacity-90 md:w-auto md:px-4 xl:px-6 xl:text-[14px]"
                    style={{ backgroundColor: GOLD, color: GOLD_BUTTON_TEXT }}
                >
                    <span className="hidden lg:inline">Developer Dashboard</span>
                    <span className="hidden md:inline lg:hidden">Dev</span>
                    <span className="md:hidden">D</span>
                </button>

                <button
                    type="button"
                    className="inline-flex h-[42px] shrink-0 items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 xl:gap-3 xl:pl-2.5 xl:pr-4"
                    style={{
                        backgroundColor: SEARCH_BG,
                        borderColor: SEARCH_BORDER,
                    }}
                >
                    <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: "#1A2530" }}
                        aria-hidden
                    />
                    <span className="hidden text-[13px] lg:inline xl:text-[14px]" style={{ color: "#D1D5DB" }}>
                        irvingou3
                    </span>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        className="text-[#9CA3AF]"
                        aria-hidden
                    >
                        <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
