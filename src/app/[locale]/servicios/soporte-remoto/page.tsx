"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Check,
  ShoppingCart,
  ArrowRight,
  Laptop,
  MapPin,
  Clock,
  Minus,
  Plus,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { SoporteQuoteCard } from "@/components/CustomSection";

const plans = [
  {
    id: "analisis-desarrollo-web",
    price: 600,
    popular: false,
  },

  {
    id: "soporte-servidores-linux-windows",
    price: 90,
  },

  {
    id: "soporte-teamviewer",
    price: 200,
  },

  {
    id: "soporte-software-hardware",
    price: 650,
  },

  {
    id: "conexion-remota",
    price: 350,
  },

  {
    id: "soporte-247",
    price: 100,
  },
];

const benefits = [
  {
    icon: Laptop,
    key: "instantSupport",
  },

  {
    icon: MapPin,
    key: "onsiteVisits",
  },

  {
    icon: Clock,
    key: "extendedAvailability",
  },
];

function QuantitySelector({
  value,
  onChange,
  t,
}: {
  value: number;
  onChange: (value: number) => void;
  t: (key: string) => string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-3">
      <span className="text-sm font-semibold text-zinc-700">
        {t("quantity.hoursRequired")}
      </span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-200 bg-white text-zinc-700 shadow-sm transition hover:bg-yellow-100"
        >
          <Minus className="h-4 w-4" />
        </button>

        <div className="min-w-[40px] text-center text-xl font-black text-yellow-700">
          {value}
        </div>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-200 bg-white text-zinc-700 shadow-sm transition hover:bg-yellow-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function SoporteRemotoPage() {
  const { addItem } = useCart();

  const t = useTranslations("remoteSupportPage");

  const [hours, setHours] = useState<Record<string, number>>({
    "soporte-remoto-basico": 1,
    "soporte-hibrido": 1,
    "soporte-presencial": 1,
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1203] to-[#2b1803] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,190,50,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="font-inter-tight text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {t("hero.title")}
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#planes"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                {t("hero.viewServices")}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/carrito"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                {t("hero.viewCart")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=700&fit=crop"
                alt={t("hero.imageAlt")}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {t("benefits.badge")}
            </span>

            <h2 className="text-4xl font-black text-zinc-900">
              {t("benefits.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              {t("benefits.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.key}
                className="group rounded-[2rem] border border-yellow-100 bg-gradient-to-b from-white to-yellow-50/60 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg">
                  <benefit.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-zinc-900">
                  {t(`benefits.items.${benefit.key}.title`)}
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-600">
                  {t(`benefits.items.${benefit.key}.description`)}
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
              {t("plans.badge")}
            </span>

            <h2 className="text-4xl font-black text-zinc-900">
              {t("plans.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              {t("plans.description")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const selectedHours = hours[plan.id] || 1;
              const total = plan.price * selectedHours;

              return (
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
                      {t("plans.mostRequested")}
                    </div>
                  )}

                  <div className="mb-5">
                    <h3 className="text-3xl font-black text-zinc-900">
                      {t(`plans.items.${plan.id}.name`)}
                    </h3>

                    {/* <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {t(`plans.items.${plan.id}.description`)}
                    </p> */}
                  </div>

                  <div className="mb-7">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent">
                      ${plan.price.toLocaleString("es-MX")}
                    </span>

                    <span className="ml-2 text-zinc-500">
                      {t("plans.perHour")}
                    </span>
                  </div>



                  <div className="mb-6">
                    <QuantitySelector
                      value={selectedHours}
                      onChange={(value) =>
                        setHours((prev) => ({
                          ...prev,
                          [plan.id]: value,
                        }))
                      }
                      t={t}
                    />

                    <div className="mt-4 rounded-2xl border border-yellow-100 bg-gradient-to-r from-yellow-50 to-orange-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-600">
                          {t("plans.estimatedTotal")}
                        </span>

                        <span className="text-2xl font-black text-yellow-700">
                          ${total.toLocaleString("es-MX")}  {t("taxes")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: `${plan.id}-${selectedHours}h`,
                        name: `${t(
                          `plans.items.${plan.id}.name`
                        )} (${selectedHours}h)`,
                        description: `${t(
                          `plans.items.${plan.id}.description`
                        )} - ${selectedHours} ${t("plans.hours")}`,
                        price: total,
                      })
                    }
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:opacity-90"
                        : "bg-zinc-950 text-white hover:bg-black"
                    }`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {t("plans.addHoursToCart", {
                      hours: selectedHours,
                    })}
                  </button>
                </div>
              );
            })}
          </div>

          <SoporteQuoteCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}