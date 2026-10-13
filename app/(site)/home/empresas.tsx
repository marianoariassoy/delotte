export default function Empresas() {
  return (
    <div className="flex flex-col border-t border-black pt-8">
      <h2 className="font-bold mb-20">NUESTRAS EMPRESAS</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 max-w-6xl mx-auto items-stretch">
        {/* Imagen principal (Grupo Delotte) - Ocupa 2 columnas y 2 filas en pantallas medianas en adelante */}

        <img
          src="/images/Elementos-03.svg"
          alt="Grupo Delotte"
          className="w-full h-full object-cover col-span-2 md:col-span-2 md:row-span-2"
        />

        {/* Las 6 imágenes restantes se acomodarán automáticamente en el espacio restante */}
        <img
          src="/images/Elementos-04.svg"
          alt="Delotte"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/Elementos-05.svg"
          alt="Servicios y Negocios"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/Elementos-06.svg"
          alt="Alinoa"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/Elementos-07.svg"
          alt="Tenax"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/Elementos-08.svg"
          alt="Agropecuaria El Sauce"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/Elementos-09.svg"
          alt="Productos Andinos"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
