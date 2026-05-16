"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import {
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";

import { ContactButton } from "./ContactModal";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  const features = [
    t("features.support"),
    t("features.security"),
    t("features.remote"),
  ];

  return (
    <section className="relative overflow-hidden border-b border-yellow-100 bg-gradient-to-br from-white via-yellow-50 to-orange-50 py-16 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="absolute bottom-[-140px] right-[-100px] h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Content */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-yellow-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-700">
              Softvora
            </span>
          </div>

          {/* Title */}
          <h1 className="font-inter-tight text-4xl font-black leading-tight text-zinc-900 md:text-5xl xl:text-6xl">
            {t("title.firstLine")}

            <span className="block bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>

            {t("title.lastLine")}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
            {t("description")}
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-4">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-yellow-200 bg-white px-4 py-3 shadow-sm"
              >
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

                <span className="text-sm font-medium text-zinc-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-100 bg-white p-3 shadow-[0_25px_80px_rgba(234,179,8,0.18)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10" />

            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop"
              alt={t("imageAlt")}
              width={800}
              height={600}
              priority
              className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
                {t("floatingCard.label")}
              </div>

              <div className="mt-1 text-lg font-bold text-zinc-900">
                {t("floatingCard.title")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}