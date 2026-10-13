import Title from "@/components/title";

const hero = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <Title
        title=""
        subtitle="Producimos, procesamos y comercializamos de forma ingeniosa alimentos
        para el mundo. Integramos producción, servicios y comercialización a
        través de una estructura dinámica y flexible, adaptada a las necesidades
        de nuestros clientes."
      />
      <video
        className="w-full aspect-square md:aspect-video object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/landing-hero-web.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default hero;
