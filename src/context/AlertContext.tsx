"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

import {
  X,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

import Image from "next/image";

export type AlertType = "error" | "success" | "warning" | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

const typeStyles = {
  success: {
    glow: "from-yellow-400/20 via-amber-300/10 to-transparent",
    iconBg:
      "bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500",
    button:
      "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 hover:scale-[1.02]",
    border: "border-yellow-200",
    icon: <CheckCircle2 className="h-10 w-10 text-white" />,
  },

  error: {
    glow: "from-red-400/20 via-orange-300/10 to-transparent",
    iconBg: "bg-gradient-to-br from-red-500 to-orange-500",
    button:
      "bg-gradient-to-r from-red-500 to-orange-500 hover:scale-[1.02]",
    border: "border-red-200",
    icon: <AlertCircle className="h-10 w-10 text-white" />,
  },

  warning: {
    glow: "from-amber-400/20 via-yellow-300/10 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500",
    button:
      "bg-gradient-to-r from-amber-400 to-yellow-500 hover:scale-[1.02]",
    border: "border-yellow-200",
    icon: <AlertTriangle className="h-10 w-10 text-white" />,
  },

  info: {
    glow: "from-yellow-400/20 via-amber-200/10 to-transparent",
    iconBg:
      "bg-gradient-to-br from-yellow-500 via-amber-400 to-orange-400",
    button:
      "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-400 hover:scale-[1.02]",
    border: "border-yellow-200",
    icon: <Info className="h-10 w-10 text-white" />,
  },
};

export function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [options, setOptions] = useState<AlertOptions | null>(null);

  const showAlert = useCallback((opts: AlertOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsOpen(false);

    if (options?.onClose) {
      options.onClose();
    }
  }, [options]);

  const type = options?.type || "info";

  const styles = typeStyles[type];

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      {isOpen && options && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-5">
          {/* BACKDROP */}
          <div
            onClick={hideAlert}
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          />

          {/* MODAL */}
          <div
            className={`relative w-full max-w-lg overflow-hidden rounded-[2rem] border bg-white shadow-[0_30px_120px_rgba(0,0,0,0.35)] animate-in zoom-in-95 duration-200 ${styles.border}`}
          >
            {/* TOP GLOW */}
            <div
              className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${styles.glow}`}
            />

            {/* CLOSE */}
            <button
              type="button"
              onClick={hideAlert}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-500 backdrop-blur transition hover:rotate-90 hover:bg-zinc-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10 p-8 sm:p-10">
              {/* SECURITY BADGE */}
              <div className="mb-6 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-700">
                  <ShieldCheck className="h-4 w-4" />
                  Softvora
                </div>
              </div>

              {/* ICON */}
              <div className="mb-7 flex justify-center">
                <div
                  className={`relative flex h-24 w-24 items-center justify-center rounded-[2rem] shadow-2xl ${styles.iconBg}`}
                >
                  {/* glow */}
                  <div className="absolute inset-0 rounded-[2rem] bg-white/10" />

                  <div className="relative z-10">
                    {options.icon || styles.icon}
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              {options.image && (
                <div className="relative mb-7 overflow-hidden rounded-3xl border border-yellow-100 shadow-lg">
                  <Image
                    src={options.image}
                    alt="Alert image"
                    width={900}
                    height={500}
                    className="h-56 w-full object-cover"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="text-center">
                <h3 className="text-3xl font-black tracking-tight text-zinc-900">
                  {options.title}
                </h3>

                <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-zinc-600">
                  {options.message}
                </p>
              </div>

              {/* DIVIDER */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />

              {/* BUTTON */}
              <button
                type="button"
                onClick={hideAlert}
                className={`group relative flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-4 text-base font-bold text-white shadow-[0_15px_35px_rgba(234,179,8,0.35)] transition-all duration-300 ${styles.button}`}
              >
                {/* shine */}
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

                <span className="relative z-10">
                  {options.confirmText || "Continuar"}
                </span>
              </button>

              {/* FOOTER TEXT */}
              <div className="mt-5 text-center">
                <span className="text-xs text-zinc-400">
                  softvora.com
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error(
      "useAlert debe ser utilizado dentro de AlertProvider"
    );
  }

  return context;
};