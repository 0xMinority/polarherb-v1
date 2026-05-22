import PageContainer from "../src/components/layout/PageContainer";
import SectionHeading from "../src/components/layout/SectionHeading";
import ModuleSurface from "../src/components/ui/ModuleSurface";
import AtlasMapShell from "../src/components/map/AtlasMapShell";
import HerbProfilesSection from "../src/components/modules/HerbProfilesSection";

export default function Home() {
  return (
    <main className="bg-[#040B11] text-[#F3F1EA]">
      <section className="relative min-h-screen overflow-hidden pt-[140px] pb-[120px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background: `
      radial-gradient(circle at top center, rgba(208,168,92,0.10), transparent 26%),
      radial-gradient(circle at 20% 30%, rgba(90,120,160,0.10), transparent 34%),
      linear-gradient(to bottom, #050D14 0%, #040B11 52%, #03070B 100%)
    `,
          }}
        />
        <PageContainer>
          <div className="relative z-10 w-full">
            <div className="pointer-events-none absolute left-1/2 top-[120px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#D0A85C]/[0.04] blur-[140px]" />
            <SectionHeading
              eyebrow="PolarHerb Intelligence Interface"
              title="High-altitude botanical commercialization intelligence."
              description="An institutional interface for mapping rare alpine herbs, evidence signals, commercialization readiness, and biological potential."
            />
            <div className="mt-20">
              <ModuleSurface>
                <AtlasMapShell />
              </ModuleSurface>
            </div>
          </div>
        </PageContainer>
      </section>
      <HerbProfilesSection />
    </main>
  );
}