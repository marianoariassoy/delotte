import { getData } from "@/lib/api";

type Data = {
  title: string;
  subtitle: string;
  text: string;
};

export default async function Valores({ lang }: { lang: string }) {
  const data = (await getData("valores", lang)) as Data[];

  return (
    <div className="grid md:grid-cols-2 pb-20 md:pb-0 ">
      <div className="py-8 md:py-20 md:border-r border-black">
        <h1 className="font-bold mb-4">
          {lang === "es" ? "NUESTROS VALORES" : "OUR VALUES"}
        </h1>
        <div className="flex flex-col gap-y-8">
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {index + 1}. {item.title}
              </h2>
              <div>
                <h3 className="text-2xl md:text-4xl font-medium">
                  {item.subtitle}
                </h3>
                <p className="text-xl md:text-3xl font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-20 md:pt-20 md:pb-60 flex flex-col gap-y-8">
        {data.slice(2, data.length).map((item, index) => (
          <div key={index} className="flex flex-col gap-y-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {index + 3}. {item.title}
            </h2>
            <div>
              <h3 className="text-2xl md:text-4xl font-medium">
                {item.subtitle}
              </h3>
              <p className="text-xl md:text-3xl font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
