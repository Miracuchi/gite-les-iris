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
    <section className="w-[75%] mx-auto">
      <h3 className="mt-10 capitalize text-2xl font-bold mb-4 text-left">
        {galleryData.title}
      </h3>
      <div className="grid md:grid-cols-3 gap-5  mx-auto cursor-pointer">
        {galleryData.slides.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 duration-300"
          >
            <img
              src={card}
              className="rounded-2xl h-64 object-cover w-full"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center w-full h-full z-30"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.90)" },
        }}
      >
        <div className="relative h-[80vh] -mt-2">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 p-2 text-white"
          >
            X
          </button>

          <Slider
            closeModal={closeModal}
            slides={galleryData.slides}
            currentImageIndex={currentImageIndex}
          />
          <div className="md:flex hidden gap-5 w-[75%] mx-auto cursor-pointer justify-center mt-2">
            {galleryData.slides.map((card, index) => (
              <div key={index} className="">
                <img
                  src={card}
                  className="rounded-sm h-16 w-16 object-cover mx-auto"
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}
