"use client";

import { useState } from "react";

import { useAlert } from "@/context/AlertContext";

import {
  useLocale,
  useTranslations,
} from "next-intl";

interface ContactData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
  servicioDeseado?: string;
  presupuesto?: string;
  asunto: string;
}

export function useContact() {
  const [isLoading, setIsLoading] =
    useState(false);

  const { showAlert } = useAlert();

  const locale = useLocale();

  const t = useTranslations("Contact");

  const sendContactForm = async (
    data: ContactData
  ) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `/${locale ?? "es"}/api/contacto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            t("alerts.errors.sendFailed")
        );
      }

      showAlert({
        title: t("alerts.success.title"),
        message: t("alerts.success.message"),
        confirmText: t(
          "alerts.success.confirmText"
        ),
      });

      return { success: true };
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : t("alerts.errors.unknown");

      showAlert({
        title: t("alerts.errors.title"),
        message: errorMessage,
        confirmText: t(
          "alerts.errors.confirmText"
        ),
      });

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendContactForm,
    isLoading,
  };
}


/**
{
  "Contact": {
    "alerts": {
      "success": {
        "title": "¡Mensaje enviado!",
        "message": "Gracias por contactarnos. Un especialista de Softvora te responderá pronto.",
        "confirmText": "Excelente"
      },
      "errors": {
        "title": "Error de envío",
        "sendFailed": "No se pudo enviar el mensaje",
        "unknown": "Ocurrió un error inesperado",
        "confirmText": "Reintentar"
      }
    }
  }
}

{
  "Contact": {
    "alerts": {
      "success": {
        "title": "Message sent!",
        "message": "Thank you for contacting us. A Softvora specialist will reach out to you shortly.",
        "confirmText": "Great"
      },
      "errors": {
        "title": "Sending error",
        "sendFailed": "Failed to send the message",
        "unknown": "An unexpected error occurred",
        "confirmText": "Retry"
      }
    }
  }
}
 */