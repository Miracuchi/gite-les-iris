import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Card />
      <img
        src="/src/assets/ressources/bookingAward.jpg"
        alt=""
        className="w-[50%] mx-auto my-10 rounded-lg shadow-lg"
      />
      {/* <h1 className="text-4xl font-bold w-fit">Bienvenue au Gîte les Iris</h1>
      <p className="mt-5 text-lg">
        Votre destination de rêve pour des vacances inoubliables.
      </p> */}
    </div>
  );
}
