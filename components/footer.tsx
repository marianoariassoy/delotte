"use client";

import Image from "next/image";
import Link from "next/link";
import { mainMenu } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/svgs";

export default function Home() {
  const pathname = usePathname();

  return (
    <footer className="px-4">
      <div className="grid md:grid-cols-2 gap-4 border-t border-foreground pt-8 pb-20">
        <div>
          <Link href="/home" className="text-xl mb-4 block">
            <Logo />
          </Link>
          <p>
            Dedicados a la producción
            <br />
            sustentable de alimentos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ul>
            <li className="mb-2">
              <span className="font-bold text-base">Explora</span>
            </li>
            {mainMenu.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ? item.href : "#"}
                  className={`${pathname === item.href ? "opacity-50" : "hover:opacity-50"}`}
                >
                  {item.label}
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
              <span className="font-bold text-base">Contacto</span>
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
