import { useState } from "react";

export default function ImageSlider({ slides }: { slides: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesLength = slides.length - 1;

  const previousSlide = () => {
    if (currentIndex === 0) setCurrentIndex(slidesLength);
    else setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === slidesLength) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="overflow-hidden relative rounded-2xl mt-10 md:h-[500px] mx-5 md:max-w-[60%] ">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides?.map((s, i) => {
          return <img key={i} src={s} className="" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-black text-2xl px-10">
        <button onClick={previousSlide}>
          <span>Left</span>
        </button>
        <button onClick={nextSlide}>
          <span>Right</span>
        </button>
      </div>
    </div>
  );
}
