import { useContext } from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { giteAdress, gitePostalCode } from "../data/data";
import { LanguageContext } from "./LanguageContext";

export default function ContactCard({
  className,
  shouldShadow,
}: {
  shouldShadow: boolean;
  className?: string;
}) {
  const { translations } = useContext(LanguageContext);
  const telTo = [
    {
      contactIcon: <IoMdPhonePortrait />,
      contactInfo: "+33 6 87 38 64 95",
      isPhone: true,
    },
    {
      contactIcon: <FaPhone />,
      contactInfo: "+33 9 75 25 41 12",
      isPhone: true,
    },
    {
      contactIcon: <MdEmail />,
      contactInfo: "gestion@locationstudiocrecy.fr",
      isPhone: false,
    },
  ];
  return (
    <>
      <div
        className={`mx-5 mb-12 h-full rounded-xl bg-iris_purple p-5 text-white md:mt-16 ${
          shouldShadow ? "shadow-lg" : "shadow-none"
        } ${className}`}
      >
        <h1 className="mb-2 text-2xl">{translations.contact_us}</h1>
        <p>Gîte les iris</p>
        <p> Aïdée SANCHEZ</p>
        <p>{giteAdress}</p>
        <p>{gitePostalCode}</p>
        <p className="mb-2 mt-3">{translations.phone} : </p>
        {telTo.map((tel) => (
          <>
            <p className="flex items-center justify-start text-white underline lg:hover:text-iris_yellow">
              <span className="mr-2">{tel.contactIcon}</span>
              <a
                href={
                  tel.isPhone
                    ? `tel:${tel.contactInfo}`
                    : `mailto:${tel.contactInfo}`
                }
              >
                {tel.contactInfo}
              </a>
            </p>
          </>
        ))}
      </div>
    </>
  );
}
