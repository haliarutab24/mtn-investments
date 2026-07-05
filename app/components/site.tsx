"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { navItems } from "../data";
import { shell } from "./tokens";

const buttonBase =
  "inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-[10px] px-5 py-2.5 text-[12px] font-bold leading-5 transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="MTN Investments home">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#003087] font-mono text-[10px] font-black text-white shadow-[0_8px_20px_rgba(0,48,135,0.20)]">
        MTN
      </span>
      <span className="grid min-w-0 uppercase">
        <span
          className={
            dark
              ? "truncate text-[11px] font-extrabold leading-3 tracking-[1.2px] text-white"
              : "truncate text-[11px] font-extrabold leading-3 tracking-[1.2px] text-[#071327]"
          }
        >
          MTN Investments
        </span>
        <span
          className={
            dark
              ? "truncate font-mono text-[8px] font-semibold leading-3 tracking-[1px] text-white/45"
              : "truncate font-mono text-[8px] font-semibold leading-3 tracking-[1px] text-[#5d6c87]"
          }
        >
          Global Infrastructure
        </span>
      </span>
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "light" | "outline" | "ghost";
}) {
  const tones = {
    primary:
      "bg-[#004aad] text-white shadow-[0_10px_24px_rgba(0,74,173,0.28)] focus-visible:outline-[#004aad]",
    light: "bg-white text-[#004aad] shadow-[0_10px_24px_rgba(0,48,135,0.18)] focus-visible:outline-white",
    outline:
      "border border-white/25 bg-white/[0.06] text-white hover:bg-white/12 focus-visible:outline-white",
    ghost:
      "border border-[#004aad]/18 bg-white text-[#004aad] shadow-[0_8px_20px_rgba(0,48,135,0.06)] focus-visible:outline-[#004aad]",
  };

  return (
    <Link href={href} className={`${buttonBase} ${tones[tone]}`}>
      {children}
    </Link>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#003087]/10 bg-[#f5f8ff]/95 text-[#0a1428] shadow-[0_8px_28px_rgba(0,48,135,0.08)] backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6">
        <div className="min-w-0 flex-1 lg:min-w-[248px] lg:flex-none">
          <Logo />
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                className={
                  active
                    ? "relative whitespace-nowrap rounded-[10px] bg-[#eaf2ff] px-3 py-2 text-[12px] font-bold leading-5 text-[#28547d] after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-[calc(100%-32px)] after:rounded-full after:bg-[#004aad]"
                    : "relative whitespace-nowrap rounded-[10px] px-3 py-2 text-[12px] font-semibold leading-5 text-[#5e7099] transition duration-300 after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-[calc(100%-32px)] after:rounded-full after:bg-[#004aad] after:opacity-0 hover:bg-[#eaf2ff] hover:text-[#004aad] hover:after:opacity-100"
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            className="inline-flex min-h-9 items-center whitespace-nowrap rounded-[10px] border border-[#004aad]/20 bg-white/40 px-4 text-[12px] font-bold text-[#004aad] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            href="/contact"
          >
            Request Demo
          </Link>
          <ButtonLink href="/contact">
            Partner With Us <ArrowRight size={13} strokeWidth={2.4} aria-hidden />
          </ButtonLink>
        </div>

        <details className="relative ml-auto shrink-0 lg:hidden">
          <summary className="grid h-10 w-10 cursor-pointer place-items-center rounded-[10px] border border-[#003087]/15 bg-white text-[#004aad] transition hover:bg-[#eaf2ff]">
            <span className="sr-only">Open menu</span>
            <Menu size={21} aria-hidden />
          </summary>
          <div className="absolute right-0 top-12 z-20 grid w-[min(300px,calc(100vw-32px))] gap-1 rounded-[10px] border border-[#003087]/10 bg-white p-3 shadow-[0_18px_50px_rgba(0,48,135,0.14)]">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={
                    active
                      ? "rounded-[8px] bg-[#eaf2ff] px-3 py-3 text-sm font-bold text-[#004aad]"
                      : "rounded-[8px] px-3 py-3 text-sm font-semibold text-[#5e7099] transition hover:bg-[#f5f8ff] hover:text-[#004aad]"
                  }
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/contact">
              Partner With Us <ArrowRight size={14} aria-hidden />
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SectionLabel({
  children,
  light = false,
  centered = false,
}: {
  children: ReactNode;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "mb-3 flex min-w-0 items-center justify-center gap-2 sm:gap-3"
          : "mb-3 flex min-w-0 items-center gap-2 sm:gap-3"
      }
    >
      <span className={light ? "h-px w-5 bg-white/20 sm:w-8" : "h-px w-5 bg-[#004aad]/22 sm:w-8"} />
      <p
        className={
          light
            ? "min-w-0 text-center font-mono text-[8px] font-bold uppercase leading-4 tracking-[1px] text-white/45 sm:text-[10px] sm:tracking-[1.6px]"
            : "min-w-0 text-center font-mono text-[8px] font-bold uppercase leading-4 tracking-[1px] text-[#0a55c7] sm:text-[10px] sm:tracking-[1.6px]"
        }
      >
        {children}
      </p>
      <span className={light ? "h-px w-5 bg-white/20 sm:w-8" : "h-px w-5 bg-[#004aad]/22 sm:w-8"} />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto max-w-[1120px] text-center" : "max-w-3xl"} min-w-0`}>
      <SectionLabel light={light} centered={centered}>
        {eyebrow}
      </SectionLabel>
      <h2
        className={
          light
            ? "break-words font-serif text-[30px] font-bold leading-[1.08] text-white [overflow-wrap:anywhere] sm:text-[44px] lg:text-[52px]"
            : "break-words font-serif text-[26px] font-bold leading-[1.12] text-[#182035] [overflow-wrap:anywhere] sm:text-[38px] lg:text-[44px]"
        }
      >
        {title}
      </h2>
      {copy && (
        <p
          className={
            light
              ? "mt-4 text-sm leading-6 text-white/65 sm:text-base"
              : "mt-4 text-sm leading-6 text-[#5e7099] sm:text-base"
          }
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="flex min-h-[240px] items-center bg-[#004aad] px-4 py-14 text-center text-white sm:min-h-[280px] sm:px-6 lg:min-h-[300px]">
      <div className="mx-auto w-full max-w-[1190px] motion-safe:animate-[fadeUp_.7s_ease-out_both]">
        <SectionLabel light centered>
          {eyebrow}
        </SectionLabel>
        <h1 className="mx-auto max-w-4xl break-words font-serif text-[34px] font-bold leading-[1.04] [overflow-wrap:anywhere] sm:text-[52px] lg:text-[60px]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[972px] text-sm leading-6 text-white/65 sm:text-base lg:text-lg lg:leading-7">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#004aad] px-4 py-20 text-center text-white sm:px-6 lg:py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(180deg,#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="mx-auto max-w-[1190px] motion-safe:animate-[fadeUp_.7s_ease-out_both]">
        <SectionLabel light centered>
          Partner With MTN Investments
        </SectionLabel>
        <h2 className="break-words font-serif text-[32px] font-bold leading-[1.08] [overflow-wrap:anywhere] sm:text-[50px] lg:text-[60px]">
          Ready to Build on the Future Rails?
        </h2>
        <p className="mx-auto mt-5 max-w-[1120px] text-sm leading-6 text-white/68 sm:text-base lg:text-lg lg:leading-7">
          Whether you are tokenizing real estate, deploying a licensed exchange, building a sovereign blockchain network or launching a digital asset fund, MTN Investments provides the infrastructure, compliance architecture and global expertise.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" tone="light">
            Partner With MTN Investments <ArrowRight size={14} aria-hidden />
          </ButtonLink>
          <ButtonLink href="/contact" tone="outline">
            Request an Institutional Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#001d55] text-white">
      <div className={`${shell} grid gap-10 py-12 sm:grid-cols-[1.2fr_2fr] lg:py-14`}>
        <div className="max-w-sm">
          <Logo dark />
          <p className="mt-5 text-sm leading-6 text-white/45">
            Connecting tokenization, settlement and blockchain infrastructure across dynamic markets.
          </p>
          <div className="mt-5 grid gap-2">
            <span className="flex items-center gap-2 text-xs text-white/45">
              <MapPin size={14} aria-hidden /> Singapore Pte Ltd
            </span>
            <Link className="flex items-center gap-2 text-xs text-white/45 transition hover:text-white/80" href="/contact">
              <Mail size={14} aria-hidden /> mtninvestments.net
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Platforms",
              links: [
                { label: "FuzionOS", href: "/projects" },
                { label: "FuzionPay", href: "/projects" },
                { label: "MTN Capital", href: "/projects" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/company-profile" },
                { label: "Our Ecosystem", href: "/solutions" },
                { label: "Solutions", href: "/solutions" },
                { label: "Global Markets", href: "/" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "Partner With Us", href: "/contact" },
                { label: "Request Demo", href: "/contact" },
                { label: "Institutional Inquiry", href: "/contact" },
                { label: "Press & Media", href: "/contact" },
              ],
            },
          ].map((group) => (
            <div className="grid content-start gap-3" key={group.title}>
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[1.4px] text-[#93c5fd]">
                {group.title}
              </h3>
              {group.links.map((link) => (
                <Link className="text-xs text-white/45 transition hover:text-white/85" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { shell };
