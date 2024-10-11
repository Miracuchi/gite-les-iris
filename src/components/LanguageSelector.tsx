import { useContext } from "react";
import { Language, LanguageContext } from "./LanguageContext";

const LanguageDropdown = () => {
  const { changeLanguage, currentLang } = useContext(LanguageContext);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value as Language;
    changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={handleLanguageChange} value={currentLang}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
