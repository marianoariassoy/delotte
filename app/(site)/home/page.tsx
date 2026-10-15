import { cookies } from "next/headers";
import Empresas from "./empresas";
import Hero from "./hero";
import Actividades from "./actividades";
import Datos from "./datos";
import Certificaciones from "./certificaciones";
import { getHomeData } from "@/lib/api";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getHomeData(lang);

  return (
    <section
      className="flex flex-col gap-y-30 px-4 mt-20 scroll-m-30"
      id="home"
    >
      <Hero data={data[0]} />
      <Actividades data={data} lang={lang} />
      <Datos lang={lang} />
      <Empresas lang={lang} />
      <Certificaciones text={data[4]} lang={lang} />
    </section>
  );
}
