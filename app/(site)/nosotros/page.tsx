import { cookies } from "next/headers";
import Image from "next/image";
import MisionVision from "./misionvision";
import Valores from "./valores";
import Title from "@/components/title";
import { getHomeData } from "@/lib/api";

export default async function Nosotros() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getHomeData(lang);

  return (
    <div className="flex flex-col mt-30 px-4 scroll-m-30">
      <Title
        title={lang === "es" ? "QUIENES SOMOS" : "WHO WE ARE"}
        subtitle={data[5].text}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto pb-20 mt-20">
        <div>
          <Image
            src="https://marianoarias.soy/works/delotte/assets/quienes_somos-1.webp"
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

      <img
        src="https://marianoarias.soy/works/delotte/assets/quienes_somos-2.webp"
        alt="Quienes somos 2"
        className="w-full aspect-square md:aspect-auto object-center object-cover"
      />

      <MisionVision lang={lang} />

      <Valores lang={lang} />
    </div>
  );
}
