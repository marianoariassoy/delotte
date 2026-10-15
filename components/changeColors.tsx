"use client";

import { useEffect } from "react";

// Definimos un diccionario de colores por página para que sea fácil escalar
const colorThemes: Record<string, { background: string; foreground: string }> =
  {
    talentos: {
      background: "#3d573c",
      foreground: "#e6e3de",
    },
    default: {
      background: "#9CB5F4",
      foreground: "#171717",
    },
  };

export default function ChangeColors({ page }: { page?: string }) {
  useEffect(() => {
    // Seleccionamos el tema según la página, o usamos el default si no coincide
    const theme = (page && colorThemes[page]) || colorThemes.default;

    const root = document.documentElement;
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);

    // Limpieza al desmontar o cambiar de página
    return () => {
      root.style.removeProperty("--background");
      root.style.removeProperty("--foreground");
    };
  }, [page]);

  return null;
}
