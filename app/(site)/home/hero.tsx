const hero = () => {
  return (
    <div className="flex flex-col gap-y-20 mt-14 pt-14 border-t border-black">
      <h1 className="text-3xl md:text-6xl max-w-7xl">
        Producimos, procesamos y comercializamos de forma ingeniosa alimentos
        para el mundo. Integramos producción, servicios y comercialización a
        través de una estructura dinámica y flexible, adaptada a las necesidades
        de nuestros clientes.
      </h1>

      <video
        className="w-full aspect-square md:aspect-video object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/image.webp"
      >
        <source src="/videos/landing-hero-web.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default hero;
