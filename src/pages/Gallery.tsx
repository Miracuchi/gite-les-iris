import { useContext } from "react";
import GallerySection from "../components/GallerySection";
import { LanguageContext } from "../components/LanguageContext";
import Title from "../components/Title";

const imagesStudio = [
  "/assets/pictures/studio_pictures/studio1.jpg",
  "/assets/pictures/studio_pictures/studio2.jpg",
  "/assets/pictures/studio_pictures/studio3.jpg",
  "/assets/pictures/studio_pictures/terrasse.jpg",
  "/assets/pictures/studio_pictures/terrasseSousLaNeige.jpg",
];
const imagesAround = [
  "/assets/pictures/around_crecy/disney.jpg",
  "/assets/pictures/around_crecy/disney2.jpg",
  "/assets/pictures/around_crecy/disney3.jpg",
  "/assets/pictures/around_crecy/labuttedeDoue.jpg",
  "/assets/pictures/around_crecy/labuttedeDoue2.jpg",
  "/assets/pictures/around_crecy/labuttedeDoue3.jpg",
  "/assets/pictures/around_crecy/leMorin.jpg",
  "/assets/pictures/around_crecy/Meaux.jpg",
  "/assets/pictures/around_crecy/petitBrasDuMorin.jpg",
];

const imagesCommerce = [
  "/assets/pictures/commerces/carrefour-city.jpeg",
  "/assets/pictures/commerces/intermarché.jpg",
];

const imagesCity = [
  "/assets/pictures/crecy/crecy1.jpg",
  "/assets/pictures/crecy/crecy2.jpg",
  "/assets/pictures/crecy/crecy3.jpg",
  "/assets/pictures/crecy/crecy4.jpg",
  "/assets/pictures/crecy/moulinAEau.jpg",
];
const imagesParis = [
  "/assets/pictures/paris/Paris.jpg",
  "/assets/pictures/paris/Paris2.jpg",
  "/assets/pictures/paris/Paris3.jpg",
];
const imagesTransport = [
  "/assets/pictures/transport/gareDeCrecy.jpg",
  "/assets/pictures/transport/transilienP.jpg",
];

export default function Gallery() {
  const { translations } = useContext(LanguageContext);
  const studioSliderData = {
    title: translations.title_studio as string,
    slides: imagesStudio,
  };

  const aroundCrecyData = {
    title: translations.title_aroundCrecy as string,
    slides: imagesAround,
  };

  const commercesCrecyData = {
    title: translations.title_shops as string,
    slides: imagesCommerce,
  };

  const cityCrecyData = {
    title: translations.title_city as string,
    slides: imagesCity,
  };
  const transportCrecyData = {
    title: translations.title_transport as string,
    slides: imagesTransport,
  };
  const parisData = {
    title: translations.title_paris as string,
    slides: imagesParis,
  };

  return (
    <div className="py-10 text-center md:mt-16">
      <Title titleSection={translations.gallery as string} />

      <GallerySection galleryData={studioSliderData} />
      <GallerySection galleryData={cityCrecyData} />

      <GallerySection galleryData={aroundCrecyData} />
      <GallerySection galleryData={commercesCrecyData} />
      <GallerySection galleryData={transportCrecyData} />
      <GallerySection galleryData={parisData} />
    </div>
  );
}
