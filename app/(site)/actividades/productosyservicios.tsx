import { getData } from "@/lib/api";
import Lista from "./lista";

type Data = {
  title: string;
  image: string;
};

export default async function SeccionProductosServicios({
  lang,
}: {
  lang: string;
}) {
  const productos = (await getData("productos", lang)) as Data[];
  const servicios = (await getData("servicios", lang)) as Data[];

  return <Lista lang={lang} productos={productos} servicios={servicios} />;
}
