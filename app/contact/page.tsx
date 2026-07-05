import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components/site";
import { shell } from "../components/tokens";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | MTN Investments",
  description: "Contact MTN Investments for partnerships, demos and institutional digital asset infrastructure inquiries.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f5f8ff] text-[#182035]">
      <Header />
      <PageHero
        eyebrow="Get In Touch"
        title="Build the Next Era With Us"
        copy="MTN Investments accepts enquiries from institutional counterparties only."
      />

      <section className="bg-[#f5f8ff] py-12 sm:py-14 lg:py-16">
        <div className={`${shell} max-w-[1040px]`}>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
