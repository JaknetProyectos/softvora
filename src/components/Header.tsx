"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

import { useEffect, useRef, useState } from "react";

import {
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  ShieldCheck,
  Headphones,
  Server,
  CreditCard,
  Home,
  Globe,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useLocaleContext } from "@/context/LangContext";

export default function Header() {
  const t = useTranslations("Header");


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  const { totalItems } = useCart();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const { locale, switchLanguage, isPending } = useLocaleContext();

  const services = [
    {
      href: "/servicios/soporte-mantenimiento",
      title: t("services.support"),
      icon: Headphones,
    },
    {
      href: "/servicios/seguridad-informatica",
      title: t("services.security"),
      icon: ShieldCheck,
    },
    {
      href: "/servicios/soporte-remoto",
      title: t("services.remote"),
      icon: Server,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-100 bg-white/90 backdrop-blur-xl">
      {/* Glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-4"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_10px_40px_rgba(249,115,22,0.35)]">
              <ShieldCheck className="h-7 w-7 text-white" />

              <div className="absolute inset-0 rounded-2xl border border-white/20" />
            </div>

            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-500 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                Softvora
              </span>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden items-center gap-3 lg:flex">
            {/* HOME */}
            <Link
              href="/#somos"
              className="group flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-yellow-50 hover:text-yellow-600"
            >
              <Home className="h-4 w-4 text-yellow-500 transition group-hover:scale-110" />

              {t("about")}
            </Link>

            {/* SERVICES */}
            <div
              ref={servicesRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="group flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-yellow-50 hover:text-yellow-600"
              >
                <Server className="h-4 w-4 text-yellow-500 transition group-hover:scale-110" />

                {t("services.title")}

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-4 w-80 overflow-hidden rounded-3xl border border-yellow-100 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                  <div className="border-b border-yellow-100 bg-gradient-to-r from-yellow-50 to-yellow-50 px-6 py-5">
                    <h3 className="text-lg font-bold text-zinc-900">
                      {t("services.dropdownTitle")}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {t("services.dropdownDescription")}
                    </p>
                  </div>

                  <div className="p-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-yellow-50"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>

                        <span className="font-medium text-zinc-800 transition group-hover:text-yellow-600">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* QUOTE */}
            <Link
              href="/paga-tu-cotizacion"
              className="group flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-yellow-50 hover:text-yellow-600"
            >
              <CreditCard className="h-4 w-4 text-yellow-500 transition group-hover:scale-110" />

              {t("payQuote")}
            </Link>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* LANGUAGE */}
          <button
            type="button"
            onClick={()=>{
              locale === "es" ? switchLanguage("en") : switchLanguage("es")
              
            }}
            className="hidden h-12 items-center justify-center gap-2 rounded-2xl border border-yellow-100 bg-white px-4 text-yellow-500 shadow-sm transition hover:border-yellow-200 hover:bg-yellow-50 lg:flex"
          >
            <Globe className="h-5 w-5" />

            <span className="text-sm font-semibold uppercase">
              {locale === "es" ? "ES" : "EN"}
            </span>
          </button>

          {/* CART */}
          <Link href="/carrito">
            <button
              type="button"
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-1 text-[11px] font-bold text-yellow-600 shadow">
                {totalItems}
              </span>
            </button>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-100 bg-white text-yellow-500 shadow-sm transition hover:bg-yellow-50 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-yellow-100 bg-white lg:hidden">
          <div className="space-y-3 px-4 py-6">
            <button
              type="button"
              onClick={()=>{
                locale === "es" ? switchLanguage("en") : switchLanguage("es")
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-yellow-100 bg-yellow-50 px-4 py-4 font-semibold text-zinc-800"
            >
              <Globe className="h-5 w-5 text-yellow-500" />

              {locale === "es"
                ? t("language.switchToEnglish")
                : t("language.switchToSpanish")}
            </button>

            <Link
              href="/#somos"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-yellow-50 px-4 py-4 font-semibold text-zinc-800"
            >
              <Home className="h-5 w-5 text-yellow-500" />

              {t("about")}
            </Link>

            <div className="rounded-3xl border border-yellow-100 bg-white p-3">
              <div className="mb-3 flex items-center gap-2 px-2">
                <Server className="h-5 w-5 text-yellow-500" />

                <h3 className="font-bold text-zinc-800">
                  {t("services.title")}
                </h3>
              </div>

              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-yellow-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500">
                      <service.icon className="h-4 w-4 text-white" />
                    </div>

                    <span className="font-medium text-zinc-700">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/paga-tu-cotizacion"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl bg-yellow-50 px-4 py-4 font-semibold text-zinc-800"
            >
              <CreditCard className="h-5 w-5 text-yellow-500" />

              {t("payQuote")}
            </Link>

            <Link
              href="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 font-bold text-white shadow-lg"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}