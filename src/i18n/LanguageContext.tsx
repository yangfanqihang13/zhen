import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { zh } from "./zh";
import { en } from "./en";

export type Language = "zh" | "en";

type Translations = typeof zh;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Translations> = { zh, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    return saved === "en" ? "en" : "zh";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
