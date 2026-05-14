"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  ShieldCheck,
  LaptopMinimalCheck,
  Headset,
} from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("servicesSection");

  const services = [
    {
      number: "01",
      title: t("services.softwareSupport.title"),
      href: "/servicios/soporte-mantenimiento",
      icon: LaptopMinimalCheck,
    },
    {
      number: "02",
      title: t("services.cybersecurity.title"),
      href: "/servicios/seguridad-informatica",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: t("services.remoteSupport.title"),
      href: "/servicios/soporte-remoto",
      icon: Headset,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-20 lg:py-28">
      {/* Background glows */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
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

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="
                group
                relative
                flex
                flex-col
                gap-6
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
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-6">
                {/* Number */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-300 to-amber-500 text-xl font-black text-black shadow-lg shadow-yellow-500/20">
                  {service.number}
                </div>

                {/* Text */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-white/5 text-yellow-300">
                      <service.icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200/70">
                      {t("serviceLabel")}
                    </span>
                  </div>

                  <h3 className="font-inter-tight text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-200 md:text-3xl">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative z-10 flex items-center gap-3 text-yellow-300">
                <span className="text-sm font-medium">
                  {t("viewService")}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-white/5 transition-all duration-300 group-hover:border-yellow-300/40 group-hover:bg-yellow-400/10">
                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}