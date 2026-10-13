"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { mainMenu } from "@/config/navigation";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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

  return (
    <nav ref={navRef} className="font-medium">
      <ul className="flex flex-col md:flex-row items-center gap-x-16 gap-y-4">
        {mainMenu.map((item) => (
          <li
            key={item.label}
            className="relative flex flex-col justify-center"
          >
            {item.children ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    // Evita que el click suba a elementos padres y dispare otros cierres
                    e.stopPropagation();
                    setOpenMenu(openMenu === item.label ? null : item.label);
                  }}
                  aria-expanded={openMenu === item.label}
                  className="cursor-pointer hover:opacity-50 focus:outline-none text-center z-20"
                >
                  {item.label}
                </button>

                {/* Submenú Desktop */}
                <div
                  className={`absolute w-90 left-0 top-full z-10 mt-8 transition-all grid-cols-2 gap-x-20 hidden md:grid ${
                    openMenu === item.label
                      ? "translate-y-0"
                      : "translate-y-[-200%]"
                  }`}
                >
                  {item.children.map((child) => (
                    <div key={child.label}>
                      {child.href && (
                        <Link
                          href={child.href}
                          className="whitespace-nowrap text-black hover:text-black/50"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenu(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className={`fixed w-full left-0 top-0 h-50 px-4 bg-white transition-all hidden md:block ${
                    openMenu === item.label
                      ? "translate-y-0"
                      : "-translate-y-full"
                  }`}
                >
                  <div className="border-b border-black w-full h-full"></div>
                </div>

                {/* Submenú Móvil */}
                {openMenu === item.label && (
                  <div
                    className="flex flex-col pt-2 md:hidden text-center items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Evita que clics dentro del submenú burbujeen
                  >
                    {item.children.map((child) => (
                      <div key={child.label}>
                        {child.href && (
                          <Link
                            href={child.href}
                            className="whitespace-nowrap text-black hover:text-black/50"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
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
                  onClick={(e) => {
                    setOpenMenu(null);
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
