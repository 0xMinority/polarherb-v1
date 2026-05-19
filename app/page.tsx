import PageContainer from "../src/components/layout/PageContainer";
import SectionHeading from "../src/components/layout/SectionHeading";
import ModuleSurface from "../src/components/ui/ModuleSurface";
import AtlasMapShell from "../src/components/map/AtlasMapShell";

export default function Home() {
  return (
    <main className="bg-[#040B11] text-[#F3F1EA]">
      <section className="relative min-h-screen pt-[120px] pb-[80px]">
        <PageContainer>
          <div className="w-full">
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
    </main>
  );
}