import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo Delotte",
  description:
    "Producimos, procesamos y comercializamos de forma ingeniosa alimentos para el mundo. Integramos producción, servicios y comercialización a través de una estructura dinámica y flexible, adaptada a las necesidades de nuestros clientes.",
  icons: {
    icon: "/assets/icono.svg",
    shortcut: "/assets/icono.svg",
    apple: "/assets/icono.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className={`${satoshi.variable} antialiased`}>{children}</body>
    </html>
  );
}
