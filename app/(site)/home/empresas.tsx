import { getData } from "@/lib/api";
import Link from "next/link";

type Data = {
  id: number;
  title: string;
  slug: string;
  logo: string;
  logoOff: string;
};

export default async function Empresas({ lang }: { lang: string }) {
  const data = (await getData("empresas", lang)) as Data[];

  return (
    <div className="flex flex-col border-t border-black pt-8">
      <h2 className="font-bold mb-20">
        {lang === "es" ? "NUESTRAS EMPRESAS" : "OUR COMPANIES"}
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 max-w-6xl mx-auto items-stretch">
        {/* Imagen principal estática */}
        <img
          src="/assets/home-icon1.svg"
          alt="Grupo Delotte"
          className="w-full h-full object-cover col-span-2 md:col-span-2 md:row-span-2"
        />

        {data.map((item) => (
          <Link
            key={item.id}
            href={`/empresas/${item.slug}`}
            className="relative block group"
          >
            {/* Imagen por defecto (se oculta al hacer hover en el Link) */}
            <img
              src={item.logo}
              alt={item.title}
              className="w-full h-full object-contain  group-hover:opacity-0"
            />
            {/* Imagen de hover (aparece al hacer hover en el Link) */}
            <img
              src={item.logoOff}
              alt={item.title}
              className="w-full h-full object-contain absolute inset-0 opacity-0  group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
