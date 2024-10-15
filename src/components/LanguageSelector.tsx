// import { useContext } from "react";
// import { Language, LanguageContext } from "./LanguageContext";

// const LanguageDropdown = () => {
//   const { changeLanguage, currentLang } = useContext(LanguageContext);

//   console.log(navigator.language);

//   const handleLanguageChange = (
//     event: React.ChangeEvent<HTMLSelectElement>,
//   ) => {
//     const selectedLanguage = event.target.value as Language;
//     changeLanguage(selectedLanguage);
//   };

//   return (
//     <div>
//       <select
//         onChange={handleLanguageChange}
//         value={currentLang}
//         className="rounded-xl"
//       >
//         <option value="en" className="mt-5 bg-blue-600">
//           English
//         </option>
//         <option value="fr" className="bg-black text-white">
//           Français
//         </option>
//       </select>
//     </div>
//   );
// };

// export default LanguageDropdown;
