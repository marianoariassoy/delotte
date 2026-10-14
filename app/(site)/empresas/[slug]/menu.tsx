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
    <div>
      <h1 className="font-bold">NUESTRAS EMPRESAS</h1>

      <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto mt-12 md:mt-20">
        {data.map((logo) => (
          <Link key={logo.id} href={`/empresas/${logo.slug}`}>
            <img
              src={logo.logo}
              alt={logo.title}
              className="max-w-24 md:max-w-70 saturate-0 transition-all hover:saturate-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
