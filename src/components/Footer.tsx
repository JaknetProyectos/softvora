"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Headphones,
  Server,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative overflow-hidden bg-[#fffdf9] pt-20 text-zinc-800">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_35%)]" />

      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid gap-12 border-b border-yellow-100 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="mb-6">
              <h2 className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                Softvora
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-600">
              {t("description")}
            </p>

            <div className="mt-8">
              <Image
                src="/cards.png"
                alt={t("paymentMethods")}
                width={180}
                height={40}
                className="h-9 w-auto opacity-90"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-zinc-900">
              {t("contact.title")}
            </h4>

            <div className="space-y-4">
              <Link
                href="tel:5555332511"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
                  <Phone className="h-5 w-5 text-white" />
                </div>

                <span className="font-medium">
                  55 5533 2511
                </span>
              </Link>

              <Link
                href="mailto:gestion@softvora.com.mx.mx"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
                  <Mail className="h-5 w-5 text-white" />
                </div>

                <span className="font-medium break-all">
                  gestion@softvora.com.mx.mx
                </span>
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-zinc-900">
              {t("services.title")}
            </h4>

            <div className="space-y-4">
              <Link
                href="/servicios/soporte-mantenimiento"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-50 transition group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500">
                  <Headphones className="h-5 w-5 text-yellow-500 group-hover:text-white" />
                </div>

                <span className="font-medium">
                  {t("services.support")}
                </span>
              </Link>

              <Link
                href="/servicios/seguridad-informatica"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-50 transition group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500">
                  <ShieldCheck className="h-5 w-5 text-yellow-500 group-hover:text-white" />
                </div>

                <span className="font-medium">
                  {t("services.security")}
                </span>
              </Link>

              <Link
                href="/servicios/soporte-remoto"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-50 transition group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500">
                  <Server className="h-5 w-5 text-yellow-500 group-hover:text-white" />
                </div>

                <span className="font-medium">
                  {t("services.remote")}
                </span>
              </Link>

              <Link
                href="/paga-tu-cotizacion"
                className="group flex items-center gap-3 text-zinc-600 transition hover:text-yellow-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-50 transition group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500">
                  <CreditCard className="h-5 w-5 text-yellow-500 group-hover:text-white" />
                </div>

                <span className="font-medium">
                  {t("services.quote")}
                </span>
              </Link>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-zinc-900">
              {t("office.title")}
            </h4>

            <div className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>

              <p className="text-sm leading-7 text-zinc-600">
                {t("office.address1")}
                <br />
                {t("office.address2")}
                <br />
                {t("office.address3")}
              </p>

              <Link
                href="https://maps.google.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 transition hover:text-yellow-700"
              >
                {t("office.location")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} softvora.com.mx · {t("copyright")}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link
              href="/legal/privacidad"
              className="text-zinc-500 transition hover:text-yellow-600"
            >
              {t("links.privacy")}
            </Link>

            <Link
              href="/legal/terminos"
              className="text-zinc-500 transition hover:text-yellow-600"
            >
              {t("links.terms")}
            </Link>

            <Link
              href="/legal/reembolsos"
              className="text-zinc-500 transition hover:text-yellow-600"
            >
              {t("links.refunds")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}