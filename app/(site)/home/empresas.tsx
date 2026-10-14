import { getData } from "@/lib/api";
import Link from "next/link";

type Data = {
  id: number;
  title: string;
  slug: string;
  logo: string;
  logoEmpresas: string;
};

export default async function Empresas({ lang }: { lang: string }) {
  const data = (await getData("empresas", lang)) as Data[];

  return (
    <div className="flex flex-col border-t border-black pt-8">
      <h2 className="font-bold mb-20">
        {lang === "es" ? "NUESTRAS EMPRESAS" : "OUR COMPANIES"}
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 max-w-6xl mx-auto items-stretch">
        {/* Imagen principal (Grupo Delotte) - Ocupa 2 columnas y 2 filas en pantallas medianas en adelante */}

        <img
          src="/images/Elementos-03.svg"
          alt="Grupo Delotte"
          className="w-full h-full object-cover col-span-2 md:col-span-2 md:row-span-2"
        />

        {data.map((item) => (
          <Link
            key={item.id}
            href={`/empresas/${item.slug}`}
            className="hover:opacity-50 transition-all"
          >
            <img
              src={item.logo}
              alt={item.title}
              className="w-full col-span-2 md:col-span-2 md:row-span-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
