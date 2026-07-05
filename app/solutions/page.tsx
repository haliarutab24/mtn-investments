import type { Metadata } from "next";
import type { ReactNode } from "react";
import { solutionRows } from "../data";
import { CtaBand, Footer, Header, SectionLabel } from "../components/site";

export const metadata: Metadata = {
  title: "Solutions | MTN Investments",
  description:
    "Six MTN Investments market solutions across tokenization, exchange infrastructure, wallets, settlement and sovereign blockchain networks.",
};

type SolutionRow = (typeof solutionRows)[number];

function FeatureChip({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <li className="flex min-h-[40.6px] items-start gap-2 rounded-[10px] border border-[#003087]/10 bg-white px-[12.8px] py-[12.8px] shadow-[0_8px_18px_rgba(0,48,135,0.03)]">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
      <span className="text-xs leading-[15px] text-[#5e7099]">{children}</span>
    </li>
  );
}

function SolutionBlock({ row, index }: { row: SolutionRow; index: number }) {
  const textFirst = row.textSide === "left";
  const accent = index % 2 === 0 ? "#003087" : "#0073e6";

  return (
    <article className="grid min-h-[168px] gap-8 border-b border-[#003087]/10 pb-[30px] last:min-h-[234px] lg:grid-cols-2 lg:gap-x-10">
      <div className={textFirst ? "lg:order-1" : "lg:order-2"}>
        <p className="font-mono text-xs leading-4 text-[#5e7099]">{row.number}</p>
        <h2 className="font-serif text-xl font-bold leading-7 text-[#0a1428]">{row.title}</h2>
        <p className="mt-5 max-w-[552px] text-sm leading-[22.75px] text-[#5e7099]">{row.copy}</p>
      </div>

      <ul className={`${textFirst ? "lg:order-2" : "lg:order-1"} grid gap-2 sm:grid-cols-2`}>
        {row.features.map((feature) => (
          <FeatureChip accent={accent} key={feature}>
            {feature}
          </FeatureChip>
        ))}
      </ul>
    </article>
  );
}

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-[#f5f8ff] text-[#0a1428]">
      <Header />

      <section className="flex min-h-[300px] items-center bg-[#004aad] px-4 py-14 text-center text-white sm:px-6">
        <div className="mx-auto w-full max-w-[1190px] motion-safe:animate-[fadeUp_.7s_ease-out_both]">
          <SectionLabel light centered>
            Market Solutions
          </SectionLabel>
          <h1 className="mt-5 break-words font-serif text-[34px] font-bold leading-tight [overflow-wrap:anywhere] sm:text-[54px] sm:leading-none lg:text-[60px]">
            <span>Six Solutions. </span>
            <span className="bg-[linear-gradient(168.58deg,#93c5fd_0%,#bfdbfe_100%)] bg-clip-text text-transparent">
              One Stack.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[972px] text-sm leading-6 text-white/65 sm:text-base lg:text-lg lg:leading-7">
            MTN Investments executes cross-border projects through country-specific SPVs while maintaining centralized governance, capital coordination, and platform control
          </p>
        </div>
      </section>

      <section className="bg-[#f5f8ff]">
        <div className="mx-auto flex w-full max-w-[1190px] flex-col gap-12 px-4 py-14 sm:px-6 lg:py-16">
          {solutionRows.map((row, index) => (
            <SolutionBlock index={index} row={row} key={row.number} />
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
