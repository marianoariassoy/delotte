"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "./loader";

type Data = {
  id: number;
  title: string;
  slug: string;
};

export default function Submenu({
  setOpenMenu,
  lang,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
  lang: string;
}) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para traer los datos desde el cliente
    async function fetchData() {
      try {
        //modificar en el futuro
        const res = await fetch(
          `https://marianoarias.soy/works/delotte/api/empresas/${lang}`,
        );
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error al cargar empresas:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [lang]); // Se vuelve a ejecutar si cambia el idioma

  if (loading) {
    return <Loader />;
  }

  return data.map((item) => (
    <div key={item.title}>
      <Link
        href={`/empresas/${item.slug}`}
        className="whitespace-nowrap hover:opacity-50"
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenu(null);
        }}
      >
        {item.title}
      </Link>
    </div>
  ));
}
