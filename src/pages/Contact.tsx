import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat md:h-screen"
      style={{
        backgroundImage:
          'url("/assets/pictures/studio_pictures/terrasseSousLaNeige.jpg")',
      }}
    >
      {/* Overlay de fond pour assombrir */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 mx-auto my-auto flex h-max flex-col items-center justify-center text-white">
        <div className="relative z-10 mt-2 w-[90%] flex-col rounded-lg border-2 border-white bg-transparent md:mt-20 md:flex md:w-[90%] md:flex-row md:justify-evenly md:p-0 lg:w-[60%] 2xl:w-[50%]">
          {/* Pseudo-élément pour flouter l'intérieur */}
          <div className="pointer-events-none absolute inset-0 rounded-lg bg-transparent backdrop-blur-sm"></div>

          {/* Contenu non affecté par le flou */}
          <ContactForm className="relative z-10 order-1 md:order-3" />
          <div className="relative my-14 hidden w-[1px] bg-white md:order-2 md:flex" />
          <div className="relative order-2 mx-12 mb-4 h-[1px] bg-white md:hidden" />
          <ContactCard
            shouldShadow={false}
            className="relative z-10 order-3 md:order-1"
          />
        </div>
      </div>
    </section>
  );
}
