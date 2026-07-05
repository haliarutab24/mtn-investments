import type { Metadata } from "next";
import { projectPlatforms } from "../data";
import { CtaBand, Footer, Header, PageHero } from "../components/site";
import { shell } from "../components/tokens";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects | MTN Investments",
  description:
    "MTN Investments project portfolio across FuzionOS, FuzionPay, MTN Capital, FuzionBlocks, e-invoicing, mining and inventory infrastructure.",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden bg-[#f5f8ff] text-[#182035]">
      <Header />
      <PageHero
        eyebrow="Market Solutions"
        title="Our Projects"
        copy="MTN Investments executes cross-border projects through country-specific SPVs while maintaining centralized governance, capital coordination, and platform control"
      />

      <section className="py-10 sm:py-12 lg:py-14">
        <div className={shell}>
          <ProjectsGrid platforms={projectPlatforms} />
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
