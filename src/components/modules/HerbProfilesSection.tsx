import { herbNodes } from "../../data/herbs";
import SectionHeading from "../layout/SectionHeading";
import HerbProfileCard from "./HerbProfileCard";

export default function HerbProfilesSection() {
  return (
    <section className="py-[120px]">
      <SectionHeading
        eyebrow="Herb Profiles"
        title="Commercial intelligence profiles for high-altitude botanicals."
        description="Each profile converts altitude origin, biological power, functional domain, and readiness into a structured commercialization signal."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {herbNodes.map((herb) => (
          <HerbProfileCard key={herb.id} herb={herb} />
        ))}
      </div>
    </section>
  );
}