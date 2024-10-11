import { useContext } from "react";
import Button from "./Button";
import { LanguageContext } from "./LanguageContext";

interface CardProps {
  title: string;
  description: string[];
  image: string;
  link?: string;
}

export default function Card({ cardData }: { cardData: CardProps[] }) {
  const { translations } = useContext(LanguageContext);
  return (
    <section>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`mx-auto my-16 w-[75%] justify-evenly gap-7 md:my-24 md:flex md:border-none ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="mx-auto my-5">
            <h3 className="mx-auto mb-3 w-fit text-2xl font-bold capitalize md:mb-0">
              {card.title}
            </h3>
            {card.description.map((desc, descIndex) => (
              <p key={descIndex} className="my-5 hidden md:my-10 md:flex">
                {desc}
              </p>
            ))}
            <span className="hidden justify-center md:flex">
              {card.link && (
                <Button
                  text={translations.see_more as string}
                  url={card.link}
                />
              )}
            </span>
          </div>
          <img src={card.image} className="rounded-2xl md:w-[50%]" />
          <div className="mt-4 md:hidden">
            {card.link && (
              <Button text={translations.see_more as string} url={card.link} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
