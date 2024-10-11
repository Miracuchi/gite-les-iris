import { useContext } from "react";
import GallerySection from "../components/GallerySection";
import { LanguageContext } from "../components/LanguageContext";
import Title from "../components/Title";
import {
  aroundCrecyData,
  cityCrecyData,
  commercesCrecyData,
  parisData,
  studioSliderData,
  transportCrecyData,
} from "../data/data";

export default function Gallery() {
  const { translations } = useContext(LanguageContext);
  console.log(navigator.userAgent);

  return (
    <div className="py-10 text-center md:mt-16">
      <Title titleSection={translations.gallery as string} />

      <p className="mb-6 text-lg">
        Explorez notre galerie pour voir des photos de notre gîte et des
        environs.
      </p>

      <GallerySection galleryData={studioSliderData} />
      <GallerySection galleryData={cityCrecyData} />

      <GallerySection galleryData={aroundCrecyData} />
      <GallerySection galleryData={commercesCrecyData} />
      <GallerySection galleryData={transportCrecyData} />
      <GallerySection galleryData={parisData} />
    </div>
  );
}
