import ImageSlider from "./Slider";
interface SlideObject {
  title: string;
  slides: string[];
}

export default function SectionSlider({
  slideObject,
}: {
  slideObject: SlideObject;
}) {
  return (
    <section>
      <h1>{slideObject.title}</h1>
      <ImageSlider slides={slideObject.slides} />
    </section>
  );
}
