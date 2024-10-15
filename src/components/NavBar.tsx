import { useContext, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import Button from "./Button";
import GiteLink from "./GiteLink";
import { LanguageContext } from "./LanguageContext";
import LanguageDropdownV2 from "./LanguageSelectorV2";
import { MenuContext } from "./MenuContext";

export default function NavBar() {
  const { translations } = useContext(LanguageContext);
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext);

  const location = useLocation();
  const menuRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location, setIsMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useClickOutside(menuRef, toggleMenu, "menu-button");
  const navItems = [
    { name: translations.home, path: "/" },
    { name: translations.about, path: "/about" },
    { name: translations.contact, path: "/contact" },
    { name: translations.activities, path: "/activities" },
    { name: translations.gallery, path: "/gallery" },
  ];

  const renderNavItem = navItems.map((navItem, index) => (
    <li
      onClick={toggleMenu}
      key={index}
      className="mt-7 text-center capitalize text-white lg:mt-0 lg:hover:text-iris_yellow"
    >
      <Link to={navItem.path} className="">
        {navItem.name}
      </Link>
    </li>
  ));
  return (
    <nav className="flex lg:mr-10 lg:w-full">
      <ul className="hidden lg:my-3 lg:flex lg:w-full lg:items-center lg:justify-between">
        {renderNavItem}

        <li className="flex h-full items-end justify-center">
          <Button
            text={translations.rent as string}
            url="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
          />
        </li>
      </ul>

      <div className="flex flex-col items-end lg:hidden">
        <div
          id="menu-button"
          onClick={toggleMenu}
          className="group z-[1] my-4 cursor-pointer space-y-1 text-3xl text-iris_yellow lg:hidden"
        >
          <RxHamburgerMenu />
          {/* <div
            className={`h-1 w-6 bg-iris_yellow transition-transform duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          ></div>
          <div
            className={`h-1 w-6 bg-iris_yellow transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`h-1 w-6 bg-iris_yellow transition-transform duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></div> */}
        </div>
      </div>

      <div
        className={`absolute left-0 z-10 flex h-screen w-full flex-col content-stretch overflow-hidden bg-iris_purple pb-16 pt-0 shadow-xl transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-2 mt-2 flex w-full items-center">
          <span className="w-full">
            <GiteLink />
          </span>

          <AiOutlineClose className="mr-4 self-end justify-self-end text-4xl text-iris_yellow" />
        </div>

        {isMenuOpen && (
          <>
            <ul ref={menuRef}>
              <span>{renderNavItem}</span>
              <li>
                <LanguageDropdownV2 />
              </li>
              <li
                className="mt-7 flex flex-col items-center justify-center"
                onClick={toggleMenu}
              >
                <Button
                  text={translations.rent as string}
                  url="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
                />
              </li>
            </ul>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 z-[7] bg-white bg-opacity-30 backdrop-blur-sm"></div>
      )}
    </nav>
  );
}
