import Image from "next/image";
import Columnas from "@/components/columnas";
import MisionVision from "./misionvision";
import Valores from "./valores";
import Title from "@/components/title";

const actividades = () => {
  return (
    <div className="flex flex-col mt-30 px-4">
      <Title
        title="QUIENES SOMOS"
        subtitle="Somos un grupo empresario dedicado a la producción de alimentos y a la
        generación de soluciones innovadoras en el mercado."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto pb-20 mt-20">
        <div>
          <Image
            src="/images/quienes_somos-1.webp"
            alt="Quienes somos 1"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-xl md:text-3xl font-medium">
            Producimos, procesamos y comercializamos de forma ingeniosa
            alimentos para el mundo. Integramos producción, servicios y
            comercialización a través de una estructura dinámica y flexible,
            adaptada a las necesidades de nuestros clientes. La confianza, el
            cumplimiento y la construcción de relaciones de largo plazo
            acompañan la evolución y crecimiento de nuestras actividades,
            impulsados por la innovación constante.
          </p>
        </div>
      </div>

      <Columnas
        title="NUESTRA HISTORIA"
        textLeft="Nuestra historia comienza en el año XXXX, somos herederos de la pasión
          por la agricultura y de una visión marcada por el trabajo, el
          crecimiento y el desarrollo de nuestro país.
      
          Nuestro origen se remonta a un agricultor y aviador, hijo de
          inmigrantes italianos, que sobrevolando las tierras del norte
          argentino quedó asombrado por las acequias de “La Invernada”. Ese
          campo no solo fue el lugar donde comenzaron nuestras primeras
          producciones en Tucumán, sino también el espacio donde distintas
          generaciones familiares crecieron y desarrollaron sus vidas."
        textRight="Desde entonces, cuatro generaciones acompañaron la evolución del Grupo
          con un espíritu emprendedor impulsado por el afán de crecer y
          diversificarse, adaptándose activamente a las tendencias del mercado.
         
          Ese impulso llevó al Grupo a ser pionero en nuevas formas de
          producción, incorporando la innovación como parte de la esencia de
          nuestra gente. Hoy producimos alimentos para el mundo, manteniendo un
          compromiso sostenido con el crecimiento, la innovación, y nuestra
          gente."
      />

      <img
        src="/images/quienes_somos-2.webp"
        alt="Quienes somos 2"
        className="w-full aspect-square md:aspect-auto object-center object-cover mt-20"
      />

      <MisionVision />

      <Valores />
    </div>
  );
};

export default actividades;
