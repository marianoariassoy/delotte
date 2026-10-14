import Title from "@/components/title";
import Columnas from "@/components/columnas";
import Galeria from "./galeria";
import Menu from "./menu";
import { getDataBySlug } from "@/lib/api";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getDataBySlug("empresas", slug, lang);

  console.log(data);

  return (
    <div className="flex flex-col gap-y-20 pb-20">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="absolute z-10">
          {data.image && (
            <img alt="Logo" className="w-40 md:w-60" src={data.image} />
          )}
        </div>

        {data.video && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={data.video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="flex flex-col px-4 gap-y-20">
        <Title title={data.title} subtitle={data.subtitle} />

        <Columnas
          title={lang === "es" ? "QUÉ HACEMOS" : "WHAT WE DO"}
          textLeft=""
          textRight={data.text}
        />

        <Galeria images={data.images} />

        <Columnas
          title={lang === "es" ? "NUESTRAS ACTIVIDADES" : "OUR ACTIVITIES"}
          textLeft=""
          textRight={data.text2}
        />

        <Menu lang={lang} />
      </div>
    </div>
  );
}
