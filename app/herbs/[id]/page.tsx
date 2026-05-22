import { SectionCard } from "../../../src/components/herb-detail/SectionCard";
import { SidebarNav } from "../../../src/components/herb-detail/SidebarNav";
import { HeroPanel } from "../../../src/components/herb-detail/HeroPanel";
import { notFound } from "next/navigation";
import { herbNodes } from "../../../src/data/herbs";
import { getHerbDetailBySlug } from "../../../src/data/herb-details";

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
  const detail = getHerbDetailBySlug(id);

  if (!herb || !detail) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040B11] text-[#F3F1EA]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[180px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent)]" />
        <div className="absolute left-1/2 top-[760px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[#D0A85C]/[0.035] blur-[160px]" />
      </div>
      <HeroPanel herb={herb} detail={detail} />

      <section className="relative z-10 mx-auto grid max-w-[1680px] grid-cols-1 gap-[1px] bg-white/[0.05] px-5 pb-[110px] md:px-8 md:pb-[140px] xl:px-10 xl:pb-[180px] lg:grid-cols-[320px_1fr] 2xl:grid-cols-[380px_1fr]">
        <SidebarNav sections={profileSections} domain={herb.domain} />

        <div className="space-y-[1px]">
          {profileSections.map((title, index) => (
            <SectionCard
              key={title}
              index={index}
              title={title}
              herb={herb}
              detail={detail}
            />
          ))}
        </div>
      </section>
    </main>
  );
}