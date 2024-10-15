import { SetStateAction, useState } from "react";
import Modal from "react-modal";
import Slider from "./Slider";
interface GalleryProps {
  title: string;
  slides: string[];
}
export default function GallerySection({
  galleryData,
}: {
  galleryData: GalleryProps;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="mx-auto w-[75%]">
      <h3 className="mb-4 mt-10 text-left text-2xl font-bold capitalize">
        {galleryData.title}
      </h3>
      <div className="mx-auto grid cursor-pointer gap-5 md:grid-cols-3">
        {galleryData.slides.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center duration-300 md:hover:scale-110"
          >
            <img
              src={card}
              className="h-64 w-full rounded-2xl object-cover"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="z-30 flex h-full w-full items-center justify-center"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.90)" },
        }}
      >
        <div className="relative -mt-2 h-[80vh]">
          <button
            onClick={closeModal}
            className="absolute right-2 top-2 p-2 text-white"
          >
            X
          </button>

          <Slider
            closeModal={closeModal}
            slides={galleryData.slides}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
      </Modal>
    </section>
  );
}
