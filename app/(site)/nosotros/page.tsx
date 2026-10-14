import { cookies } from "next/headers";
import Image from "next/image";
import Columnas from "@/components/columnas";
import MisionVision from "./misionvision";
import Valores from "./valores";
import Title from "@/components/title";
import { splitTextInHalf } from "@/lib/utils";
import { getHomeData } from "@/lib/api";

export default async function Nosotros() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getHomeData(lang);

  const [parte1, parte2] = splitTextInHalf(data[7].text);

  return (
    <div className="flex flex-col mt-30 px-4">
      {/* <Title
        title={lang === "es" ? "QUIENES SOMOS" : "WHO WE ARE"}
        subtitle="Somos un grupo empresario dedicado a la producción de alimentos y a la
        generación de soluciones innovadoras en el mercado."
      /> */}
      <Title
        title={lang === "es" ? "QUIENES SOMOS" : "WHO WE ARE"}
        subtitle={data[5].text}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto pb-20 mt-20">
        <div>
          <Image
            src="/images/quienes_somos-1.webp"
            alt="Quienes somos 1"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-xl md:text-3xl font-medium">{data[6].text}</p>
        </div>
      </div>

      <Columnas
        title={lang === "es" ? "NUESTRA HISTORIA" : "OUR HISTORY"}
        textLeft={parte1}
        textRight={parte2}
      />

      <img
        src="/images/quienes_somos-2.webp"
        alt="Quienes somos 2"
        className="w-full aspect-square md:aspect-auto object-center object-cover mt-20"
      />

      <MisionVision lang={lang} />

      <Valores lang={lang} />
    </div>
  );
}
