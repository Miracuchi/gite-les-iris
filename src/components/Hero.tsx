import { buttonText } from "../data/constant";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      datatype="hero"
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/src/assets/pictures/bannerIris.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-5 text-5xl font-bold md:text-7xl">
          Bienvenue au Gîte les Iris
        </h1>
        <p className="mb-10 text-lg md:text-2xl">
          Nous serons ravis de vous accueillir dans notre gîte situé à Crécy la
          chapelle (77).
        </p>
        <a
          href="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
          target="_blank"
        >
          <Button text={buttonText.rent} />
        </a>
      </div>
    </section>
  );
}
