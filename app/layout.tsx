import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { cookies } from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const initialLang = (cookieStore.get("lang")?.value as "es" | "en") || "es";

  return (
    <html lang={initialLang}>
      <body className={`${satoshi.variable} antialiased `}>
        <main>
          <LanguageProvider initialLang={initialLang}>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}
