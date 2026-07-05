"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { projectPlatforms as platformSource } from "../data";

type Platform = (typeof platformSource)[number];

export function ProjectsGrid({ platforms }: { platforms: readonly Platform[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = platforms[activeIndex];

  return (
    <div>
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.slice(0, 4).map((platform, index) => {
          const selected = activeIndex === index;

          return (
            <button
              className={
                selected
                  ? "rounded-[10px] border border-[#004aad] bg-white px-4 py-4 text-left shadow-[0_12px_28px_rgba(0,74,173,0.14)] transition duration-300"
                  : "rounded-[10px] border border-[#dce5f3] bg-white px-4 py-4 text-left shadow-[0_10px_24px_rgba(0,48,135,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#004aad]/40"
              }
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveIndex(index)}
              key={platform.name}
            >
              <span className="block text-xs font-extrabold text-[#182035]">{platform.name}</span>
              <span className="mt-1 block text-[11px] leading-4 text-[#5e7099]">{platform.subtitle}</span>
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-3 grid max-w-[820px] grid-cols-1 gap-3 sm:grid-cols-3">
        {platforms.slice(4).map((platform, index) => {
          const actualIndex = index + 4;
          const selected = activeIndex === actualIndex;

          return (
            <button
              className={
                selected
                  ? "rounded-[10px] border border-[#004aad] bg-white px-4 py-4 text-left shadow-[0_12px_28px_rgba(0,74,173,0.14)] transition duration-300"
                  : "rounded-[10px] border border-[#dce5f3] bg-white px-4 py-4 text-left shadow-[0_10px_24px_rgba(0,48,135,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[#004aad]/40"
              }
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveIndex(actualIndex)}
              key={platform.name}
            >
              <span className="block text-xs font-extrabold text-[#182035]">{platform.name}</span>
              <span className="mt-1 block text-[11px] leading-4 text-[#5e7099]">{platform.subtitle}</span>
            </button>
          );
        })}
      </div>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="motion-safe:animate-[fadeUp_.5s_ease-out_both]" key={active.name}>
          <h2 className="font-serif text-[34px] font-bold leading-tight text-[#004aad] sm:text-[40px]">
            {active.name}
          </h2>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-[#5e7099]">{active.description}</p>
          <div className="mt-7">
            <Link
              className="inline-flex min-h-10 items-center gap-2 rounded-[10px] bg-[#004aad] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_10px_24px_rgba(0,74,173,0.28)] transition duration-300 hover:-translate-y-0.5"
              href="/contact"
            >
              {active.button} <ArrowRight size={13} aria-hidden />
            </Link>
          </div>
        </div>

        <ul className="grid gap-3 motion-safe:animate-[fadeUp_.5s_ease-out_both]" key={`${active.name}-features`}>
          {active.features.map(([title, copy]) => (
            <li className="rounded-[10px] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(0,48,135,0.05)]" key={title}>
              <div className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: active.accent }} />
                <div>
                  <h3 className="text-xs font-extrabold text-[#182035]">{title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#5e7099]">{copy}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
