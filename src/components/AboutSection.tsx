import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Title from "./Title";

export default function AboutSection() {
  const { translations } = useContext(LanguageContext);
  const details = [
    {
      title: translations.divers,
      items: translations.inside_items as string[],
    },
    {
      title: translations.outside,
      items: translations.outside_items as string[],
    },
    {
      title: translations.pets,
      rule: translations.rule,
    },
  ];

  const descriptionItems = translations.descriptions as string[];
  return (
    <>
      <div className="px-5 py-10 md:px-10 lg:px-20">
        <Title titleSection="Le Gîte" />
        {descriptionItems.map((item, i) => (
          <p className="mb-6 text-lg" key={i}>
            {item}
          </p>
        ))}

        {details.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>
            {section.items ? (
              <ul className="list-inside list-disc">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">{section.rule}</p>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
