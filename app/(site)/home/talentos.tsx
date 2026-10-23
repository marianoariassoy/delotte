import Title from "@/components/title";
import Inscripciones from "../talentos/inscripciones";
import { getHomeData } from "@/lib/api";

export default async function Talentos({ lang }: { lang: "es" | "en" }) {
  const data = await getHomeData(lang);

  return (
    <div className="flex flex-col gap-y-20 bg-background text-foreground">
      <Title
        title={lang === "es" ? "TRABAJÁ CON NOSOTROS" : "WORK WITH US"}
        subtitle={data[9].text}
      />

      <Inscripciones lang={lang} />
    </div>
  );
}
