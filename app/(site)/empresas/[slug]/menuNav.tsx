"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/svgs";

type Data = {
  id: number;
  title: string;
  slug: string;
  logo: string;
  logoOff: string;
  logoMenu: string;
};

export default function EmpresasNav({ data }: { data: Data[] }) {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto mt-12 md:mt-20">
      <Link href="/nosotros">
        <div className="text-[1.1rem] md:text-[1.4rem] transition-all opacity-80 hover:text-[#9CB5F4] hover:opacity-100">
          <Logo />
        </div>
      </Link>

      {data.map((logo) => {
        // Comparamos si la ruta actual incluye el slug de la empresa
        const isActive = pathname.includes(`/empresas/${logo.slug}`);

        return (
          <Link
            key={logo.id}
            href={`/empresas/${logo.slug}`}
            className="relative"
          >
            <img
              src={logo.logoMenu}
              alt={logo.title}
              className={`h-10 md:h-14 transition-all ${
                isActive
                  ? "saturate-100 brightness-100 opacity-100 scale-105" // Estilo cuando está seleccionado
                  : "saturate-0 brightness-0 opacity-80 hover:saturate-100 hover:brightness-100 hover:opacity-100" // Estilo normal con hover
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
