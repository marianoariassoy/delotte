import Image from "next/image";
import Link from "next/link";
import { mainMenu } from "@/config/navigation";

export default function Home() {
  return (
    <footer className="px-4">
      <div className="grid md:grid-cols-2 gap-4 text-sm border-t border-black pt-8 pb-20">
        <div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo Grupo Delotte"
              className="w-30 mb-4"
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
            {mainMenu.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ? item.href : "#"}
                  className="hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
                Youtube
              </a>
            </li>
          </ul>
          <ul>
            <li className="mb-2">
              <span className="font-bold text-base">Contacto</span>
            </li>
            <li>
              <p>
                Pedro de Villalba 1338
                <br />
                Yerba Buena, Tucumán, Argentina.
              </p>
            </li>
            <li>
              <a
                href="mailto:info@grupodelotte.com"
                className="hover:underline"
              >
                info@grupodelotte.com
              </a>
            </li>
            <li>(+54 9) 381 4252708</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
