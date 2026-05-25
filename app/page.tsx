import DashboardHeader from "../src/components/layout/DashboardHeader";
import { dashboardHeaderLayout } from "../src/components/layout/dashboard-header-layout";
import AtlasMapShell from "../src/components/map/AtlasMapShell";
import HerbProfilesSection from "../src/components/modules/HerbProfilesSection";
import DiscoverPanel from "../src/components/modules/DiscoverPanel";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-[#F3F1EA]">
      <DashboardHeader />

      <main
        className="mx-auto flex min-h-screen max-w-[1680px] flex-col px-5 pb-8 md:px-8 md:pb-10 xl:px-10"
        style={{ paddingTop: dashboardHeaderLayout.offsetTop + 16 }}
      >
        <section className="min-h-0 flex-1 overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#071016]/94 shadow-[0_50px_160px_rgba(0,0,0,0.34)]">
          <AtlasMapShell />
        </section>

        <section className="mt-4 grid shrink-0 grid-cols-1 gap-4 lg:mt-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,1fr)] lg:gap-5">
          <HerbProfilesSection />
          <DiscoverPanel />
        </section>
      </main>
    </div>
  );
}
