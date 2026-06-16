import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { BrandSidebar, MobileTopBar } from "@/components/brand/Sidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { ColorSection } from "@/components/sections/ColorSection";
import { TypographySection } from "@/components/sections/TypographySection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { IconographySection } from "@/components/sections/IconographySection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MantraCare — Brand Guidelines" },
      { name: "description", content: "The official MantraCare brand system: logo, color, typography, photography and assets for trusted healthcare communication." },
      { property: "og:title", content: "MantraCare — Brand Guidelines" },
      { property: "og:description", content: "Building healthier lives through accessible care. The official MantraCare brand system." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Floating background shapes */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-lightblue/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-action/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-softblue/20 blur-3xl" />
      </div>

      <BrandSidebar />
      <MobileTopBar />

      <a
        href="#download"
        className="hidden lg:inline-flex fixed top-6 right-6 z-40 items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary hover:shadow-premium transition"
      >
        <Download className="size-3.5" />
        Brand assets
      </a>

      <main className="lg:pl-72">
        <div className="mx-auto max-w-6xl px-6 lg:px-14">
          <HeroSection />
          <OverviewSection />
          <LogoSection />
          <ColorSection />
          <TypographySection />
          <PhotographySection />
          <IconographySection />
          <DownloadSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
