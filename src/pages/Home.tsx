import Card from "../components/Card";
import Hero from "../components/Hero";
import { cardData } from "../data/data";

export default function Home() {
  return (
    <section>
      <Hero />
      <Card cardData={cardData} />
      <img
        src="/src/assets/ressources/bookingAward.jpg"
        alt=""
        className="w-[50%] mx-auto my-10 rounded-lg shadow-lg"
      />
      {/* <h1 className="text-4xl font-bold w-fit">Bienvenue au Gîte les Iris</h1>
      <p className="mt-5 text-lg">
        Votre destination de rêve pour des vacances inoubliables.
      </p> */}
    </section>
  );
}
