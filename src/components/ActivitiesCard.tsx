import { activities } from "../data/data";
import Button from "./Button";

export default function ActivitesCard() {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-5">
        {activities.card.map((activity) => (
          <div className="w-[70%] mx-auto border-8 ">
            <img
              src={activity.image}
              alt=""
              className="h-[50%] object-cover w-full"
            />
            <div className="w-[70%] mx-auto mt-10">
              <a href={activity.link} target="_blank">
                <Button text="Voir Plus" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
