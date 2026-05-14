"use client";

import { Quote, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function QuoteSection() {
  const t = useTranslations("QuoteSection");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#111111] via-[#171717] to-[#0f0f0f] py-20 lg:py-28">
      {/* Background glows */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-yellow-400/10
            bg-white/[0.04]
            p-10
            shadow-[0_30px_80px_rgba(255,190,11,0.08)]
            backdrop-blur-2xl
            md:p-14
          "
        >
          {/* Decorative glow */}
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* Top badge */}
          <div className="relative z-10 mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-5 py-2">
            <ShieldCheck className="h-4 w-4 text-yellow-300" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
              {t("badge")}
            </span>
          </div>

          {/* Quote icon */}
          <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-500 text-black shadow-[0_15px_40px_rgba(255,190,11,0.35)]">
            <Quote className="h-10 w-10" />
          </div>

          {/* Quote */}
          <p className="relative z-10 font-inter-tight text-2xl font-medium leading-relaxed text-white md:text-3xl lg:text-4xl">
            {t("quote")}
          </p>

          {/* Bottom line */}
          <div className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0" />

          <div className="relative z-10 mt-6 flex items-center gap-3 text-yellow-200/70">
            <span className="h-2 w-2 rounded-full bg-yellow-300" />

            <span className="text-sm tracking-[0.2em] uppercase">
              {t("footer")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}