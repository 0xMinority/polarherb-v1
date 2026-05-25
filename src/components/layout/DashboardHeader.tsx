"use client";

import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#040B11]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1680px] items-center gap-4 px-5 md:gap-6 md:px-8 xl:px-10">
        <Link href="/" className="shrink-0 leading-none">
          <div className="flex items-baseline gap-0.5 text-[15px] font-medium uppercase tracking-[0.22em]">
            <span className="text-[#F3F1EA]">Polar</span>
            <span className="text-[#7FAE8D]">Herb</span>
          </div>
          <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.34em] text-[#D0A85C]/88">
            Atlas
          </span>
        </Link>

        <div className="mx-auto hidden min-w-0 flex-1 md:block md:max-w-[560px] lg:max-w-[640px]">
          <label className="relative block">
            <span className="sr-only">Search herbs</span>
            <input
              type="search"
              placeholder="Search herb, function, compound or keyword..."
              className="h-11 w-full rounded-full border border-white/[0.08] bg-[#0A1219] px-5 pr-12 text-[13px] text-[#F3F1EA] placeholder:text-[#D7DCE2]/42 outline-none transition-colors focus:border-[#D0A85C]/35"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#D0A85C]/75">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.5 16.5" strokeLinecap="round" />
              </svg>
            </span>
          </label>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-3 md:gap-4">
          <button
            type="button"
            className="hidden rounded-full bg-[#D0A85C] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#040B11] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Developer Dashboard
          </button>

          <button
            type="button"
            className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#0A1219] py-1.5 pl-1.5 pr-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A2530] text-[10px] uppercase tracking-[0.12em] text-[#D7DCE2]/55">
              IO
            </span>
            <span className="hidden text-[12px] text-[#D7DCE2]/82 sm:inline">irvingou3</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="text-[#D7DCE2]/45"
              aria-hidden
            >
              <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-t border-white/[0.04] px-5 pb-3 md:hidden">
        <input
          type="search"
          placeholder="Search herb, function, compound or keyword..."
          className="h-10 w-full rounded-full border border-white/[0.08] bg-[#0A1219] px-4 text-[13px] text-[#F3F1EA] placeholder:text-[#D7DCE2]/42 outline-none"
        />
      </div>
    </header>
  );
}
