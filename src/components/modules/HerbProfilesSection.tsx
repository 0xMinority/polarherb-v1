import { herbNodes } from "../../data/herbs";
import SectionHeading from "../layout/SectionHeading";
import HerbProfileCard from "./HerbProfileCard";

export default function HerbProfilesSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] py-[180px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `
      radial-gradient(circle at top left, rgba(208,168,92,0.06), transparent 32%),
      linear-gradient(to bottom, rgba(255,255,255,0.015), transparent 22%)
    `,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1680px] px-10">
        <SectionHeading
          eyebrow="Herb Profiles"
          title="Commercialization intelligence profiles."
          description="Structured botanical intelligence surfaces combining altitude origin, biological activity, development readiness, and commercial signal density."
        />

        <div className="relative mt-28 grid grid-cols-1 gap-[1px] bg-white/[0.05] shadow-[0_40px_140px_rgba(0,0,0,0.24)] md:grid-cols-2 xl:grid-cols-4">
          {herbNodes.map((herb) => (
            <HerbProfileCard key={herb.id} herb={herb} />
          ))}
        </div>
      </div>
    </section>
  );
}