import { useEffect, useRef, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

export default function ImageSlider({
  slides,
  currentImageIndex = 0,
  closeModal,
}: {
  slides: string[];
  currentImageIndex?: number;
  closeModal?: () => void;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentImageIndex);
  const slidesLength = slides.length;
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  useEffect(() => {
    setCurrentSlideIndex(currentImageIndex);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
  };

  const previousSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current - touchEndRef.current > 50) {
      nextSlide(); // Swipe left
    } else if (touchStartRef.current - touchEndRef.current < -50) {
      previousSlide(); // Swipe right
    }
  };

  const arrowCss =
    "text-5xl hover:scale-150 text-iris_purple opacity-50 hover:opacity-100 duration-300";

  return (
    <div
      className="flex justify-center items-center mx-3 md:mx-0 "
      onClick={closeModal}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          previousSlide();
        }}
        className={`hidden md:flex ${arrowCss}`}
      >
        <MdDoubleArrow className="transform rotate-180 " />
      </button>
      <div
        className="overflow-hidden relative max-h-full mt-10 md:h-[450px] md:max-w-[50%]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex transition ease-out duration-40 `}
          style={{
            transform: `translateX(-${currentSlideIndex * 100}%)`,
          }}
        >
          {slides?.map((s, i) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                key={i}
                className="flex-shrink-0 w-full mx-0 md:h-[450px] md:w-full md:object-cover md:object-center"
              >
                <a href={s} target="_blank">
                  <img src={s} className="max-w-full max-h-full mx-auto" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className={`hidden md:flex ${arrowCss}`}
      >
        <MdDoubleArrow />
      </button>
    </div>
  );
}
