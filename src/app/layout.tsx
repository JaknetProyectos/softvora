import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Softvora | Consultoría y Servicios de Seguridad Informática",
    template: "%s | Softvora"
  },

  description:
    "Softvora ofrece consultoría en ciberseguridad, auditorías de seguridad informática, pentesting, protección de infraestructura, análisis de vulnerabilidades y soluciones avanzadas para empresas.",

  keywords: [
    "ciberseguridad",
    "seguridad informática",
    "consultoría en ciberseguridad",
    "pentesting",
    "ethical hacking",
    "auditoría de seguridad",
    "análisis de vulnerabilidades",
    "seguridad de redes",
    "protección de datos",
    "seguridad empresarial",
    "servicios de ciberseguridad",
    "SOC",
    "hardening de servidores",
    "seguridad cloud",
    "cybersecurity services",
    "consultoría TI",
    "respuesta a incidentes",
    "Softvora",
    "softvora.com"
  ],

  authors: [{ name: "Softvora" }],
  creator: "Softvora",
  publisher: "Softvora",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL("https://softvora.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Softvora | Expertos en Seguridad Informática y Ciberseguridad",
    description:
      "Protege tu empresa con servicios profesionales de ciberseguridad, pentesting, auditorías y consultoría tecnológica de Softvora.",
    url: "https://softvora.com",
    siteName: "Softvora",
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Softvora | Servicios de Ciberseguridad",
    description:
      "Consultoría y soluciones avanzadas de seguridad informática para empresas y organizaciones.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No definimos lang aquí porque lo hará el layout dinámico
    <html suppressHydrationWarning>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}