import { cookies } from "next/headers";
import Title from "@/components/title";
import ChangeColors from "@/components/changeColors";

export default async function Contactanos() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";

  return (
    <div className="flex flex-col gap-y-20 mt-17 px-4 bg-background text-foreground">
      <ChangeColors page="contactanos" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 pr-4 md:border-r border-black">
          <h1 className="font-medium text-4xl md:text-6xl">
            {lang === "es" ? "Contactanos" : "Contact Us"}
          </h1>
        </div>
        <div className="pt-12 md:px-4 border-t md:border-0 border-black pb-60">
          <h2 className="font-medium uppercase">Grupo Delotte</h2>
          <div className="flex flex-col text-2xl md:text-3xl font-medium mb-8">
            <p>
              Pedro de Villalba 1338
              <br />
              Yerba Buena, Tucumán, Argentina.
            </p>

            <a href="mailto:info@grupodelotte.com" className="hover:opacity-50">
              info@grupodelotte.com
            </a>

            <p>(+54 9) 381 4252708</p>
          </div>
          <h2 className="font-medium uppercase">Social</h2>
          <div className="flex flex-col text-2xl md:text-3xl font-medium">
            <a href="#" className="hover:opacity-50">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
