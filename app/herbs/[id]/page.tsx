import { SectionCard } from "../../../src/components/herb-detail/SectionCard";
import { SidebarNav } from "../../../src/components/herb-detail/SidebarNav";
import { HeroPanel } from "../../../src/components/herb-detail/HeroPanel";
import { notFound } from "next/navigation";
import { herbNodes } from "../../../src/data/herbs";

const profileSections = [
  "Origin Signal",
  "Bioactive Mechanism",
  "Commercial Readiness",
  "Regulatory Outlook",
  "Evidence Layer",
];

interface HerbDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function HerbDetailPage({ params }: HerbDetailPageProps) {
  const { id } = await params;

  const herb = herbNodes.find((item) => item.id === id);

  if (!herb) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040B11] text-[#F3F1EA]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[160px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent)]" />
      </div>
      <HeroPanel herb={herb} />

      <section className="relative z-10 mx-auto grid max-w-[1540px] grid-cols-1 gap-[1px] bg-white/[0.05] px-8 pb-[140px] lg:grid-cols-[360px_1fr]">
        <SidebarNav sections={profileSections} domain={herb.domain} />

        <div className="space-y-[1px]">
          {profileSections.map((title, index) => (
            <SectionCard
              key={title}
              index={index}
              title={title}
              herb={herb}
            />
          ))}
        </div>
      </section>
    </main>
  );
}