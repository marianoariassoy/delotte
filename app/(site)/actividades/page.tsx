import { cookies } from "next/headers";
import ProductosServicios from "./productosyservicios";
import Columnas from "@/components/columnas";
import { splitTextInHalf } from "@/lib/utils";
import { getHomeData } from "@/lib/api";

export default async function Actividades() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getHomeData(lang);

  const [parte1, parte2] = splitTextInHalf(data[8].text);

  return (
    <div className="flex flex-col gap-y-20 mt-17 px-4">
      <Columnas
        title={lang === "es" ? "NUESTRAS ACTIVIDADES" : "OUR ACTIVITIES"}
        textLeft={parte1}
        textRight={parte2}
      />

      <ProductosServicios lang={lang} />
    </div>
  );
}
