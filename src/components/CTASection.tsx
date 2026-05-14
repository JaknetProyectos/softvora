"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { ContactButton } from "./ContactModal";

export default function CTASection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdf7] via-white to-[#fff8e7] py-20 lg:py-28">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <div className="relative">
          {/* Decorations */}
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-gradient-to-br from-yellow-200 to-yellow-400 opacity-30 blur-2xl" />

          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-yellow-300/40 bg-yellow-400/10 backdrop-blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-200/60 bg-white shadow-[0_25px_80px_rgba(255,190,11,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
              alt={t("imageAlt")}
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-yellow-400/10" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-100/60 px-4 py-2 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4 text-yellow-700" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-800">
              {t("badge")}
            </span>
          </div>

          <h2 className="max-w-2xl font-inter-tight text-4xl font-black leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ContactButton
              buttonText={t("contactButton.buttonText")}
              title={t("contactButton.title")}
              submitText={t("contactButton.submitText")}
              fields={[
                "nombre",
                "apellidos",
                "email",
                "asunto",
                "servicioDeseado",
                "mensaje",
              ]}
              className="
                group
                rounded-2xl
                bg-gradient-to-r
                from-yellow-400
                via-yellow-500
                to-amber-500
                px-8
                py-4
                font-semibold
                text-black
                shadow-[0_10px_40px_rgba(255,190,11,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(255,190,11,0.45)]
              "
            />

            <button
              type="button"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-yellow-300/50
                bg-white/80
                px-8
                py-4
                font-semibold
                text-zinc-800
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-yellow-50
              "
            >
              {t("viewServices")}

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}