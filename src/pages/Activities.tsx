import Card from "../components/Card";
import Title from "../components/Title";
import { activitiesCardData } from "../data/data";
export default function Activities() {
  return (
    <div className="py-10 text-center md:mt-16">
      <Title titleSection="Activités" />

      <Card cardData={activitiesCardData} />
    </div>
  );
}
