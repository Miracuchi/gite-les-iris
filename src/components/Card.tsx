import { buttonText } from "../data/constant";
import Button from "./Button";

interface CardProps {
  title: string;
  description: string[];
  image: string;
  link?: string;
}

export default function Card({ cardData }: { cardData: CardProps[] }) {
  return (
    <section>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`md:flex justify-evenly my-16 md:my-24 w-[75%] mx-auto gap-7 md:border-none ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="my-5 mx-auto">
            <h3 className="capitalize text-2xl font-bold w-fit mb-3 md:mb-0 mx-auto">
              {card.title}
            </h3>
            {card.description.map((desc, descIndex) => (
              <p key={descIndex} className="md:my-10 my-5 hidden md:flex">
                {desc}
              </p>
            ))}
            <span className="hidden md:flex justify-center">
              {card.link && (
                <Button text={buttonText.seeMore} url={card.link} />
              )}
            </span>
          </div>
          <img src={card.image} className="md:w-[50%] rounded-2xl" />
          <div className="md:hidden mt-4">
            {card.link && <Button text={buttonText.seeMore} url={card.link} />}
          </div>
        </div>
      ))}
    </section>
  );
}
