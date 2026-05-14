"use client";

import { Headset, ShieldCheck, Clock3 } from "lucide-react";
import { ContactButton } from "./ContactModal";
import { useTranslations } from "next-intl";

export function SoporteQuoteCard() {
  const t = useTranslations("SoporteQuoteCard");

  return (
    <section className="mt-20 p-10">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-yellow-200 bg-gradient-to-br from-[#fffdf7] via-white to-yellow-50 shadow-2xl">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-yellow-700" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-800">
                {t("badge")}
              </span>
            </div>

            <h3 className="text-4xl font-black leading-tight text-gray-900">
              {t("title.line1")}

              <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {t("title.line2")}
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
              {t("description")}
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
                  <Headset className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {t("features.specialized.title")}
                  </p>

                  <p className="text-sm text-gray-500">
                    {t("features.specialized.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {t("features.fast.title")}
                  </p>

                  <p className="text-sm text-gray-500">
                    {t("features.fast.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-yellow-200 bg-white p-8 shadow-xl">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900">
                  {t("card.title")}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {t("card.description")}
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-100 bg-gradient-to-br from-yellow-50 to-orange-50 p-5">
                <ContactButton
                  buttonText={t("button.text")}
                  title={t("button.modalTitle")}
                  submitText={t("button.submitText")}
                  className="w-full rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 py-4 text-sm font-bold text-white shadow-xl shadow-yellow-200 transition-all duration-300 hover:scale-[1.02] hover:from-yellow-600 hover:to-orange-600"
                  fields={[
                    "nombre",
                    "email",
                    "asunto",
                    "servicioDeseado",
                  ]}
                />
              </div>

              <p className="mt-5 text-center text-xs text-gray-400">
                softvora.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}