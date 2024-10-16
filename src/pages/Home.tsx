import { useContext, useRef } from "react";
import myImg from "../assets/pictures/bookingAward.jpg";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { LanguageContext } from "../components/LanguageContext";
import MapSection from "../components/MapSection";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Home() {
  const { translations } = useContext(LanguageContext);
  const cardRef = useRef(null);
  const mapRef = useRef(null);
  const cardData = [
    {
      title: "Crecy La Chapelle",
      description: translations.home_description as string[],
      image: "/assets/pictures/crecy/crecy4.jpg",
    },
  ];
  const isCardVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });
  const isMapVisible = useIntersectionObserver(mapRef, { threshold: 0.1 });

  return (
    <section>
      <Hero />

      <div
        ref={cardRef}
        className={`${
          isCardVisible ? "animate-fade-in" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Card cardData={cardData} />
      </div>
      <div
        ref={mapRef}
        className={`${
          isMapVisible ? "animate-fade-in" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <MapSection />
      </div>
      <img
        src={myImg}
        alt=""
        className="mx-auto my-10 w-[50%] rounded-lg shadow-lg md:w-[20%]"
      />
    </section>
  );
}
