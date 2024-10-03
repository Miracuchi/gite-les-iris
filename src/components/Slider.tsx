import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

export default function ImageSlider({
  slides,
  currentImageIndex = 0,
  closeModal,
  setCurrentImageIndex,
}: {
  slides: string[];
  currentImageIndex?: number;
  closeModal?: () => void;
  setCurrentImageIndex?: Dispatch<SetStateAction<number>>;
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(currentImageIndex);
  const slidesLength = slides.length;
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  useEffect(() => {
    setCurrentSlideIndex(currentImageIndex);
  }, [currentImageIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => {
      const newIndex = prevIndex === slidesLength - 1 ? 0 : prevIndex + 1;
      // Utiliser un if explicite
      if (setCurrentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
      return newIndex;
    });
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? slidesLength - 1 : prevIndex - 1;

      // Utiliser un if explicite
      if (setCurrentImageIndex) {
        setCurrentImageIndex(newIndex);
      }

      return newIndex;
    });
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
    <>
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
      <div className="md:flex hidden gap-5 w-[75%] mx-auto cursor-pointer justify-center mt-2">
        {slides.map((card, index) => (
          <div key={index} className="">
            <img
              src={card}
              className={`rounded-sm h-16 w-16 object-cover mx-auto ${
                currentSlideIndex === index
                  ? "border-4 border-iris_yellow p-1"
                  : ""
              }`}
              onClick={(e) => {
                setCurrentSlideIndex(index);
                e.stopPropagation();
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
