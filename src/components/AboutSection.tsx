import Title from "./Title";

export default function AboutSection() {
  const details = [
    {
      title: "Divers",
      items: [
        "Climatisation",
        "Établissement entièrement non-fumeurs",
        "Chauffage",
      ],
    },
    {
      title: "En extérieur",
      items: ["Jardin", "Terrasse", "Installations pour barbecue"],
    },
    {
      title: "Animaux domestiques",
      description:
        "Les animaux de compagnie sont admis sur demande et avec un supplément.",
    },
  ];
  return (
    <>
      <div className=" py-10 px-5 md:px-10 lg:px-20">
        <Title titleSection="Le Gîte" />
        <p className="text-lg mb-6">
          Studio d'une surface de 35m² pouvant accueillir jusqu'à 6 personnes.
        </p>
        <p className="text-lg mb-6">
          Le Gîte Les Iris se situe à 1 km du centre de Crécy-la-Chapelle, à 15
          minutes en voiture de Disneyland Paris et à 750 mètres de la gare SNCF
          et routière de Crécy-la-Chapelle. Vous pourrez rejoindre Paris gare de
          l'Est en train ou la gare de Chessy Marne la vallée (Disney, TGV, RER)
          en bus...
        </p>

        {details.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.items ? (
              <ul className="list-disc list-inside">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg">{section.description}</p>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
