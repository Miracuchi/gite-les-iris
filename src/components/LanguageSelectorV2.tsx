import { useContext, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useClickOutside } from "../hooks/useClickOutside";
import "../index.css";
import { Language, LanguageContext } from "./LanguageContext";
import { MenuContext } from "./MenuContext";

export default function LanguageDropdownV2() {
  const { changeLanguage, currentLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const { setIsMenuOpen } = useContext(MenuContext); // Utiliser le contexte
  const dropDownRef = useRef<HTMLUListElement | null>(null);

  const toggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);

    setIsOpen(false);
    setIsMenuOpen(false);
  };
  useClickOutside(dropDownRef, setIsOpen, "dropdown-button");
  const languagesModal = [
    { label: "en", imageSrc: "/assets/united-kingdom-uk-svgrepo-com.svg" },
    {
      label: "fr",
      imageSrc: "/assets/flag-for-flag-france-svgrepo-com.svg",
    },
  ];

  return (
    <div className="language-dropdown relative mr-2 cursor-pointer">
      <div
        className="mx-auto mt-7 flex w-fit items-center gap-x-2 rounded-lg border-2 border-slate-400 bg-iris_yellow p-2 shadow-lg transition lg:mt-0 lg:bg-transparent lg:text-white lg:hover:border-iris_yellow"
        onClick={toggleDropDown}
        id="dropdown-button"
      >
        <button
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="uppercase"
        >
          {currentLang}
        </button>
        <IoChevronDownOutline
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-x-180" : "rotate-x-0"}`}
        />
      </div>

      {isOpen && (
        <ul
          className="absolute inset-x-1/4 mt-1 transform rounded-lg bg-white transition-transform duration-300 lg:inset-x-0"
          ref={dropDownRef}
        >
          {languagesModal.map((language, index) => {
            return (
              <li
                onClick={() => handleLanguageChange(language.label as Language)}
                className={`flex w-full items-center gap-x-2 px-2 py-2 uppercase hover:bg-blue-200 ${index === 0 ? "rounded-t-lg" : "rounded-b-lg"} ${language.label === currentLang ? "bg-blue-300" : ""}`}
                key={index}
              >
                <img src={language.imageSrc} alt="" className="h-5 w-5" />
                <span>{language.label}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
