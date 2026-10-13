const misionvision = () => {
  const data = [
    {
      number: "01",
      title: "Propósito",
      description:
        "Impulsar un modelo de producción sustentable que integre soluciones innovadoras, adaptándose rápidamente a las necesidades globales y agregando valor en toda la cadena.",
      image: "/images/proposito.webp",
    },
    {
      number: "02",
      title: "Visión",
      description:
        "Ser la empresa de confianza en la producción de alimentos para satisfacer la demanda global, brindando soluciones innovadoras en la elaboración de bienes para consumo de forma sustentable.",
      image: "/images/vision.webp",
    },
    {
      number: "03",
      title: "Propósito",
      description:
        "Abastecer el mercado con alimentos produciendo bienes de calidad, apoyándonos en nuestra gente y valores, a través de la innovación y de soluciones sustentables.",
      image: "/images/proposito.webp",
    },
  ];
  return (
    <div className="flex flex-col gap-y-20 mt-20 md:mt-30 pt-14 border-t border-black">
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12  mx-auto border-b border-black pb-20"
        >
          <div className="flex flex-col gap-4 justify-between">
            <div className="text-6xl md:text-[8rem]">{item.number}</div>
            <div>
              <h1 className="font-semibold text-4xl md:text-5xl mb-8">
                {item.title}
              </h1>
              <p className="text-xl md:text-3xl font-medium">
                {item.description}
              </p>
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
};

export default misionvision;
