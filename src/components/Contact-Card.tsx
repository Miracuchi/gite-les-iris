export default function ContactCard({
  className,
  shouldShadow,
}: {
  shouldShadow: boolean;
  className?: string;
}) {
  return (
    <>
      <div
        className={`mb-12 bg-iris_purple h-full mx-5 p-5 rounded-xl md:mt-16 text-black text-center ${
          shouldShadow ? "shadow-lg" : "shadow-none"
        } ${className}`}
      >
        <h1 className="text-2xl mb-2">Contactez-nous</h1>
        <p>Gîte les iris</p>
        <p> Aïdée SANCHEZ</p>
        <p>44 bis rue de Montbarbin</p>
        <p>77580 CRECY LA CHAPELLE</p>
        <p className="mt-3">Téléphone : </p>
        <p>+33 6 87 38 64 95</p>
        <p>+33 9 75 25 41 12</p>
        <p>
          <a
            href="mailto:gestion@locationstudiocrecy.fr"
            className="underline text-blue-300"
          >
            gestion@locationstudiocrecy.fr
          </a>
        </p>
      </div>
    </>
  );
}
