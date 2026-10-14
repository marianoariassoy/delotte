import { getData } from "@/lib/api";
import EmpresasNav from "./menuNav"; // Asegúrate de importar el componente cliente

type Data = {
  id: number;
  title: string;
  slug: string;
  logo: string;
  logoOff: string;
  logoMenu: string;
};

export default async function Empresas({ lang }: { lang: string }) {
  const data = (await getData("empresas", lang)) as Data[];

  return (
    <div>
      <h1 className="font-bold">
        {lang === "es" ? "NUESTRAS EMPRESAS" : "OUR COMPANIES"}
      </h1>
      <EmpresasNav data={data} />
    </div>
  );
}
