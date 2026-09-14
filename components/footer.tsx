import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <footer className="border-t border-black pt-8 pb-30 grid md:grid-cols-2 gap-4 text-sm">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo Grupo Delotte"
            className="w-34 mb-4"
            width={136}
            height={136}
          />
        </Link>
        <p>
          Dedicados a la producción
          <br />
          sustentable de alimentos.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <ul>
          <li className="mb-2">
            <span className="font-bold text-base">Explora</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Nuestras Actividades
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Nuestras Empresas
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Nuestros Talentos
            </a>
          </li>
          <li>
            <a href="mailto:info@grupodelotte.com" className="hover:underline">
              Contactanos
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-2">
            <span className="font-bold text-base">Social</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              YouTube
            </a>
          </li>
        </ul>
        <ul>
          <li className="mb-2">
            <span className="font-bold text-base">Contacto</span>
          </li>
          <li>
            <p>Pedro de Villalba 1338 Yerba Buena, Tucumán, Argentina.</p>
          </li>
          <li>
            <a href="mailto:info@grupodelotte.com" className="hover:underline">
              info@grupodelotte.com
            </a>
          </li>
          <li>(+54 9) 381 4252708</li>
        </ul>
      </div>
    </footer>
  );
}
