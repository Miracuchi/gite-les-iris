interface CardProps {
  title: string;
  description: string[];
  image: string;
}

export default function Card({ cardData }: { cardData: CardProps[] }) {
  return (
    <section>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`md:flex justify-evenly my-24 w-[75%] mx-auto gap-7 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="my-5">
            <h3 className="capitalize text-4xl font-bold w-fit">
              {card.title}
            </h3>
            {card.description.map((desc, descIndex) => (
              <p key={descIndex} className="md:my-10 my-5">
                {desc}
              </p>
            ))}
          </div>
          <img src={card.image} className="md:w-[50%] rounded-2xl"></img>
        </div>
      ))}
    </section>
  );
}
