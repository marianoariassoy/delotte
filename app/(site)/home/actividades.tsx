import Image from "next/image";

const actividades = () => {
  return (
    <div className="flex flex-col border-t border-black pt-8 md:px-4">
      <h2 className="font-bold text-sm">NUESTRAS ACTIVIDADES</h2>
      <h1 className="text-3xl md:text-6xl max-w-7xl mt-2 mb-12">
        Producimos commodities, especialidades y cultivos característicos de las
        regiones en las que estamos presentes.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
        <div>
          <Image
            src="/images/landing-actividades-1.webp"
            alt="Actividad 1"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-xl md:text-3xl font-medium">
            Trabajamos con sistemas de producción convencionales y no GMO,
            incorporando una mirada regenerativa en el cuidado del suelo y en el
            desarrollo de nuestros propios bioinsumos. Integramos la cadena de
            valor a través de servicios que comprenden desde la producción,
            acondicionamiento, acopio y empaque, hasta la administración,
            comercialización y exportación. Así, conectamos nuestra producción
            con los principales mercados de Europa, Asia y América.
          </p>
        </div>
        <div>
          <Image
            src="/images/landing-actividades-2.webp"
            alt="Actividad 2"
            className="aspect-square md:aspect-4/5 object-center object-cover w-full h-full"
            width={1920}
            height={1920}
          />
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-medium">
            La sostenibilidad, la integración vertical y la diversificación, son
            pilares que orientan nuestra gestión y nuestro crecimiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default actividades;
