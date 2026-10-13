"use client";

import { useState } from "react";
import Image from "next/image";

const productos = [
  {
    title: "Commodities",
    image: "/images/servicios4.jpg",
  },
  {
    title: "Specialtys",
    image: "/images/servicios7.jpg",
  },
  {
    title: "Cultivos locales",
    image: "/images/servicios7.jpg",
  },
];

const servicios = [
  {
    title: "Grower de semilla",
    image: "/images/servicios7.jpg",
  },
  {
    title: "Multiplicación de semilla",
    image: "/images/servicios4.jpg",
  },
  {
    title: "Cosecha de caña",
    image: "/images/servicios7.jpg",
  },
  {
    title: "Riego",
    image: "/images/servicios4.jpg",
  },
  {
    title: "Empaque de cítricos",
    image: "/images/servicios7.jpg",
  },
  {
    title: "Proceso de legumbres",
    image: "/images/servicios4.jpg",
  },
  {
    title: "Acopio y acondicionamiento de granos no GMO",
    image: "/images/servicios7.jpg",
  },
];

export default function SeccionProductosServicios() {
  // Estado para la imagen activa (por defecto muestra la primera de productos)
  const [activeImage, setActiveImage] = useState("");
  // Estado opcional para saber qué ítem está seleccionado/activo
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-20">
      <div className="flex flex-col gap-12 md:pr-20">
        {/* PRODUCTOS */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">PRODUCTOS</h3>
          <ul className="flex flex-col gap-2">
            {productos.map((item) => {
              const isActive = activeTitle === item.title;
              return (
                <li
                  key={item.title}
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    setActiveTitle(item.title);
                  }}
                  className={`-translate-x-2 group flex items-center gap-2 cursor-pointer transition-all ${
                    isActive ? "  " : "text-gray-400 hover:text-black"
                  }`}
                >
                  {/* Icono SVG de flecha abierta */}
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-2xl md:text-6xl lg:text-5xl tracking-tight">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* SERVICIOS */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xs">SERVICIOS</h3>
          <ul className="flex flex-col gap-2">
            {servicios.map((item) => {
              const isActive = activeTitle === item.title;
              return (
                <li
                  key={item.title}
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    setActiveTitle(item.title);
                  }}
                  className={`-translate-x-2 group flex items-center gap-2 cursor-pointer transition-all ${
                    isActive ? "" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {/* Icono SVG de flecha abierta */}
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 shrink-0 transition-transform duration-300 group-hover:translate-x-1 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-2xl md:text-5xl leading-none">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        {activeImage && (
          <Image
            src={activeImage}
            alt={activeTitle}
            width={1920}
            height={1920}
            className="aspect-square md:aspect-4/5 object-cover transition-opacity duration-500 ease-in-out"
          />
        )}
      </div>
    </section>
  );
}
