const certificaciones = () => {
  const logos = [
    {
      title: "Orgánico Argentina",
      image: "/logos/organico.jpg",
    },
    {
      title: "Logo 2",
      image: "/logos/logo2.jpg",
    },
    {
      title: "USDA Organic",
      image: "/logos/usda.png",
    },
    {
      title: "Global G.A.P.",
      image: "/logos/global.png",
    },
    {
      title: "HACCP",
      image: "/logos/Haccp.jpg",
    },
    {
      title: "JAS",
      image: "/logos/jas.png",
    },
    {
      title: "Kosher",
      image: "/logos/kosher.png",
    },

    {
      title: "Orgánico Brasil",
      image: "/logos/organico-brasil.jpg",
    },

    {
      title: "Primus GFS",
      image: "/logos/primus.png",
    },
    {
      title: "Sedex",
      image: "/logos/sedex.jpg",
    },
  ];

  return (
    <div className="flex flex-col border-t border-black pt-8 mb-40 md:mb-60">
      <h2 className="font-bold text-sm">CERTIFICACIONES</h2>
      <h1 className="text-3xl md:text-6xl max-w-7xl mt-2 mb-40">
        Trabajamos bajo estándares internacionales que garantizan la calidad,
        trazabilidad y sustentabilidad de nuestros procesos, productos y
        servicios, facilitando su llegada a los principales mercados del mundo.
      </h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-20 max-w-5xl mx-auto">
        {logos.map((logo) => (
          <img
            key={logo.title}
            src={logo.image}
            alt="logo"
            className="max-h-16 md:max-h-24 max-w-24 md:max-w-35 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default certificaciones;
