"use client";
import { useState } from "react";
import Image from "next/image";

type Data = {
  title: string;
  image: string;
};

const Lista = ({
  lang,
  productos,
  servicios,
}: {
  lang: string;
  productos: Data[];
  servicios: Data[];
}) => {
  const [activeImage, setActiveImage] = useState("");
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-20">
      <div className="flex flex-col gap-12 md:pr-20">
        {/* PRODUCTOS */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">
            {lang === "es" ? "PRODUCTOS" : "PRODUCTS"}
          </h3>
          <ul className="flex flex-col gap-4">
            {productos.map((item) => {
              const isActive = activeTitle === item.title;
              return (
                <li
                  key={item.title}
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    setActiveTitle(item.title);
                  }}
                  className={` group flex items-center gap-2 cursor-pointer transition-all ${
                    isActive ? "  " : "text-gray-400 hover:text-black"
                  }`}
                >
                  {/* Icono SVG de flecha abierta */}
                  <img
                    src="/assets/arrow2.svg"
                    alt="Arrow"
                    width={22}
                    className="opacity-30 mt-4"
                  />

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
          <h3 className="font-bold text-xs">
            {lang === "es" ? "SERVICIOS" : "SERVICES"}
          </h3>
          <ul className="flex flex-col gap-4">
            {servicios.map((item) => {
              const isActive = activeTitle === item.title;
              return (
                <li
                  key={item.title}
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    setActiveTitle(item.title);
                  }}
                  className={` group flex items-center gap-2 cursor-pointer transition-all ${
                    isActive ? "" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {/* Icono SVG de flecha abierta */}
                  <img
                    src="/assets/arrow2.svg"
                    alt="Arrow"
                    width={22}
                    className="opacity-30 mt-4"
                  />
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
    </div>
  );
};

export default Lista;
