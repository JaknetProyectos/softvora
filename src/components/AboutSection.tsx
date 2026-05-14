"use client";

import Image from "next/image";
import { ShieldCheck, ServerCog, LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("aboutSection");

  const features = [
    {
      icon: ShieldCheck,
      title: t("features.security.title"),
      description: t("features.security.description"),
    },
    {
      icon: ServerCog,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
    {
      icon: LockKeyhole,
      title: t("features.continuity.title"),
      description: t("features.continuity.description"),
    },
  ];

  return (
    <section
      id="somos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-80px] h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">

            {/* Decorative Card */}
            <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 to-orange-300/20 blur-2xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-yellow-100 bg-white p-3 shadow-[0_25px_80px_rgba(234,179,8,0.15)]">

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10" />

              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=900&fit=crop"
                alt={t("imageAlt")}
                width={700}
                height={500}
                className="relative z-10 h-full w-full rounded-[1.5rem] object-cover"
              />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
                  {t("floatingCard.label")}
                </p>

                <h3 className="mt-1 text-lg font-bold text-zinc-900">
                  {t("floatingCard.title")}
                </h3>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-yellow-200 bg-white px-5 py-2 shadow-sm">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-orange-400" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
                {t("label")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-inter-tight text-4xl font-black leading-tight text-zinc-900 md:text-5xl">
              {t("title.line1")}
              <span className="block bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
                {t("title.highlight")}
              </span>
              {t("title.line2")}
            </h2>

            {/* Text */}
            <p className="mt-7 text-lg leading-relaxed text-zinc-600">
              {t("description")}
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-sm font-bold text-zinc-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}