"use client";

import Link from "next/link";
import { mainMenu } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/svgs";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <footer className="px-4">
      <div className="grid md:grid-cols-2 gap-4 border-t border-foreground pt-8 pb-20">
        <div>
          <Link href="/home" className="text-xl mb-4 block">
            <Logo />
          </Link>
          {lang === "es" ? (
            <p>
              Dedicados a la producción
              <br />
              sustentable de alimentos.
            </p>
          ) : (
            <p>
              Dedicated to sustainable food production
              <br />
              sustainable food production
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ul>
            <li className="mb-2">
              <span className="font-bold text-base">
                {lang === "es" ? "Explora" : "Explore"}
              </span>
            </li>
            {mainMenu.map((item) => (
              <li key={item.labelEs}>
                <Link
                  href={item.href ? item.href : "#"}
                  className={`${pathname === item.href ? "opacity-50" : "hover:opacity-50"}`}
                >
                  {lang === "es" ? item.labelEs : item.labelEn}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="mb-2">
              <span className="font-bold text-base">Social</span>
            </li>
            <li>
              <a href="#" className="hover:opacity-50">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-50">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-50">
                Youtube
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <span className="font-bold text-base">
                {lang === "es" ? "Contacto" : "Contact"}
              </span>
            </li>
            <li>
              <p>
                Pedro de Villalba 1338
                <br />
                Yerba Buena, Tucumán, Argentina.
              </p>
            </li>
            <li>
              <a
                href="mailto:info@grupodelotte.com"
                className="hover:opacity-50"
              >
                info@grupodelotte.com
              </a>
            </li>
            <li>(+54 9) 381 4252708</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
