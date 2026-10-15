import { cookies } from "next/headers";
import Title from "@/components/title";
import Inscripciones from "./inscripciones";
import ChangeColors from "@/components/changeColors";
import { getHomeData } from "@/lib/api";

export default async function Talentos() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const data = await getHomeData(lang);

  return (
    <div className="flex flex-col gap-y-20 mt-30 px-4 min-h-screen bg-background text-foreground">
      <ChangeColors page="talentos" />

      <Title
        title={lang === "es" ? "TRABAJÁ CON NOSOTROS" : "WORK WITH US"}
        subtitle={data[9].text}
      />

      <Inscripciones lang={lang} />
    </div>
  );
}
