import { herbNodes } from "../../data/herbs";
import SectionHeading from "../layout/SectionHeading";
import HerbProfileCard from "./HerbProfileCard";

export default function HerbProfilesSection() {
  return (
    <section className="relative border-t border-white/[0.04] py-[140px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_22%)] pointer-events-none" />
      <div className="mx-auto max-w-[1540px] px-8">
        <SectionHeading
          eyebrow="Herb Profiles"
          title="Commercialization intelligence profiles."
          description="Structured botanical intelligence surfaces combining altitude origin, biological activity, development readiness, and commercial signal density."
        />

        <div className="relative mt-24 grid grid-cols-1 gap-[1px] bg-white/[0.04] md:grid-cols-2 xl:grid-cols-4">
          {herbNodes.map((herb) => (
            <HerbProfileCard key={herb.id} herb={herb} />
          ))}
        </div>
      </div>
    </section>
  );
}