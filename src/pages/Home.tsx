import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <h1 className="text-4xl font-bold w-fit">Bienvenue au Gîte les Iris</h1>
      <p className="mt-5 text-lg">
        Votre destination de rêve pour des vacances inoubliables.
      </p>
    </div>
  );
}
