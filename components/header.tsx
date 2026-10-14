"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./menu";
import Lan from "./lan";
import { Logo } from "@/components/svgs";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-4 pb-0 ${isScrolled ? "bg-background" : "bg-transparent"}`}
    >
      <div
        className={`flex justify-between gap-4 items-center border-foreground pb-4 ${pathname === "/actividades" ? "" : "border-b"}`}
      >
        {/* Logo */}
        <div className="hover:pl-1 transition-all z-20">
          <Link href="/home" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
        </div>

        {/* Menú Desktop (pantallas md en adelante) */}
        <div className="hidden md:flex items-center gap-10 lg:gap-40 ">
          <Menu />
          <Lan />
        </div>

        {/* Botón Hamburgesa (pantallas chicas) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden hover:text-black/50 focus:outline-none z-50"
        >
          {isOpen ? (
            // Ícono de Cerrar (X)
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ícono Hamburguesa
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desplegable Móvil */}
        <div
          className={`fixed inset-x-0 top-16 ${!isScrolled && pathname.includes("/empresas") ? "bg-transparent" : "bg-background"} p-4 flex flex-col gap-6 items-center transition-all duration-300 ease-in-out md:hidden -z-10 ${
            isOpen
              ? "translate-y-0 pointer-events-auto"
              : "translate-y-[-130%] pointer-events-none"
          }`}
        >
          <div onClick={() => setIsOpen(false)}>
            <Menu />
          </div>
          <div className="pt-4 border-t border-foreground w-full flex justify-center">
            <Lan />
          </div>
        </div>
      </div>
    </header>
  );
}
