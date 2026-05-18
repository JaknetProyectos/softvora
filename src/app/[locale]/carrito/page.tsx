"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { processEtominPayment } from "@/lib/payment";
import {
  CheckCircle2,
  Lock,
  CreditCard,
  ShoppingBag,
  AlertCircle,
  TicketPercent,
  ArrowLeft,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useAlert } from "@/context/AlertContext";

type CheckoutFormState = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  telefono: string;
  city: string;
  direccion: string;
  state: string;
  cp: string;
  country: string;
  cardNumber: string;
  cardName: string;
  month: string;
  year: string;
  cvv: string;
};

type CheckoutStep = "review" | "payment";

type Coupon = {
  code: string;
  percentage: number;
};

const availableCoupons: Coupon[] = [
  { code: "SAVE10", percentage: 10 },
  { code: "WELCOME15", percentage: 15 },
  { code: "GOLD20", percentage: 20 },
];

const initialForm: CheckoutFormState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  telefono: "",
  city: "",
  direccion: "",
  state: "",
  cp: "",
  country: "MX",
  cardNumber: "",
  cardName: "",
  month: "",
  year: "",
  cvv: "",
};

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
      >
        {children}
      </select>
    </label>
  );
}

export default function CheckoutPage() {
  const t = useTranslations("CheckoutPage");

  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormState>(initialForm);
  const [step, setStep] = useState<CheckoutStep>("review");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { showAlert } = useAlert();

  const orderId = useMemo(
    () => `ORD-${Date.now().toString(36).toUpperCase()}`,
    []
  );

  const locale = useLocale();
  const intlLocale = locale === "en" ? "en-US" : "es-MX";

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return (totalPrice * appliedCoupon.percentage) / 100;
  }, [appliedCoupon, totalPrice]);

  const discountedSubtotal = useMemo(
    () => Math.max(0, totalPrice - discountAmount),
    [totalPrice, discountAmount]
  );

  const taxAmount = useMemo(() => discountedSubtotal * 0.16, [discountedSubtotal]);

  const totalWithTax = useMemo(
    () => discountedSubtotal + taxAmount,
    [discountedSubtotal, taxAmount]
  );

  const formatMoney = (value: number) =>
    new Intl.NumberFormat(intlLocale, {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 2,
    }).format(value);

  const update = (key: keyof CheckoutFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    if (!items.length) return t("errors.emptyCart");
    if (!form.firstName.trim()) return t("errors.firstName");
    if (!form.lastName.trim()) return t("errors.lastName");
    if (!form.email.trim()) return t("errors.email");
    if (!form.telefono.trim()) return t("errors.telefono");
    if (!form.city.trim()) return t("errors.city");
    if (!form.direccion.trim()) return t("errors.direccion");
    if (!form.state.trim()) return t("errors.state");
    if (!form.cp.trim()) return t("errors.cp");
    if (!form.country.trim()) return t("errors.country");
    if (!form.cardNumber.trim()) return t("errors.cardNumber");
    if (!form.cardName.trim()) return t("errors.cardName");
    if (!form.month.trim()) return t("errors.month");
    if (!form.year.trim()) return t("errors.year");
    if (!form.cvv.trim()) return t("errors.cvv");
    return null;
  };

  const handleApplyCoupon = () => {
    const normalized = couponCode.trim().toUpperCase();

    if (!normalized) {
      setError(t("errors.couponInvalid"));
      showAlert({
        title: t("alerts.warning"),
        message: t("errors.couponInvalid"),
        type: "warning",
      });
      return;
    }

    const foundCoupon = availableCoupons.find(
      (coupon) => coupon.code === normalized
    );

    if (!foundCoupon) {
      setError(t("errors.couponInvalid"));
      showAlert({
        title: t("alerts.warning"),
        message: t("errors.couponInvalid"),
        type: "warning",
      });
      return;
    }

    setAppliedCoupon(foundCoupon);
    setCouponCode(foundCoupon.code);
    setError(null);

    showAlert({
      title: t("alerts.success"),
      message: t("coupon.appliedAlert", {
        code: foundCoupon.code,
        percentage: foundCoupon.percentage,
      }),
      type: "success",
    });
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setError(null);

    showAlert({
      title: t("alerts.success"),
      message: t("coupon.removed"),
      type: "success",
    });
  };

  const handleProceedToPayment = () => {
    setError(null);
    setSuccess(null);

    // const validationError = validate();
    // if (validationError) {
    //   setError(validationError);
    //   showAlert({
    //     title: t("alerts.error"),
    //     message: validationError,
    //     type: "warning",
    //   });
    //   return;
    // }

    setStep("payment");
  };

  const handleBackToReview = () => {
    setError(null);
    setSuccess(null);
    setStep("review");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      showAlert({
        title: t("alerts.error"),
        message: validationError,
        type: "warning",
      });
      return;
    }

    setLoading(true);

    try {
      const payment = await processEtominPayment({
        amount: totalWithTax,
        orderId,
        cardData: {
          number: form.cardNumber,
          name: form.cardName,
          month: form.month,
          year: form.year,
          cvv: form.cvv,
        },
        customer: {
          firstName: form.firstName,
          middleName: form.middleName || undefined,
          lastName: form.lastName,
          city: form.city,
          email: form.email,
          telefono: form.telefono,
          direccion: form.direccion,
          state: form.state,
          cp: form.cp,
          country: form.country,
        },
      });

      await fetch(`/${locale ?? "es"}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          customer: {
            firstName: form.firstName,
            middleName: form.middleName,
            lastName: form.lastName,
            email: form.email,
            telefono: form.telefono,
            city: form.city,
            direccion: form.direccion,
            state: form.state,
            cp: form.cp,
            country: form.country,
          },
          items,
          subtotal: totalPrice,
          discountCode: appliedCoupon?.code ?? null,
          discountPercentage: appliedCoupon?.percentage ?? 0,
          discountAmount,
          taxableSubtotal: discountedSubtotal,
          iva: taxAmount,
          total: totalWithTax,
          paymentResponse: payment,
        }),
      });

      setSuccess(t("success"));
      showAlert({
        message: t("success"),
        title: t("alerts.success"),
        type: "success",
      });

      clearCart();
      setForm(initialForm);
      setCouponCode("");
      setAppliedCoupon(null);
      setStep("review");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("errors.paymentFailed");

      showAlert({
        title: t("alerts.error"),
        message,
        type: "error",
      });

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!items.length) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)]">
          <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
            <div className="rounded-3xl border border-yellow-100 bg-white p-10 shadow-xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                <ShoppingBag className="h-10 w-10 text-yellow-600" />
              </div>

              <h1 className="text-3xl font-bold text-zinc-900">
                {t("empty.title")}
              </h1>

              <p className="mt-4 text-zinc-600">{t("empty.description")}</p>

              <Link
                href="/#servicios"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-500 px-6 py-3 font-semibold text-white transition hover:brightness-110"
              >
                {t("empty.cta")}
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] text-zinc-900">
        <section className="border-b border-yellow-100 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
                <Lock className="h-4 w-4" />
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                {t("hero.title.line1")}
                <br />
                {t("hero.title.line2")}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
                {t("hero.description")}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
                <TicketPercent className="h-4 w-4" />
                {t("hero.step", {
                  current: step === "review" ? 1 : 2,
                  total: 2,
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    {t("security.title")}
                  </h2>
                  <p className="text-sm text-zinc-500">{t("form.orderReference")}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-zinc-600">
                {t("security.description")}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                <Lock className="h-4 w-4 text-yellow-600" />
                {t("security.protected")}
              </div>

              <div className="mt-6 flex w-full flex-row justify-center gap-6 p-2">
                <Image
                  src="/cards.png"
                  width={100}
                  height={30}
                  alt={t("logos.cardsAlt")}
                  className="object-contain"
                />
                <Image
                  src="/etomin.png"
                  width={100}
                  height={30}
                  alt={t("logos.etominAlt")}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-100 bg-gradient-to-br from-yellow-50 to-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <h3 className="text-lg font-semibold text-zinc-900">
                {t("summary.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {t("summary.itemsCount", { count: items.length })}
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm text-zinc-600">
                  <span>{t("summary.subtotal")}</span>
                  <span>{formatMoney(totalPrice)}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-zinc-600">
                  <span>{t("summary.discount")}</span>
                  <span>- {formatMoney(discountAmount)}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-zinc-600">
                  <span>{t("summary.tax")}</span>
                  <span>{formatMoney(taxAmount)}</span>
                </div>

                <div className="flex items-center justify-between border-t border-yellow-100 pt-4 text-lg font-semibold text-zinc-900">
                  <span>{t("summary.total")}</span>
                  <span>{formatMoney(totalWithTax)}</span>
                </div>
              </div>

              {appliedCoupon && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-medium text-yellow-700">
                  <TicketPercent className="h-4 w-4" />
                  {t("coupon.appliedShort", {
                    code: appliedCoupon.code,
                    percentage: appliedCoupon.percentage,
                  })}
                </div>
              )}
            </div>
          </div>

          {step === "review" ? (
            <section className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    {t("review.title")}
                  </h2>
                  <p className="text-sm text-zinc-500">
                    {t("review.description")}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-zinc-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          {t("summary.quantityPrefix")} {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-zinc-900">
                          {formatMoney(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-yellow-100 bg-yellow-50/70 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <TicketPercent className="h-4 w-4 text-yellow-700" />
                  {t("review.couponTitle")}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {t("review.couponDescription")}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder={t("review.couponPlaceholder")}
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
                  />

                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
                  >
                    {t("review.applyCoupon")}
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {t("review.availableCoupons")}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {availableCoupons.map((coupon) => (
                      <button
                        key={coupon.code}
                        type="button"
                        onClick={() => setCouponCode(coupon.code)}
                        className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-yellow-300 hover:bg-yellow-50"
                      >
                        <TicketPercent className="h-4 w-4 text-yellow-700" />
                        {coupon.code} · {coupon.percentage}%
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="text-sm text-zinc-500">
                      {appliedCoupon
                        ? t("coupon.appliedAlert", {
                            code: appliedCoupon.code,
                            percentage: appliedCoupon.percentage,
                          })
                        : t("coupon.helper")}
                    </div>

                    {appliedCoupon && (
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="text-sm font-medium text-yellow-700 transition hover:text-yellow-800"
                      >
                        {t("coupon.remove")}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{success}</p>
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedToPayment}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-yellow-200 transition hover:brightness-105"
              >
                {t("review.continueButton")}
              </button>
            </section>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900">
                      {t("form.paymentSectionTitle")}
                    </h2>
                    <p className="text-sm text-zinc-500">
                      {t("form.orderReference")} {orderId}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleBackToReview}
                  className="inline-flex items-center gap-2 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t("buttons.backToReview")}
                </button>
              </div>

              <div className="mb-8 rounded-3xl border border-yellow-100 bg-gradient-to-br from-yellow-50 to-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-zinc-500">{t("summary.subtotal")}</p>
                    <p className="text-lg font-semibold text-zinc-900">
                      {formatMoney(totalPrice)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">{t("summary.discount")}</p>
                    <p className="text-lg font-semibold text-zinc-900">
                      - {formatMoney(discountAmount)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">{t("summary.total")}</p>
                    <p className="text-lg font-semibold text-zinc-900">
                      {formatMoney(totalWithTax)}
                    </p>
                  </div>
                </div>

                {appliedCoupon && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-medium text-yellow-700">
                    <TicketPercent className="h-4 w-4" />
                    {t("coupon.appliedShort", {
                      code: appliedCoupon.code,
                      percentage: appliedCoupon.percentage,
                    })}
                  </div>
                )}
              </div>

              {error && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{success}</p>
                </div>
              )}

              <h3 className="mb-4 text-lg font-semibold text-zinc-900">
                {t("form.cardSectionTitle")}
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label={t("form.fields.firstName.label")}
                  value={form.firstName}
                  onChange={(v) => update("firstName", v)}
                  placeholder={t("form.fields.firstName.placeholder")}
                  autoComplete="given-name"
                />



                <Input
                  label={t("form.fields.lastName.label")}
                  value={form.lastName}
                  onChange={(v) => update("lastName", v)}
                  placeholder={t("form.fields.lastName.placeholder")}
                  autoComplete="family-name"
                />

                <Input
                  label={t("form.fields.email.label")}
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  placeholder={t("form.fields.email.placeholder")}
                  autoComplete="email"
                />

                <Input
                  label={t("form.fields.telefono.label")}
                  type="tel"
                  value={form.telefono}
                  onChange={(v) => update("telefono", v)}
                  placeholder={t("form.fields.telefono.placeholder")}
                  autoComplete="tel"
                />

                <Input
                  label={t("form.fields.city.label")}
                  value={form.city}
                  onChange={(v) => update("city", v)}
                  placeholder={t("form.fields.city.placeholder")}
                  autoComplete="address-level2"
                />

                <Input
                  label={t("form.fields.direccion.label")}
                  value={form.direccion}
                  onChange={(v) => update("direccion", v)}
                  placeholder={t("form.fields.direccion.placeholder")}
                  autoComplete="street-address"
                />

                <Input
                  label={t("form.fields.state.label")}
                  value={form.state}
                  onChange={(v) => update("state", v)}
                  placeholder={t("form.fields.state.placeholder")}
                  autoComplete="address-level1"
                />

                <Input
                  label={t("form.fields.cp.label")}
                  value={form.cp}
                  onChange={(v) => update("cp", v)}
                  placeholder={t("form.fields.cp.placeholder")}
                  autoComplete="postal-code"
                />

                <Input
                  label={t("form.fields.country.label")}
                  value={form.country}
                  onChange={(v) => update("country", v)}
                  placeholder={t("form.fields.country.placeholder")}
                  autoComplete="country-name"
                />

                <div className="md:col-span-2">
                  <Input
                    label={t("form.fields.cardNumber.label")}
                    maxLength={16}
                    value={form.cardNumber}
                    onChange={(v) => update("cardNumber", v)}
                    placeholder={t("form.fields.cardNumber.placeholder")}
                    autoComplete="cc-number"
                  />
                </div>

                <div className="md:col-span-2">
                  <Input
                    label={t("form.fields.cardName.label")}
                    value={form.cardName}
                    onChange={(v) => update("cardName", v)}
                    placeholder={t("form.fields.cardName.placeholder")}
                    autoComplete="cc-name"
                  />
                </div>

                <Select
                  label={t("form.fields.month.label")}
                  value={form.month}
                  onChange={(v) => update("month", v)}
                >
                  <option value="">{t("form.fields.month.placeholder")}</option>
                  {Array.from({ length: 12 }, (_, i) =>
                    String(i + 1).padStart(2, "0")
                  ).map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </Select>

                <Select
                  label={t("form.fields.year.label")}
                  value={form.year}
                  onChange={(v) => update("year", v)}
                >
                  <option value="">{t("form.fields.year.placeholder")}</option>
                  {Array.from({ length: 12 }, (_, i) =>
                    String(new Date().getFullYear() + i)
                  ).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Select>

                <Input
                  label={t("form.fields.cvv.label")}
                  value={form.cvv}
                  onChange={(v) => update("cvv", v)}
                  placeholder={t("form.fields.cvv.placeholder")}
                  type="password"
                  autoComplete="cc-csc"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !items.length}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-yellow-200 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Lock className="h-5 w-5" />
                {loading ? t("buttons.processing") : t("buttons.payNow")}
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}