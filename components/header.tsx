import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className="flex justify-between gap-4 border-b border-black pb-4 items-center">
      <div className="hover:pl-1 transition-all">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo Grupo Delotte"
            className="w-22"
            width={96}
            height={96}
          />
        </Link>
      </div>
      <div>
        <a
          href="mailto:info@grupodelotte.com text-sm"
          className="hover:underline"
        >
          Contactanos
        </a>
      </div>
    </header>
  );
}
