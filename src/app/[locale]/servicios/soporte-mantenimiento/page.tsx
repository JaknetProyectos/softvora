"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Check,
  ShoppingCart,
  ArrowRight,
  Wrench,
  RefreshCw,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { SoporteQuoteCard } from "@/components/CustomSection";
import { useLocale, useTranslations } from "next-intl";

export default function SoporteMantenimientoPage() {
  const { addItem } = useCart();
  const t = useTranslations("supportMaintenancePage");
  const locale = useLocale();
  const numberLocale = locale === "en" ? "en-US" : "es-MX";

  const plansData = t.raw("plans") as {
    installationBasic: {
      name: string;
      description: string;
      features: string[];
    };
    corporateSoftware: {
      name: string;
      description: string;
      features: string[];
    };
    osUpdate: {
      name: string;
      description: string;
      features: string[];
    };
    officeSimpleIssue: {
      name: string;
      description: string;
      features: string[];
    };
    complexProductiveIssue: {
      name: string;
      description: string;
      features: string[];
    };
    severeProblem: {
      name: string;
      description: string;
      features: string[];
    };
    basicOptimization: {
      name: string;
      description: string;
      features: string[];
    };
    officeOptimization: {
      name: string;
      description: string;
      features: string[];
    };
    mediumServerOptimization: {
      name: string;
      description: string;
      features: string[];
    };
    enterpriseServerOptimization: {
      name: string;
      description: string;
      features: string[];
    };
  };

  const featuresData = t.raw("features") as {
    remoteSupport: {
      title: string;
      desc: string;
    };
    updates: {
      title: string;
      desc: string;
    };
    optimization: {
      title: string;
      desc: string;
    };
  };

  const plans = [
    {
      id: "instalacion-programa-basico",
      name: plansData.installationBasic.name,
      description: plansData.installationBasic.description,
      price: 500,
      features: plansData.installationBasic.features,
      popular: false,
    },
    {
      id: "instalacion-software-corporativo",
      name: plansData.corporateSoftware.name,
      description: plansData.corporateSoftware.description,
      price: 2000,
      features: plansData.corporateSoftware.features,
      popular: false,
    },
    {
      id: "actualizacion-sistema-operativo",
      name: plansData.osUpdate.name,
      description: plansData.osUpdate.description,
      price: 4000,
      features: plansData.osUpdate.features,
      popular: false,
    },
    {
      id: "falla-aplicacion-simple",
      name: plansData.officeSimpleIssue.name,
      description: plansData.officeSimpleIssue.description,
      price: 800,
      features: plansData.officeSimpleIssue.features,
      popular: false,
    },
    {
      id: "falla-aplicacion-compleja",
      name: plansData.complexProductiveIssue.name,
      description: plansData.complexProductiveIssue.description,
      price: 6000,
      features: plansData.complexProductiveIssue.features,
      popular: false,
    },
    {
      id: "problema-severo",
      name: plansData.severeProblem.name,
      description: plansData.severeProblem.description,
      price: 11700,
      features: plansData.severeProblem.features,
      popular: false,
    },
    {
      id: "optimizacion-basica",
      name: plansData.basicOptimization.name,
      description: plansData.basicOptimization.description,
      price: 1000,
      features: plansData.basicOptimization.features,
      popular: false,
    },
    {
      id: "optimizacion-oficina",
      name: plansData.officeOptimization.name,
      description: plansData.officeOptimization.description,
      price: 3800,
      features: plansData.officeOptimization.features,
      popular: false,
    },
    {
      id: "optimizacion-servidor-mediano",
      name: plansData.mediumServerOptimization.name,
      description: plansData.mediumServerOptimization.description,
      price: 10000,
      features: plansData.mediumServerOptimization.features,
      popular: false,
    },
    {
      id: "optimizacion-servidor-empresarial",
      name: plansData.enterpriseServerOptimization.name,
      description: plansData.enterpriseServerOptimization.description,
      price: 18000,
      features: plansData.enterpriseServerOptimization.features,
      popular: false,
    },
  ];

  const features = [
    {
      icon: MonitorSmartphone,
      title: featuresData.remoteSupport.title,
      desc: featuresData.remoteSupport.desc,
    },
    {
      icon: RefreshCw,
      title: featuresData.updates.title,
      desc: featuresData.updates.desc,
    },
    {
      icon: Wrench,
      title: featuresData.optimization.title,
      desc: featuresData.optimization.desc,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2b1803] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,190,50,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {t("hero.badge")}
            </div>

            <h1 className="font-inter-tight text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {t("hero.title.line1")}
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t("hero.title.highlight")}
              </span>
              {t("hero.title.line2")}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#planes"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                {t("hero.primaryCta")}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/carrito"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                {t("hero.secondaryCta")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=700&fit=crop"
                alt={t("hero.imageAlt")}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {t("featuresSection.badge")}
            </span>

            <h2 className="text-4xl font-black text-zinc-900">
              {t("featuresSection.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              {t("featuresSection.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-yellow-100 bg-gradient-to-b from-white to-yellow-50/60 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg">
                  <item.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section
        id="planes"
        className="bg-gradient-to-b from-[#fffdf7] to-[#fff5df] py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-black px-4 py-2 text-sm font-semibold text-yellow-400">
              {t("plansSection.badge")}
            </span>

            <h2 className="text-4xl font-black text-zinc-900">
              {t("plansSection.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              {t("plansSection.description")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[2rem] border bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-yellow-400 ring-2 ring-yellow-300/40"
                    : "border-yellow-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 text-xs font-bold text-black shadow">
                    {t("plansSection.mostRequested")}
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-3xl font-black text-zinc-900">
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-7">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent">
                    ${plan.price.toLocaleString(numberLocale)}
                  </span>

                  <span className="ml-2 text-zinc-500">MXN</span>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-yellow-100 p-1 text-yellow-700">
                        <Check className="h-4 w-4" />
                      </div>

                      <span className="text-sm leading-relaxed text-zinc-700">
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
                  className={`flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:opacity-90"
                      : "bg-zinc-950 text-white hover:bg-black"
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t("plansSection.addToCart")}
                </button>
              </div>
            ))}
          </div>

          <SoporteQuoteCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}