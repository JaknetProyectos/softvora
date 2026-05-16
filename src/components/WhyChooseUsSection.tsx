"use client";

import Image from "next/image";
import { ShieldCheck, Cpu, Sparkles, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUsSection() {
  const t = useTranslations("whyChooseUs");

  const reasons = [
    {
      number: "01",
      title: t("reasons.specializedStaff.title"),
      description: t("reasons.specializedStaff.description"),
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: t("reasons.proactiveApproach.title"),
      description: t("reasons.proactiveApproach.description"),
      icon: Sparkles,
    },
    {
      number: "03",
      title: t("reasons.scalability.title"),
      description: t("reasons.scalability.description"),
      icon: Cpu,
    },
    {
      number: "04",
      title: t("reasons.securityMeasures.title"),
      description: t("reasons.securityMeasures.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#171717] to-[#111111] py-20 lg:py-28">
      {/* Glow effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="mb-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              <span className="h-2 w-2 rounded-full bg-amber-500" />

              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
                {t("badge")}
              </span>
            </div>

            <h2 className="font-inter-tight text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              {t("description")}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-yellow-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/10 bg-white/5 shadow-[0_25px_80px_rgba(255,190,11,0.12)] backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&h=500&fit=crop"
                alt={t("imageAlt")}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-yellow-400/10" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-yellow-400/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-yellow-400/30
                hover:bg-white/[0.06]
                hover:shadow-[0_20px_60px_rgba(255,190,11,0.12)]
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Top */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-300 to-amber-500 text-black shadow-lg shadow-yellow-500/20">
                    <reason.icon className="h-6 w-6" />
                  </div>

                </div>

                <h3 className="font-inter-tight text-2xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {reason.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}