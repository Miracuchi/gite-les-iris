import { useContext } from "react";
import GallerySection from "../components/GallerySection";
import { LanguageContext } from "../components/LanguageContext";
import Title from "../components/Title";
import {
  imagesAround,
  imagesCity,
  imagesCommerce,
  imagesParis,
  imagesStudio,
  imagesTransport,
} from "../data/data";

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
