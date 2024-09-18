export default function Card() {
  return (
    <div className="md:flex justify-evenly my-24 w-[75%] mx-auto gap-7">
      <div className="my-5">
        <h3 className="capitalize text-4xl font-bold w-fit">
          Crecy La Chapelle
        </h3>
        <p className="md:my-10 my-5">
          Le Gîte Les Iris se situe à 1 km du centre de Crécy-la-Chapelle, à 15
          minutes en voiture de Disneyland Paris et à 750 mètres de la gare SNCF
          et routière de Crécy-la-Chapelle.
        </p>
        <p>
          Vous pourrez rejoindre Paris gare de l'Est en train ou la gare de
          Chessy Marne la vallée (Disney, TGV, RER) en bus...
        </p>
      </div>
      <img
        src="/src/assets/ressources/panneauCrecy.jpg"
        className="md:w-[50%] rounded-2xl"
      ></img>
    </div>
  );
}
