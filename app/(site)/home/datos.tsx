"use client";
import CountUp from "react-countup";

const datos = ({ lang }: { lang: string }) => {
  const data = [
    {
      number: 50,
      labelEs: "Años de experiencia",
      labelEn: "Years of Experience",
      icon: "/assets/icon1.svg",
    },
    {
      number: 17,
      labelEs: "Hectáreas productivas",
      labelEn: "Productive Areas",
      icon: "/assets/icon2.svg",
    },
    {
      number: 1000,
      labelEs: "Colaboradores en temporada",
      labelEn: "Contributors in Season",
      icon: "/assets/icon3.svg",
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
            <p className="text-4xl md:text-6xl">
              {lang === "es" ? item.labelEs : item.labelEn}
            </p>
            <div className="pl-10 mt-2">
              <img src={item.icon} alt="icono" className="h-40" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default datos;
