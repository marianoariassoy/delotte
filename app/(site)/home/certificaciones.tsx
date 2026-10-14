import Title from "@/components/title";
import { getData } from "@/lib/api";

type Text = {
  title: string;
  text: string;
};

type Certificaciones = {
  id: number;
  image: string;
};

export default async function Certificaciones({
  text,
  lang,
}: {
  text: Text;
  lang: string;
}) {
  const data = (await getData("certificaciones", lang)) as Certificaciones[];

  return (
    <div className="flex flex-col gap-y-20 border-t border-black pt-8 mb-40 md:mb-60">
      <Title
        title={lang === "es" ? "Certificaciones" : "Certifications"}
        subtitle={text.text}
      />

      <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto md:mt-20">
        {data.map((logo) => (
          <img
            key={logo.id}
            src={logo.image}
            alt="logo"
            className="max-h-16 md:max-h-24 max-w-24 md:max-w-35 object-contain hover:scale-103 transition-all cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
