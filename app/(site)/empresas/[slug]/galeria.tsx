const Galeria = () => {
  const images = [
    {
      id: 1,
      image: "/images/mision.webp",
      alt: "Galeria 1",
    },
    {
      id: 2,
      image: "/images/vision.webp",
      alt: "Galeria 2",
    },
    {
      id: 3,
      image: "/images/proposito.webp",
      alt: "Galeria 3",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((item, index) => {
          const isPatternStart = index % 3 === 0;

          return (
            <div
              key={item.id}
              className={`overflow-hidden ${
                isPatternStart ? "md:col-span-2 aspect-video" : "aspect-4/5"
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galeria;
