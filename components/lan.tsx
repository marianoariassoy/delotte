"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";

const Lan = () => {
  const { lang, setLang } = useLanguage();
  const router = useRouter();

  const handleLanguageChange = () => {
    const nextLang = lang === "es" ? "en" : "es";

    // 1. Guardar el idioma en la cookie (duración: 1 año)
    document.cookie = `lang=${nextLang}; path=/; max-age=31536000; SameSite=Lax`;

    // 2. Actualizar el estado local en el Contexto
    setLang(nextLang);

    // 3. Revalidar/recargar Server Components para que vuelvan a hacer fetch con el nuevo idioma
    router.refresh();
  };

  return (
    <button
      className="font-medium hover:opacity-50 cursor-pointer text-[0.9rem] z-10"
      onClick={handleLanguageChange}
    >
      {lang === "es" ? "(EN)" : "(ES)"}
    </button>
  );
};

export default Lan;
