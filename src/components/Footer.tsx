import { useContext } from "react";
import Button from "./Button";
import { LanguageContext } from "./LanguageContext";

export default function Footer() {
  const { translations } = useContext(LanguageContext);
  return (
    <footer className="bg-iris_purple text-white">
      <div className="mx-3 flex flex-col items-center space-y-3 py-5 md:mx-auto md:w-9/12 md:items-start">
        <Button
          className="text-start"
          text={translations.rent as string}
          url="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
        />
        <div className="mx-auto h-[1px] w-9/12 bg-white md:w-full"></div>
        <span className="md:self-end md:text-right">
          All right reserved Miracuchi
        </span>
      </div>
    </footer>
  );
}
