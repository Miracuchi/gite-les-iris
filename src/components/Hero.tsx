export default function Hero() {
  return (
    <section
      datatype="hero"
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/src/assets/ressources/bannerIris.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-5">
          Bienvenue au Gîte les Iris
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          Nous serons ravis de vous accueillir dans notre gîte situé à Crécy la
          chapelle (77).
        </p>
        <button className="px-6 py-3 bg-iris_yellow text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
          Réserver maintenant
        </button>
      </div>
    </section>
  );
}
