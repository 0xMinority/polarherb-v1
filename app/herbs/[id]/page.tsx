import DashboardHeader from "../../../src/components/layout/DashboardHeader";
import { dashboardHeaderLayout } from "../../../src/components/layout/dashboard-header-layout";
import { SectionCard } from "../../../src/components/herb-detail/SectionCard";
import { SidebarNav } from "../../../src/components/herb-detail/SidebarNav";
import { FormulationReadiness } from "../../../src/components/herb-detail/FormulationReadiness";
import { RegulatoryStatus } from "../../../src/components/herb-detail/RegulatoryStatus";
import { EvidenceLevel } from "../../../src/components/herb-detail/EvidenceLevel";
import { SynergyNetwork } from "../../../src/components/herb-detail/SynergyNetwork";
import { ComparativeMatchup } from "../../../src/components/herb-detail/ComparativeMatchup";
import { BioactiveIntelligence } from "../../../src/components/herb-detail/BioactiveIntelligence";
import { OriginNarratives } from "../../../src/components/herb-detail/OriginNarratives";
import { ProductSnapshots } from "../../../src/components/herb-detail/ProductSnapshots";
import { HeroPanel } from "../../../src/components/herb-detail/HeroPanel";
import { notFound } from "next/navigation";
import { herbNodes } from "../../../src/data/herbs";
import { getHerbDetailBySlug } from "../../../src/data/herb-details";
import { herbProfileSections } from "../../../src/config/herb-sections";

export function generateStaticParams() {
  return herbNodes.map((herb) => ({
    id: herb.id,
  }));
}

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
    <div className="relative min-h-screen overflow-hidden bg-black text-[#F3F1EA]">
      <DashboardHeader />

      <main className="relative" style={{ paddingTop: dashboardHeaderLayout.offsetTop }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[180px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.018),transparent)]" />
          <div className="absolute left-1/2 top-[760px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-[#D0A85C]/[0.035] blur-[160px]" />
        </div>

        <HeroPanel herb={herb} detail={detail} />

        <ProductSnapshots productSnapshots={detail.productSnapshots} />

        <OriginNarratives originNarratives={detail.originNarratives} />

        <BioactiveIntelligence bioactiveIntelligence={detail.bioactiveIntelligence} />

        <ComparativeMatchup comparativeMatchup={detail.comparativeMatchup} />

        <SynergyNetwork synergyNetwork={detail.synergyNetwork} />

        <FormulationReadiness formulationReadiness={detail.formulationReadiness} />

        <RegulatoryStatus regulatoryStatus={detail.regulatoryStatus} />

        <EvidenceLevel evidenceLevel={detail.evidenceLevel} />

        <section className="relative z-10 mx-auto grid max-w-[1680px] grid-cols-1 gap-[1px] bg-white/[0.05] px-5 pb-[110px] md:px-8 md:pb-[140px] xl:px-10 xl:pb-[180px] lg:grid-cols-[320px_1fr] 2xl:grid-cols-[380px_1fr]">
          <SidebarNav sections={herbProfileSections} domain={herb.domain} />

          <div className="space-y-[1px]">
            {herbProfileSections.map((section, index) => (
              <SectionCard
                key={section}
                index={index}
                title={section}
                herb={herb}
                detail={detail}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}