"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    // Guardamos la cookie en el cliente para las próximas peticiones
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
