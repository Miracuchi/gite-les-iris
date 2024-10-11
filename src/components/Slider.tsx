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
        className="mx-3 flex items-center justify-center md:mx-0"
        onClick={closeModal}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            previousSlide();
          }}
          className={`hidden md:flex ${arrowCss}`}
        >
          <MdDoubleArrow className="rotate-180 transform" />
        </button>
        <div
          className="relative mt-10 max-h-full overflow-hidden md:h-[450px] md:max-w-[50%]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`duration-40 flex transition ease-out`}
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
                  className="mx-0 w-full flex-shrink-0 md:h-[450px] md:w-full md:object-cover md:object-center"
                >
                  <a href={s} target="_blank">
                    <img src={s} className="mx-auto max-h-full max-w-full" />
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
      <div className="mx-auto mt-2 hidden w-[75%] cursor-pointer justify-center gap-5 md:flex">
        {slides.map((card, index) => (
          <div key={index} className="">
            <img
              src={card}
              className={`mx-auto h-16 w-16 rounded-sm object-cover ${
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
