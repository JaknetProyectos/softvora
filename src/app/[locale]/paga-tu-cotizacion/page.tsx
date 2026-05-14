"use client";

import { useState } from "react";
import Image from "next/image";

import {
  CreditCard,
  ShieldCheck,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";

import { useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CotizacionPersonalizadaPage() {
  const t = useTranslations("customQuote");

  const { addItem } = useCart();

  const [quoteId, setQuoteId] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddToCart = () => {
    const parsedAmount = Number(amount);

    if (!quoteId.trim()) {
      alert(t("alerts.quoteRequired"));
      return;
    }

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert(t("alerts.invalidAmount"));
      return;
    }

    addItem({
      id: `cotizacion-${quoteId}`,
      name: `${t("cart.quote")} ${quoteId}`,
      description: t("cart.description"),
      price: parsedAmount,
    });

    setQuoteId("");
    setAmount("");
  };

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-br from-[#fffdf7] via-[#fff7e6] to-[#fff3d1] py-16">
        {/* GOLD GLOW */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <div className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100/70 px-5 py-2 text-sm font-semibold text-yellow-700">
              <ShieldCheck className="h-4 w-4" />
              {t("hero.badge")}
            </div>

            <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-yellow-700 via-amber-500 to-yellow-500 bg-clip-text text-5xl font-black tracking-tight text-transparent lg:text-6xl">
              {t("hero.title")}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              {t("hero.description")}
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="overflow-hidden rounded-[32px] border border-yellow-200 bg-white shadow-[0_30px_90px_rgba(234,179,8,0.12)]">
            <div className="grid lg:grid-cols-2">
              {/* IMAGE SIDE */}
              <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-300 p-10 text-white">
                {/* overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_40%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                      <CreditCard className="h-4 w-4" />

                      <span className="text-sm font-semibold">
                        softvora.com.mx
                      </span>
                    </div>

                    <h2 className="max-w-md text-4xl font-black leading-tight">
                      {t("left.title")}
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-8 text-white/90">
                      {t("left.description")}
                    </p>
                  </div>

                  <div className="mt-12 grid gap-4">
                    <div className="flex items-start gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                        <ShieldCheck className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {t("features.security.title")}
                        </h3>

                        <p className="mt-1 text-sm text-white/80">
                          {t("features.security.description")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                        <BadgeDollarSign className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {t("features.billing.title")}
                        </h3>

                        <p className="mt-1 text-sm text-white/80">
                          {t("features.billing.description")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1400&auto=format&fit=crop"
                      alt={t("imageAlt")}
                      width={900}
                      height={700}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* FORM SIDE */}
              <div className="flex items-center bg-white p-8 lg:p-12">
                <div className="w-full">
                  <div className="mb-8">
                    <h2 className="text-3xl font-black text-zinc-900">
                      {t("form.title")}
                    </h2>

                    <p className="mt-3 text-zinc-500">
                      {t("form.description")}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* QUOTE ID */}
                    <div>
                      <label className="mb-3 block text-sm font-bold text-zinc-700">
                        {t("form.quoteId")}
                      </label>

                      <input
                        type="text"
                        value={quoteId}
                        onChange={(e) => setQuoteId(e.target.value)}
                        placeholder={t("form.quotePlaceholder")}
                        className="w-full rounded-2xl border border-yellow-200 bg-yellow-50/40 px-5 py-4 text-zinc-800 outline-none transition focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                      />
                    </div>

                    {/* AMOUNT */}
                    <div>
                      <label className="mb-3 block text-sm font-bold text-zinc-700">
                        {t("form.amount")}
                      </label>

                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-yellow-600">
                          $
                        </span>

                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full rounded-2xl border border-yellow-200 bg-yellow-50/40 py-4 pl-10 pr-5 text-zinc-800 outline-none transition focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-100"
                        />
                      </div>
                    </div>

                    {/* INFO BOX */}
                    <div className="rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50 p-5">
                      <p className="text-sm leading-7 text-zinc-700">
                        <span className="font-bold text-yellow-700">
                          {t("important.label")}
                        </span>{" "}
                        {t("important.text")}
                      </p>
                    </div>

                    {/* BUTTON */}
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 px-6 py-4 text-base font-bold text-white shadow-[0_20px_40px_rgba(234,179,8,0.35)] transition hover:scale-[1.01]"
                    >
                      {t("button")}

                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                    </button>

                    {/* SECURE NOTE */}
                    <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                      <ShieldCheck className="h-4 w-4 text-yellow-600" />

                      {t("secure")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}