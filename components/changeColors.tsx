"use client";

import { useEffect } from "react";

const ChangeColors = () => {
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

  return <></>;
};

export default ChangeColors;
