"use client";

import { useEffect } from "react";
import Title from "@/components/title";
import Inscripciones from "./inscripciones";

const Pager = () => {
  useEffect(() => {
    const customBackground = "#3d573c"; // Ejemplo: un fondo oscuro
    const customForeground = "#e6e3de"; // Ejemplo: texto claro

    const root = document.documentElement;

    root.style.setProperty("--background", customBackground);
    root.style.setProperty("--foreground", customForeground);

    return () => {
      root.style.removeProperty("--background");
      root.style.removeProperty("--foreground");
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-20 mt-30 px-4 min-h-screen bg-background text-foreground">
      <Title
        title="TRABAJÁ CON NOSOTROS"
        subtitle="Creemos en las personas y en la potencia del trabajo
en equipo para alcanzar los mejores resultados.
Conocé nuestras búsquedas y sumate al equipo."
      />

      <Inscripciones />
    </div>
  );
};

export default Pager;
