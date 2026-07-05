import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartColumn,
  Database,
  FileCheck,
  Globe2,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { capabilities, marketRails, metrics, stackLayers } from "./data";
import { ButtonLink, CtaBand, Footer, Header, SectionHeader, SectionLabel } from "./components/site";
import { shell } from "./components/tokens";

const regulatedCards = [
  { title: "Commercial Banks", icon: Landmark, copy: "Regulated settlement rails, digital asset custody and tokenized fund infrastructure." },
  {
    title: "Governments & Central Banks",
    icon: Globe2,
    copy: "Sovereign blockchain networks, CBDC infrastructure and public-sector asset registries.",
  },
  { title: "Fund Managers", icon: ChartColumn, copy: "Tokenized fund issuance, investor onboarding, NAV management and secondary liquidity." },
  { title: "Licensed Exchanges", icon: TrendingUp, copy: "Full CEX stack with matching engine, custody, compliance and market operations." },
  {
    title: "Asset Owners & REITs",
    icon: Building2,
    copy: "Real estate and commodity tokenization, primary issuance and investor distribution.",
  },
  {
    title: "Regulated Market Operators",
    icon: BriefcaseBusiness,
    copy: "Infrastructure for jurisdiction-specific digital asset market operations.",
  },
] as const;

const securityCards = [
  { title: "MPC Wallet Architecture", icon: LockKeyhole, copy: "Multi-party computation eliminates single points of failure across all custody flows." },
  { title: "HD Wallet Structure", icon: Database, copy: "Hierarchical deterministic wallets for scalable, auditable account management at institutional scale." },
  { title: "Smart Contract Layer", icon: Zap, copy: "Audited smart contracts govern tokenization, settlement, escrow and compliance workflows." },
  { title: "KYC / AML Controls", icon: FileCheck, copy: "Sanctions screening, PEP checks, source-of-funds verification and admin approval workflows." },
  { title: "Admin Approval Flows", icon: ShieldCheck, copy: "Every token issuance and withdrawal requires multi-layer admin approval before execution." },
  { title: "Jurisdiction-Specific Deployment", icon: Globe2, copy: "Each deployment is structured for the applicable legal jurisdiction and regulatory framework." },
] as const;

const globalMarkets = [
  ["Asia Pacific", "UAE-regulated deployments, digital asset licensing, RWA platforms", ["Singapore", "Hong Kong", "Jakarta", "Tokyo"]],
  ["Middle East", "Sovereign wealth funds, Islamic finance tokenization, CEX licensing", ["Dubai", "ADGM", "Abu Dhabi", "Bahrain", "Riyadh"]],
  ["Africa", "Emerging-market infrastructure, payment corridors, commodity tokenization", ["Johannesburg", "Nairobi", "Lagos", "Cairo"]],
  ["International", "Regulated fund structures, institutional custody, cross-border settlement", ["London", "New York", "Geneva", "Luxembourg"]],
] as const;

const researchItems = [
  ["Infrastructure", "The Case for Sovereign Blockchain Deployments in Emerging Markets", "June 21, 2026"],
  ["Tokenization", "RWA Tokenization: Why Real Estate Is Leading the Institutional Wave", "June 18, 2026"],
  ["Compliance", "Navigating Digital Asset Licensing Across DIFC, MAS and ADGM", "June 10, 2026"],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#182035]">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#004aad] px-4 py-14 text-white sm:px-6 sm:py-16 lg:py-20">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/cta-rails.png"
          aria-hidden="true"
        >
          <source src="/cta-video.mp4?v=20260705" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] bg-[#004aad]/58" />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(0,43,122,0.82),rgba(0,74,173,0.68)_48%,rgba(0,74,173,0.48))]" />
        <div className={`${shell} relative z-10 motion-safe:animate-[fadeUp_.7s_ease-out_both]`}>
          <div className="max-w-[830px]">
            <h1 className="max-w-full break-words font-serif text-[30px] font-bold leading-[1.05] [overflow-wrap:anywhere] sm:max-w-[min(830px,calc(100vw-32px))] sm:text-[56px] lg:text-[64px]">
              Building the Future Rails of Digital Investments
            </h1>
            <p className="mt-8 max-w-full text-[13px] leading-6 text-white/70 sm:max-w-[min(780px,calc(100vw-32px))] sm:text-base">
              MTN Investments is a global digital asset infrastructure holding company, enabling tokenization,
              wallet-based settlement, exchange operations and EVM-powered blockchain infrastructure for institutions,
              governments and asset owners worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/solutions" tone="light">
                Explore Our Ecosystem <ArrowRight size={14} aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" tone="outline">
                Request Institutional Demo
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[10px] border border-white/25 bg-[#004aad]/20 backdrop-blur-[2px] sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div className="border-b border-white/20 p-5 last:border-b-0 sm:border-r lg:border-b-0" key={metric.label}>
                <strong className="font-serif text-3xl font-bold text-white">{metric.value}</strong>
                <p className="mt-2 text-xs font-bold text-white/85">{metric.label}</p>
                <p className="mt-1 text-[11px] text-white/42">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Digital Asset Infrastructure Stack"
            title="One Parent. Three Integrated Layers."
            copy="MTN Investments owns and commercialises an end-to-end stack for digital asset infrastructure, from blockchain rails to investment marketplaces."
          />

          <div className="mx-auto mt-8 grid w-[min(310px,calc(100vw-32px))] gap-1 rounded-[10px] bg-[#004aad] px-8 py-5 text-center text-white shadow-[0_18px_38px_rgba(0,74,173,0.28)]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[1.4px] text-white/50">
              Parent Holding Company
            </span>
            <strong className="font-serif text-[22px] font-bold uppercase tracking-[1px]">MTN Investments</strong>
          </div>
          <div className="mx-auto h-16 w-px bg-[#dce5f3]" />

          <div className="grid gap-5 lg:grid-cols-3">
            {stackLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  className="rounded-[10px] border border-[#dce5f3] bg-white p-6 shadow-[0_12px_28px_rgba(0,48,135,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,48,135,0.12)]"
                  key={layer.title}
                >
                  <div className="inline-flex items-center gap-2 rounded-[7px] bg-[#eaf2ff] px-3 py-1.5 text-[11px] font-bold text-[#004aad]">
                    <Icon size={15} aria-hidden /> {layer.eyebrow}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-[#004aad]">{layer.title}</h3>
                  <ul className="mt-4 grid gap-2">
                    {layer.items.map((item) => (
                      <li className="flex items-center gap-2 text-xs text-[#5e7099]" key={item}>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#004aad]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/solutions" tone="ghost">
              Explore Full Ecosystem <ArrowRight size={14} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8ff] py-16 lg:py-20">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Market Solutions"
            title="What We Enable"
            copy="Six institutional-grade market solutions powered by an integrated infrastructure stack."
          />

          <div className="mx-auto mt-10 grid max-w-[1120px] gap-8 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  className="min-h-[290px] rounded-[12px] border border-[#dce5f3] bg-white p-6 shadow-[0_12px_30px_rgba(0,48,135,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#004aad]/25 hover:shadow-[0_18px_44px_rgba(0,48,135,0.12)]"
                  key={capability.title}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-[#cfe0f7] bg-[#eaf2ff] text-[#0a55c7]">
                    <Icon size={18} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-base font-extrabold text-[#182035]">{capability.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#5e7099]">{capability.copy}</p>
                  <div className="mt-6 h-px bg-[#dce5f3]" />
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#0a55c7]">
                      {capability.tags.join(" - ")}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-9 flex justify-center">
            <ButtonLink href="/solutions">
              View All Solutions <ArrowRight size={14} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#004aad] py-16 text-white lg:py-20">
        <div className={`${shell} grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:items-center`}>
          <div className="min-w-0">
            <SectionHeader
              light
              eyebrow="Built For Institutions"
              title="Infrastructure for the World's Most Regulated Financial Actors"
              copy="MTN Investments is built exclusively for institutional counterparties, organisations requiring enterprise-grade infrastructure, regulatory compliance and sovereign-level security controls."
            />
            <ul className="mt-7 grid gap-2 text-sm text-white/75">
              {[
                "Institutional-grade MPC security architecture",
                "Jurisdiction-specific deployment across 18+ markets",
                "White-label and private-label infrastructure available",
                "Dedicated compliance and legal structuring support",
              ].map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <BadgeCheck size={16} className="text-[#93c5fd]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {regulatedCards.map((card) => {
              const Icon = card.icon;

              return (
              <article className="min-h-[150px] rounded-[12px] border border-white/10 bg-white/[0.10] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.14]" key={card.title}>
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/10 text-[#93c5fd]">
                  <Icon size={16} aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-bold">{card.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/58">{card.copy}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Security & Compliance"
            title="Compliance & Security"
            copy="Every layer of MTN Investments infrastructure is built for institutional-grade security and regulatory compliance."
          />
          <div className="mx-auto mt-10 grid max-w-[1120px] gap-8 md:grid-cols-2 xl:grid-cols-3">
            {securityCards.map((card) => {
              const Icon = card.icon;

              return (
              <article className="min-h-[205px] rounded-[12px] border border-[#dce5f3] bg-white p-7 shadow-[0_10px_28px_rgba(0,48,135,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,48,135,0.10)]" key={card.title}>
                <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-[#cfe0f7] bg-[#eaf2ff] text-[#0a55c7]">
                  <Icon size={17} aria-hidden />
                </span>
                <h3 className="mt-6 text-sm font-extrabold text-[#182035]">{card.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#5e7099]">{card.copy}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8ff] py-16 lg:py-20">
        <div className={shell}>
          <SectionHeader
            centered
            eyebrow="Global Markets"
            title="Connecting Capital Across Markets"
            copy="From Singapore to Nairobi, from Dubai to London, MTN Investments targets high-growth jurisdictions where digital infrastructure creates meaningful financial impact."
          />
          <div className="mx-auto mt-10 grid max-w-[1120px] gap-6 lg:grid-cols-2">
            {globalMarkets.map(([region, copy, cities]) => (
              <article className="rounded-[12px] border border-[#dce5f3] bg-white p-6 shadow-[0_12px_30px_rgba(0,48,135,0.05)]" key={region}>
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#cfe0f7] bg-[#eaf2ff] text-[#0a55c7]">
                    <Globe2 size={18} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-[#182035]">{region}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#5e7099]">{copy}</p>
                  </div>
                </div>
                <div className="mt-5 h-px bg-[#dce5f3]" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span className="rounded-full border border-[#cfe0f7] bg-[#f5f8ff] px-3 py-1 text-[11px] font-bold text-[#0a55c7]" key={city}>
                      {city}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-[1120px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketRails.map((rail) => (
              <article className="rounded-[12px] bg-white p-6 text-center shadow-[0_12px_30px_rgba(0,48,135,0.05)]" key={rail.value}>
                <strong className="font-serif text-3xl font-bold text-[#004aad]">{rail.value}</strong>
                <p className="mt-2 text-[12px] font-extrabold leading-4 text-[#182035]">{rail.label}</p>
                <p className="mt-1 text-[11px] text-[#5e7099]">{rail.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className={shell}>
          <SectionLabel>Intelligence & Insights</SectionLabel>
          <h2 className="font-serif text-2xl font-bold text-[#182035] sm:text-3xl">From the MTN Research Desk</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {researchItems.map(([tag, title, date]) => (
              <Link
                href="/contact"
                className="rounded-[10px] border border-[#dce5f3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#004aad]/25 hover:shadow-[0_18px_40px_rgba(0,48,135,0.10)]"
                key={title}
              >
                <span className="font-mono text-[10px] font-bold uppercase text-[#4f83c4]">{tag}</span>
                <h3 className="mt-4 text-sm font-extrabold leading-5 text-[#182035]">{title}</h3>
                <p className="mt-3 text-[11px] text-[#5e7099]">{date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
