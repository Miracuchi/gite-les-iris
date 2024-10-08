import Card from "../components/Card";
import Title from "../components/Title";
import { activitiesCardData } from "../data/data";
export default function Activities() {
  return (
    <div className="text-center py-10 md:mt-16">
      <Title titleSection="Autour du gîte" />

      <Card cardData={activitiesCardData} />
    </div>
  );
}
