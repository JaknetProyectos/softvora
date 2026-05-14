"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useContact } from "@/hooks/useContact";
import {
  X,
  ShieldCheck,
  Mail,
  Phone,
  FileText,
  DollarSign,
} from "lucide-react";
import { useTranslations } from "next-intl";

type ContactField =
  | "nombre"
  | "email"
  | "telefono"
  | "mensaje"
  | "servicioDeseado"
  | "presupuesto"
  | "apellidos"
  | "asunto";

export interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fields?: ContactField[];
  title?: string;
  submitText?: string;
}

const defaultFields: ContactField[] = [
  "nombre",
  "apellidos",
  "email",
  "telefono",
  "asunto",
  "servicioDeseado",
  "presupuesto",
  "mensaje",
];

export function ContactModal({
  open,
  onOpenChange,
  fields = defaultFields,
  title,
  submitText,
}: ContactModalProps) {
  const t = useTranslations("ContactModal");
  const { sendContactForm, isLoading } = useContact();
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
    servicioDeseado: "",
    presupuesto: "",
    asunto: "",
  });

  const visible = useMemo(() => new Set(fields), [fields]);

  const resolvedTitle = title ?? t("title");
  const resolvedSubmitText = submitText ?? t("submitText");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono || undefined,
      mensaje: form.mensaje,
      servicioDeseado: form.servicioDeseado || undefined,
      presupuesto: form.presupuesto || undefined,
      asunto: form.asunto,
    };

    const result = await sendContactForm(payload);

    if (result.success) {
      setForm({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        mensaje: "",
        servicioDeseado: "",
        presupuesto: "",
        asunto: "",
      });
      onOpenChange(false);
    }
  };

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
      {/* BACKDROP */}
      <button
        aria-label={t("closeModal")}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* PANEL */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-yellow-200 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
        {/* LEFT SIDE */}
        <div className="hidden w-[38%] flex-col justify-between bg-gradient-to-br from-yellow-500 via-amber-400 to-orange-500 p-8 text-white lg:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              Softvora
            </div>

            <h2 className="mt-6 max-w-sm text-4xl font-black leading-tight">
              {t("left.title")}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/90">
              {t("left.description")}
            </p>
          </div>

          <div className="space-y-4">
            <InfoLine
              icon={<Mail className="h-4 w-4" />}
              text={t("left.email")}
            />
            <InfoLine
              icon={<Phone className="h-4 w-4" />}
              text={t("left.phone")}
            />
            <InfoLine
              icon={<FileText className="h-4 w-4" />}
              text={t("left.support")}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex w-full flex-col bg-white lg:w-[62%]">
          {/* top bar */}
          <div className="flex items-start justify-between border-b border-yellow-100 px-5 py-5 sm:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-600">
                {t("topBar.label")}
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-zinc-900">
                {resolvedTitle}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                {t("topBar.subtitle")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition hover:border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8">
            <form onSubmit={handleSubmit} className="space-y-5 pb-2">
              <div className="grid gap-5 md:grid-cols-2">
                {visible.has("nombre") && (
                  <Field
                    label={t("fields.nombre.label")}
                    value={form.nombre}
                    onChange={(v) => update("nombre", v)}
                    placeholder={t("fields.nombre.placeholder")}
                  />
                )}

                {visible.has("apellidos") && (
                  <Field
                    label={t("fields.apellidos.label")}
                    value={form.apellidos}
                    onChange={(v) => update("apellidos", v)}
                    placeholder={t("fields.apellidos.placeholder")}
                  />
                )}

                {visible.has("email") && (
                  <Field
                    label={t("fields.email.label")}
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder={t("fields.email.placeholder")}
                    icon={<Mail className="h-4 w-4" />}
                  />
                )}

                {visible.has("telefono") && (
                  <Field
                    label={t("fields.telefono.label")}
                    type="tel"
                    value={form.telefono}
                    onChange={(v) => update("telefono", v)}
                    placeholder={t("fields.telefono.placeholder")}
                    icon={<Phone className="h-4 w-4" />}
                  />
                )}

                {visible.has("asunto") && (
                  <Field
                    label={t("fields.asunto.label")}
                    value={form.asunto}
                    onChange={(v) => update("asunto", v)}
                    placeholder={t("fields.asunto.placeholder")}
                    icon={<FileText className="h-4 w-4" />}
                    className="md:col-span-2"
                  />
                )}
              </div>

              {visible.has("servicioDeseado") && (
                <TextareaField
                  label={t("fields.servicioDeseado.label")}
                  value={form.servicioDeseado}
                  onChange={(v) => update("servicioDeseado", v)}
                  placeholder={t("fields.servicioDeseado.placeholder")}
                />
              )}

              {visible.has("presupuesto") && (
                <Field
                  label={t("fields.presupuesto.label")}
                  value={form.presupuesto}
                  onChange={(v) => update("presupuesto", v)}
                  placeholder={t("fields.presupuesto.placeholder")}
                  icon={<DollarSign className="h-4 w-4" />}
                />
              )}

              {visible.has("mensaje") && (
                <TextareaField
                  label={t("fields.mensaje.label")}
                  value={form.mensaje}
                  onChange={(v) => update("mensaje", v)}
                  placeholder={t("fields.mensaje.placeholder")}
                  rows={6}
                />
              )}

              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-700 transition hover:border-yellow-200 hover:bg-yellow-50"
                >
                  {t("cancel")}
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 px-5 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(234,179,8,0.28)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? t("sending") : resolvedSubmitText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function InfoLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/95">{text}</span>
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  className?: string;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  className = "",
}: FieldProps) {
  return (
    <label className={`block space-y-2 ${className}`}>
      <span className="text-sm font-semibold text-zinc-700">{label}</span>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-yellow-600">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-yellow-300 focus:ring-4 focus:ring-yellow-100 ${
            icon ? "pl-11" : ""
          }`}
        />
      </div>
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}: FieldProps & { rows?: number }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold text-zinc-700">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-yellow-300 focus:ring-4 focus:ring-yellow-100"
      />
    </label>
  );
}

export interface ContactButtonProps {
  fields?: ContactField[];
  title?: string;
  submitText?: string;
  buttonText?: string;
  className?: string;
}

export function ContactButton({
  fields,
  title,
  submitText,
  buttonText,
  className = "",
}: ContactButtonProps) {
  const t = useTranslations("ContactModal");
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(234,179,8,0.28)] transition hover:brightness-105 ${className}`}
      >
        {buttonText ?? t("openButton")}
      </button>

      <ContactModal
        open={open}
        onOpenChange={setOpen}
        fields={fields}
        title={title}
        submitText={submitText}
      />
    </>
  );
}