import Image from "next/image";
import Title from "@/components/title";

type Data = {
  title: string;
  text: string;
}[];

const actividades = ({ data, lang }: { data: Data; lang: string }) => {
  return (
    <div className="flex flex-col gap-y-20 border-t border-black pt-8">
      <Title
        title={lang === "es" ? "NUESTRAS ACTIVIDADES" : "OUR ACTIVITIES"}
        subtitle={data[1].text}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
        <div>
          <Image
            src="/assets/landing-actividades-1.webp"
            alt="Actividad 1"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-xl md:text-3xl font-medium">{data[2].text}</p>
        </div>
        <div>
          <Image
            src="/assets/landing-actividades-2.webp"
            alt="Actividad 2"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-medium">{data[3].text}</p>
        </div>
      </div>
    </div>
  );
};

export default actividades;
