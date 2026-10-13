import Title from "@/components/title";
import Columnas from "@/components/columnas";
import Galeria from "./galeria";
import Menu from "./menu";

const page = () => {
  return (
    <div className="flex flex-col gap-y-20 pb-20">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="absolute z-10 w-50 h-50 bg-amber-400">Logo</div>
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/image.webp"
        >
          <source src="/videos/hero-web.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col px-4 gap-y-20">
        <Title
          title="SERVICIOS Y NEGOCIOS"
          subtitle="Somos una planta de acopio y acondicionamiento de granos
          convencionales y orgánicos."
        />

        <Columnas
          title="NUESTRAS ACTIVIDADES"
          textLeft=""
          textRight="Brindando servicios para la producción del Grupo y de
terceros.
La incorporación permanente de infraestructura, tecnología
y certificando los estándares de calidad nos permite
acompañar las demandas de distintos mercados y fortalecer
la trazabilidad de nuestras operaciones."
        />

        <Galeria />

        <Columnas
          title="NUESTRAS ACTIVIDADES"
          textLeft=""
          textRight="Recibimos y acondicionamos soja, maíz, trigo y girasol."
        />

        <Menu />
      </div>
    </div>
  );
};

export default page;
