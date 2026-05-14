"use client";

import {
  Shield,
  RefreshCw,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("featuresSection");

  const features = [
    {
      icon: Shield,
      title: t("items.security.title"),
      description: t("items.security.description"),
    },
    {
      icon: RefreshCw,
      title: t("items.update.title"),
      description: t("items.update.description"),
    },
    {
      icon: TrendingUp,
      title: t("items.flexibility.title"),
      description: t("items.flexibility.description"),
    },
    {
      icon: Clock,
      title: t("items.support.title"),
      description: t("items.support.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50/50 via-white to-white py-20 lg:py-28">

      {/* Background Effects */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-yellow-500" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
              {t("badge")}
            </span>
          </div>

          <h2 className="font-inter-tight text-4xl font-black text-zinc-900 md:text-5xl">
            {t("title.line1")}
            <span className="block bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
            {t("title.line2")}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            {t("description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-yellow-100
                bg-white/90
                p-8
                shadow-lg
                shadow-yellow-100/40
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-300/10 to-orange-300/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              {/* Number */}
              <div className="absolute right-6 top-6 text-5xl font-black text-yellow-100">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-white shadow-lg shadow-yellow-400/30">
                <feature.icon className="h-8 w-8" strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-inter-tight text-2xl font-bold text-zinc-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-600">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 group-hover:w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}