import Empresas from "./empresas";
import Hero from "./hero";
import Actividades from "./actividades";
import Datos from "./datos";
import Certificaciones from "./certificaciones";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-30 mt-30 px-4">
      <Hero />
      <Actividades />
      <Datos />
      <Empresas />
      <Certificaciones />
    </section>
  );
}
