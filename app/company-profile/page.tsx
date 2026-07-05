import type { Metadata } from "next";
import { companyProfiles } from "../data";
import { CtaBand, Footer, Header, PageHero, SectionHeader } from "../components/site";
import { shell } from "../components/tokens";

export const metadata: Metadata = {
  title: "Company Profile | MTN Investments",
  description:
    "MTN Investments company profile across international project financing, trade finance, strategic investments and digital infrastructure.",
};

export default function CompanyProfilePage() {
  return (
    <main className="overflow-hidden bg-[#f5f8ff] text-[#182035]">
      <Header />
      <PageHero
        eyebrow="Company Profile"
        title="MTN Investments"
        copy="International Project Financing | Trade Finance | Strategic Investments | Digital Infrastructure"
      />

      <section className="bg-[#f5f8ff] py-14 lg:py-16">
        <div className={shell}>
          <SectionHeader centered eyebrow="Portfolio Structure" title="An anchored portfolio of operating entities" />

          <div className="mx-auto mt-10 grid max-w-[1040px] gap-5 md:grid-cols-2 xl:grid-cols-3">
            {companyProfiles.slice(0, 3).map((company, index) => (
              <article
                className="min-h-[154px] rounded-[10px] border border-[#dce5f3] bg-white p-6 shadow-[0_12px_30px_rgba(0,48,135,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,48,135,0.11)]"
                key={company.name}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#fff7e6] text-[10px] font-bold text-[#c78300]">
                  {index + 1}
                </span>
                <h2 className="mt-5 text-sm font-extrabold text-[#182035]">{company.name}</h2>
                <p className="mt-2 text-xs leading-5 text-[#5e7099]">{company.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-5 grid max-w-[760px] gap-5 md:grid-cols-2">
            {companyProfiles.slice(3).map((company, index) => (
              <article
                className="min-h-[154px] rounded-[10px] border border-[#dce5f3] bg-white p-6 shadow-[0_12px_30px_rgba(0,48,135,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,48,135,0.11)]"
                key={company.name}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#eaf2ff] text-[10px] font-bold text-[#004aad]">
                  {index + 4}
                </span>
                <h2 className="mt-5 text-sm font-extrabold text-[#182035]">{company.name}</h2>
                <p className="mt-2 text-xs leading-5 text-[#5e7099]">{company.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
