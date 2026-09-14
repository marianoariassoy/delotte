import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-screen h-screen">
      <Link
        href="/landing"
        className="absolute z-30 left-0 bottom-20 pl-4 md:pl-8 md:hover:pl-9 transition-all w-full  pr-20"
      >
        <Image
          src="/assets/logo-white.svg"
          alt="Logo Grupo Delotte"
          className="w-full max-w-150"
          width={600}
          height={500}
        />
      </Link>
      <Image
        src="/assets/image.webp"
        alt="Grupo Delotte"
        width={1920}
        height={1400}
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}
