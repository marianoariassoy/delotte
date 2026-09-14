import Header from "@/components/header";
import Footer from "@/components/footer";
import Trabaja from "./trabaja";
import Empresas from "./empresas";

export default function Home() {
  return (
    <section className="p-4">
      <Header />
      <h1 className="text-3xl md:text-5xl py-12 md:py-20 max-w-7xl">
        Producimos, procesamos y comercializamos de forma ingeniosa alimentos
        para el mundo. Integramos producción, servicios y comercialización a
        través de una estructura dinámica y flexible, adaptada a las necesidades
        de nuestros clientes.
      </h1>
      <Trabaja />
      <Empresas />
      <Footer />
    </section>
  );
}
