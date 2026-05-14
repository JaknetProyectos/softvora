"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Check,
  ShoppingCart,
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Sparkles,
  Server,
  Cpu,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { SoporteQuoteCard } from "@/components/CustomSection";
import { useLocale, useTranslations } from "next-intl";

export default function SeguridadInformaticaPage() {
  const t = useTranslations("securityServicePage");
  const locale = useLocale();
  const { addItem } = useCart();

  const numberLocale = locale === "en" ? "en-US" : "es-MX";

  const plans = [
    {
      id: "mcafee-total-protection",
      name: t("plans.mcafee.name"),
      description: t("plans.mcafee.description"),
      price: 900,
      features: [
        t("plans.mcafee.features.0"),
        t("plans.mcafee.features.1"),
        t("plans.mcafee.features.2"),
        t("plans.mcafee.features.3"),
        t("plans.mcafee.features.4"),
      ],
      popular: true,
    },

    {
      id: "kaspersky-standard",
      name: t("plans.kaspersky.name"),
      description: t("plans.kaspersky.description"),
      price: 550,
      features: [
        t("plans.kaspersky.features.0"),
        t("plans.kaspersky.features.1"),
        t("plans.kaspersky.features.2"),
        t("plans.kaspersky.features.3"),
        t("plans.kaspersky.features.4"),
      ],
    },

    {
      id: "bitdefender-total-security",
      name: t("plans.bitdefender.name"),
      description: t("plans.bitdefender.description"),
      price: 780,
      features: [
        t("plans.bitdefender.features.0"),
        t("plans.bitdefender.features.1"),
        t("plans.bitdefender.features.2"),
        t("plans.bitdefender.features.3"),
        t("plans.bitdefender.features.4"),
      ],
    },

    {
      id: "norton-antivirus-plus",
      name: t("plans.norton.name"),
      description: t("plans.norton.description"),
      price: 800,
      features: [
        t("plans.norton.features.0"),
        t("plans.norton.features.1"),
        t("plans.norton.features.2"),
        t("plans.norton.features.3"),
        t("plans.norton.features.4"),
      ],
    },

    {
      id: "totalav-antivirus",
      name: t("plans.totalav.name"),
      description: t("plans.totalav.description"),
      price: 2000,
      features: [
        t("plans.totalav.features.0"),
        t("plans.totalav.features.1"),
        t("plans.totalav.features.2"),
        t("plans.totalav.features.3"),
        t("plans.totalav.features.4"),
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t("features.proactive.title"),
      description: t("features.proactive.description"),
    },
    {
      icon: Lock,
      title: t("features.encryption.title"),
      description: t("features.encryption.description"),
    },
    {
      icon: Eye,
      title: t("features.monitoring.title"),
      description: t("features.monitoring.description"),
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-300 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-5 py-2">
                <Shield className="h-4 w-4 text-yellow-700" />
                <span className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
                {t("hero.title.line1")}
                <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  {t("hero.title.highlight")}
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#planes"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-xl shadow-yellow-200 transition hover:scale-[1.02]"
                >
                  {t("hero.primaryCta")}
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/carrito"
                  className="inline-flex items-center gap-2 rounded-2xl border border-yellow-300 bg-white px-8 py-4 font-semibold text-yellow-700 transition hover:bg-yellow-50"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t("hero.secondaryCta")}
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-yellow-100 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <h3 className="text-3xl font-black text-yellow-600">24/7</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t("stats.monitoring")}
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-100 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <h3 className="text-3xl font-black text-orange-500">99%</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t("stats.protection")}
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-100 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <h3 className="text-3xl font-black text-yellow-700">
                    {t("stats.tier")}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t("stats.premiumSecurity")}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-yellow-100 bg-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=900&fit=crop"
                  alt={t("hero.imageAlt")}
                  width={700}
                  height={600}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="mb-2 flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-yellow-300" />
                      <span className="font-semibold text-white">
                        {t("hero.overlayTitle")}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-white/80">
                      {t("hero.overlayDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2">
              <Lock className="h-4 w-4 text-yellow-700" />
              <span className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                {t("featuresSection.badge")}
              </span>
            </div>

            <h2 className="mb-5 text-4xl font-black text-gray-900 md:text-5xl">
              {t("featuresSection.title.line1")}
              <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {t("featuresSection.title.highlight")}
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              {t("featuresSection.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-yellow-100 bg-gradient-to-b from-white to-yellow-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-yellow-200 opacity-20 blur-3xl transition-all duration-300 group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
                    <feature.icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section
        id="planes"
        className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white py-20"
      >
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-2 shadow-sm">
              <Server className="h-4 w-4 text-yellow-700" />
              <span className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                {t("plansSection.badge")}
              </span>
            </div>

            <h2 className="mb-5 text-4xl font-black text-gray-900 md:text-5xl">
              {t("plansSection.title")}
            </h2>

            <p className="text-lg text-gray-600">
              {t("plansSection.description")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[2rem] border bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-yellow-400 ring-2 ring-yellow-200"
                    : "border-yellow-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    {t("plansSection.recommended")}
                  </div>
                )}

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
                  <Cpu className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-3xl font-black text-gray-900">
                  {plan.name}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent">
                    ${plan.price.toLocaleString(numberLocale)}
                  </span>

                  <span className="ml-2 text-gray-500">MXN</span>
                </div>

                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
                        <Check className="h-4 w-4 text-yellow-700" />
                      </div>

                      <span className="leading-relaxed text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      id: plan.id,
                      name: plan.name,
                      description: plan.description,
                      price: plan.price,
                    })
                  }
                  className={`w-full rounded-2xl px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                      : "bg-gradient-to-r from-yellow-600 to-yellow-500"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    {t("plansSection.addToCart")}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          <SoporteQuoteCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}