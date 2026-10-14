import { getData } from "@/lib/api";

type Data = {
  title: string;
  text: string;
  image: string;
};

export default async function Nosotros({ lang }: { lang: string }) {
  const data = (await getData("nosotros", lang)) as Data[];

  return (
    <div className="flex flex-col gap-y-20 mt-20 md:mt-30 pt-14 border-t border-black">
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12  mx-auto border-b border-black pb-20"
        >
          <div className="flex flex-col gap-4 justify-between">
            <div className="text-6xl md:text-[8rem]">0{index + 1}</div>
            <div>
              <h1 className="font-semibold text-4xl md:text-5xl mb-8">
                {item.title}
              </h1>
              <p className="text-xl md:text-3xl font-medium">{item.text}</p>
            </div>
          </div>
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
