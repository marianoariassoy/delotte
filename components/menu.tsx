"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainMenu } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Submenu from "./submenu";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [windowScroll, setWindowScroll] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { lang } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="font-medium">
      <ul className="flex flex-col md:flex-row items-center gap-x-16 gap-y-4">
        {mainMenu.map((item, index) => (
          <li key={index} className="relative flex flex-col justify-center">
            {item.children ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(
                      openMenu === item.labelEs ? null : item.labelEs,
                    );
                  }}
                  aria-expanded={openMenu === item.labelEs}
                  className="cursor-pointer hover:opacity-50 focus:outline-none text-center z-20"
                >
                  {lang === "es" ? item.labelEs : item.labelEn}
                </button>

                {/* Submenú Desktop */}
                <div
                  className={`absolute w-90 left-0 top-full z-10 mt-11 transition-all grid-cols-2 gap-x-20 hidden md:grid ${
                    openMenu === item.labelEs
                      ? "translate-y-0"
                      : "translate-y-[-220%]"
                  }`}
                >
                  <Submenu lang={lang} setOpenMenu={setOpenMenu} />
                </div>

                <div
                  className={`fixed w-full left-0 top-0 h-48 px-4 transition-all hidden md:block ${
                    openMenu === item.labelEs
                      ? "translate-y-0"
                      : "-translate-y-full"
                  } ${pathname.includes("/empresas") && !windowScroll ? "bg-transparent" : "bg-background"}`}
                >
                  <div className="border-b border-foreground w-full h-full"></div>
                </div>

                {/* Submenú Móvil */}
                {openMenu === item.labelEs && (
                  <div
                    className="flex flex-col pt-2 md:hidden text-center items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Evita que clics dentro del submenú burbujeen
                  >
                    <Submenu lang={lang} setOpenMenu={setOpenMenu} />
                  </div>
                )}
              </>
            ) : (
              item.href && (
                <Link
                  className={`z-20 ${
                    pathname === item.href ? "opacity-50" : "hover:opacity-50"
                  }`}
                  href={item.href}
                  onClick={() => {
                    setOpenMenu(null);
                  }}
                >
                  {lang === "es" ? item.labelEs : item.labelEn}
                </Link>
              )
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
