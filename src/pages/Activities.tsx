import { useContext } from "react";
import Card from "../components/Card";
import { LanguageContext } from "../components/LanguageContext";
import Title from "../components/Title";

export default function Activities() {
  const { translations } = useContext(LanguageContext);

  const activitiesCardData = [
    {
      title: "Disneyland Paris",
      description: translations.disneyland_paris_description as string[],
      image: "/src/assets/pictures/around_crecy/disney.jpg",
      link: "https://www.disneylandparis.com/fr-fr/destinations/parc-disneyland/",
    },
    {
      title: "Le Parc Astérix",
      description: translations.parc_asterix_description as string[],
      image: "/src/assets/pictures/activities/parc_asterix.jpg",
      link: "https://www.parcasterix.fr/",
    },
    {
      title: "La Vallée Village",
      description: translations.vallee_village_description as string[],
      image: "/src/assets/pictures/activities/vallee_village.jpg",
      link: "https://www.thebicestercollection.com/la-vallee-village/fr",
    },
    {
      title: "La mer de Sable",
      description: translations.mer_de_sable_description as string[],
      image: "/src/assets/pictures/activities/mer_de_sable.jpg",
      link: "https://www.merdesable.fr/",
    },
    {
      title: "Les parcs zoologiques de Lumigny",
      description:
        translations.parcs_zoologiques_de_lumigny_description as string[],
      image: "/src/assets/pictures/activities/lumigny_park.jpg",
      link: "https://lumigny-safari-reserve.com/",
    },
    {
      title: "Musée de la Grande Guerre",
      description:
        translations.musee_de_la_grande_guerre_description as string[],
      image:
        "/src/assets/pictures/activities/musee-grande-guerre-meaux-2021.jpg",
      link: "https://www.museedelagrandeguerre.com/",
    },
    {
      title: "Ferra Botanica",
      description: translations.ferra_botanica_description as string[],
      image:
        "/src/assets/pictures/activities/veloraildefrance_velo-rail-la-ferte-gaucher-seine-et-marne-77.jpg",
      link: "https://www.ferrabotanica.com/",
    },
    {
      title: "Koezio",
      description: translations.koezio_description as string[],
      image:
        "/src/assets/pictures/activities/animations-koezio-au-centre-commercial-carre-senart.jpg",
      link: "https://koezio.co/senart/",
    },
    {
      title: "aquarium sea life",
      description: translations.aquarium_sea_life_description as string[],
      image: "/src/assets/pictures/activities/sea_life.jpg",
      link: "https://www.visitsealife.com/paris/",
    },
  ];
  console.log(activitiesCardData);

  return (
    <div className="py-10 text-center md:mt-16">
      <Title titleSection={translations.activities as string} />

      <Card cardData={activitiesCardData} />
    </div>
  );
}
