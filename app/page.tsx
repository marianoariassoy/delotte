import Image from "next/image";
import Home from "@/app/(site)/home/page";

export default function Inicio() {
  return (
    <>
      <div className="w-screen h-screen" id="top">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/image.webp"
        >
          <source src="/videos/hero-web.mp4" type="video/mp4" />
        </video>

        <a
          href="#home"
          className="absolute z-30 left-0 bottom-20 pl-4 md:pl-8 md:hover:pl-9 transition-all w-full pr-20 cursor-pointer"
        >
          <Image
            src="/assets/logo-white.svg"
            alt="Logo Grupo Delotte"
            className="w-full max-w-140"
            width={600}
            height={500}
          />
        </a>
      </div>

      <Home />
    </>
  );
}
