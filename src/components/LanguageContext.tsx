import { createContext, ReactNode, useState } from "react";
import enTranslations from "../translations/en.json";
import frTranslations from "../translations/fr.json";

// Définir le type des langues
export type Language = "en" | "fr";

// Définir un type général pour les traductions
type GeneralTranslations = { [key: string]: string | string[] };

// Définir le type du contexte
interface LanguageContextProps {
  currentLang: Language;
  changeLanguage: (lang: Language) => void;
  translations: GeneralTranslations; // Conserver le type général
}

// Créer le contexte
export const LanguageContext = createContext<LanguageContextProps>({
  currentLang: "en",
  changeLanguage: () => {},
  translations: {}, // Valeur par défaut
});

// Créer le fournisseur de contexte
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
  };

  // Utiliser les traductions en fonction de la langue actuelle
  const translations = currentLang === "en" ? enTranslations : frTranslations;

  // Aplatir les traductions pour correspondre au type général
  const flattenedTranslations: GeneralTranslations = {
    ...translations.navigation,
    ...translations.button,
    ...translations.about_section,
    ...translations.activities_section,
    ...translations.contact_card,
    ...translations.contact_form,
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        changeLanguage,
        translations: flattenedTranslations, // Utiliser les traductions aplaties ici
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
