import ContactCard from "../components/Contact-Card";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    // <div className="relative mt-20 mb-3 w-[90%] md:w-[75%] mx-auto rounded-lg shadow-lg">
    //   {/* Image d'arrière-plan floutée */}
    //   <div
    //     className="absolute inset-0 rounded-lg z-0"
    //     style={{
    //       backgroundImage: `url("/src/assets/pictures/crecy/crecy2.jpg")`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       filter: "blur(8px)", // Applique le flou
    //       opacity: 0.6, // Ajouter de l'opacité si souhaité
    //     }}
    //   />

    //   {/* Overlay pour sombre et contenu */}
    //   <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-lg" />

    //   {/* Contenu par-dessus */}
    //   <div className="relative z-10 md:flex md:justify-evenly bg-transparent rounded-lg flex-col md:flex-row p-5">
    //     <ContactForm className="md:order-3 order-1" />

    //     <div className="w-[1px] bg-white my-14 hidden md:flex md:order-2" />
    //     <div className="h-[1px] bg-white mx-12 md:hidden order-2" />

    //     <ContactCard shouldShadow={false} className="md:order-1 order-3" />
    //   </div>
    // </div>

    <section
      datatype="hero"
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("/src/assets/pictures/studio_pictures/terrasseSousLaNeige.jpg")',
      }}
    >
      {/* Overlay de fond pour assombrir */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white">
        <div className="relative z-10 md:flex md:justify-evenly bg-transparent rounded-lg flex-col md:flex-row mt-2 border-2 border-white md:p-0 md:mt-20 md:w-[60%] 2xl:w-[50%]">
          {/* Pseudo-élément pour flouter l'intérieur */}
          <div className="absolute inset-0 bg-transparent rounded-lg backdrop-blur-sm pointer-events-none"></div>

          {/* Contenu non affecté par le flou */}
          <ContactForm className="relative z-10 md:order-3 order-1" />
          <div className="relative w-[1px] bg-white my-14 hidden md:flex md:order-2" />
          <div className="relative h-[1px] bg-white mx-12 md:hidden order-2 mb-4" />
          <ContactCard
            shouldShadow={false}
            className="relative z-10 md:order-1 order-3"
          />
        </div>
      </div>
    </section>
  );
}
