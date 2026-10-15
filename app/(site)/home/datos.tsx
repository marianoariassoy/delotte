"use client";
import CountUp from "react-countup";

const datos = ({ lang }: { lang: string }) => {
  const data = [
    {
      number: 50,
      labelEs: "Años de experiencia",
      labelEn: "Years of Experience",
    },
    {
      number: 17,
      labelEs: "Hectáreas productivas",
      labelEn: "Productive Areas",
    },
    {
      number: 1000,
      labelEs: "Colaboradores en temporada",
      labelEn: "Contributors in Season",
    },
  ];

  return (
    <div className="flex flex-col border-t border-black pt-8">
      <h2 className="font-bold mb-20">
        {lang === "es" ? "NUESTROS DATOS" : "OUR DATA"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-12 max-w-7xl mx-auto">
        {data.map((item) => (
          <div key={item.labelEs} className="flex flex-col gap-y-2">
            <div className="text-5xl md:text-7xl">
              +
              <CountUp
                end={item.number}
                duration={2}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              {item.number === 17 && "mil"}
            </div>
            <p className="text-3xl md:text-6xl">
              {lang === "es" ? item.labelEs : item.labelEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default datos;
