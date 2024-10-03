import GallerySection from "../components/GallerySection";
import Slider from "../components/Slider";
import {
  aroundCrecyData,
  cityCrecyData,
  commercesCrecyData,
  parisData,
  studioSliderData,
  transportCrecyData,
} from "../data/data";

export default function Gallery() {
  return (
    <div className="text-center py-10 md:mt-16">
      <h1 className="text-3xl font-bold mb-4 ">Galerie</h1>
      <p className="text-lg mb-6">
        Explorez notre galerie pour voir des photos de notre gîte et des
        environs.
      </p>
      <Slider slides={studioSliderData.slides} />
      <Slider slides={cityCrecyData.slides} />

      <GallerySection galleryData={studioSliderData} />
      <GallerySection galleryData={cityCrecyData} />

      <GallerySection galleryData={aroundCrecyData} />
      <GallerySection galleryData={commercesCrecyData} />
      <GallerySection galleryData={transportCrecyData} />
      <GallerySection galleryData={parisData} />
    </div>
  );
}
