import GallerySection from "../components/GallerySection";
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
  console.log(navigator.userAgent);

  return (
    <div className="text-center py-10 md:mt-16">
      <Title titleSection="Galerie" />

      <p className="text-lg mb-6">
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
