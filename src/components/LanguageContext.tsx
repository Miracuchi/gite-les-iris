import { createContext, ReactNode, useEffect, useState } from "react";
import enTranslations from "../translations/en.json";
import frTranslations from "../translations/fr.json";

export type Language = "en" | "fr";

type GeneralTranslations = { [key: string]: string | string[] };

interface LanguageContextProps {
  currentLang: Language;
  changeLanguage: (lang: Language) => void;
  translations: GeneralTranslations;
}
const { language: navigatorLanguage } = navigator;
let defaultLanguage: Language;

if (navigatorLanguage.startsWith("fr")) {
  defaultLanguage = "fr";
} else if (navigatorLanguage.startsWith("en")) {
  defaultLanguage = "en";
} else {
  defaultLanguage = "en";
}
export const LanguageContext = createContext<LanguageContextProps>({
  currentLang: "en",
  changeLanguage: () => {},
  translations: {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<Language>(
    defaultLanguage as Language,
  );

  useEffect(() => {
    const storedLanguage = sessionStorage.getItem("appLanguage") as Language;
    if (storedLanguage) {
      setCurrentLang(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    sessionStorage.setItem("appLanguage", lang);
  };

  const translations = currentLang === "en" ? enTranslations : frTranslations;

  const flattenedTranslations: GeneralTranslations = {
    ...translations.navigation,
    ...translations.button,
    ...translations.about_section,
    ...translations.activities_section,
    ...translations.contact_card,
    ...translations.contact_form,
    ...translations.gallery_section,
    ...translations.hero_section,
    ...translations.not_found_page,
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        changeLanguage,
        translations: flattenedTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
