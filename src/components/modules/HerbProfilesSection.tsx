import { herbNodes } from "../../data/herbs";
import HerbProfileCard from "./HerbProfileCard";

const filterLabels = ["Randomize", "Altitude", "Function", "Format", "Sort by"];

export default function HerbProfilesSection() {
  return (
    <section className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#071016]/94 shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/[0.05] px-5 py-5 md:px-6 md:py-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-[#D0A85C]/80" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22C12 22 5 16.5 5 10.5C5 7.46 7.46 5 10.5 5C12.04 5 13.5 5.76 14.5 7C15.5 5.76 16.96 5 18.5 5C21.54 5 24 7.46 24 10.5" transform="translate(-3 -1)" />
              <path d="M12 22V12" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-[0.28em] text-[#F3F1EA]">
              Herb Profiles
            </h2>
            <p className="mt-2 max-w-[520px] text-[12px] leading-relaxed text-[#D7DCE2]/55">
              Curated high altitude herbs and their core functional potential.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {filterLabels.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`flex items-center gap-1.5 rounded-full border border-white/[0.08] px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                i === 0
                  ? "bg-[#D0A85C]/12 text-[#D0A85C]"
                  : "bg-[#040B11]/40 text-[#D7DCE2]/55 hover:border-white/[0.12] hover:text-[#D7DCE2]/75"
              }`}
            >
              {label}
              {i > 0 && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M6 9L12 15L18 9" strokeLinecap="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-5 md:py-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {herbNodes.map((herb, index) => (
            <HerbProfileCard key={herb.id} herb={herb} index={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center border-t border-white/[0.04] py-3 text-[#D7DCE2]/30">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 9L12 15L18 9" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
