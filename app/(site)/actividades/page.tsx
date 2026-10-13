import ProductosServicios from "./productosyservicios";
import Columnas from "@/components/columnas";

const page = () => {
  return (
    <div className="flex flex-col gap-y-20 mt-17 px-4">
      <Columnas
        title="NUESTRAS ACTIVIDADES"
        textLeft="Producimos y brindamos servicios para integrar la cadena de valor de
          los alimentos. Cultivamos commodities, especialidades y productos
          propios de nuestra región, de manera convencional, no GMO, y con
          mirada regenerativa."
        textRight="Integramos la cadena productiva con servicios de grower de maíz
          semilla y multiplicación de soja semilla, riego, administración,
          acondicionamiento de granos y legumbres, acopio de cereales y empaque
          de cítricos, hasta la cosecha, comercialización y la exportación,
          conectando nuestra producción con mercados de Europa, Asia y América."
      />

      <ProductosServicios />
    </div>
  );
};

export default page;
