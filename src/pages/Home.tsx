import Card from "../components/Card";
import Hero from "../components/Hero";
import { cardData } from "../data/data";

export default function Home() {
  return (
    <section>
      <Hero />
      <Card cardData={cardData} />
      <img
        src="/src/assets/pictures/bookingAward.jpg"
        alt=""
        className="w-[50%] md:w-[20%] mx-auto my-10 rounded-lg shadow-lg"
      />
    </section>
  );
}
