import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactTracks } from "../data";
import { Footer, Header, PageHero, SectionLabel, shell } from "../components/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | MTN Investments",
  description: "Contact MTN Investments for partnerships, demos and institutional digital asset infrastructure inquiries.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-[#071327]">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Talk to MTN Investments."
        copy="For partnerships, demos and institutional infrastructure inquiries, send a short note and our team will route it to the right track."
      />

      <section className="bg-[#f4f8fd]">
        <div className={`${shell} grid gap-8 py-16 lg:grid-cols-[0.78fr_1fr] lg:py-20`}>
          <div className="rounded-lg bg-[#001d55] p-6 text-white shadow-[0_18px_50px_rgba(0,48,135,0.14)] sm:p-8">
            <SectionLabel light>Institutional Desk</SectionLabel>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Start with one message.</h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Tell us what you want to build. Keep it simple: asset type, market, timeline and the kind of
              infrastructure you need.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <Mail className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">info@mtninvestments.net</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <MapPin className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">Singapore Pte Ltd</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4">
                <Phone className="text-[#9bdff0]" size={19} aria-hidden />
                <span className="text-sm text-white/82">Demo and partnership requests</span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-mono text-xs font-extrabold uppercase text-white/55">Common Tracks</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {contactTracks.map((track) => (
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75" key={track}>
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
