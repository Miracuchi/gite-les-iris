import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/data";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  console.log(isMenuOpen);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !document.getElementById("menu-button")?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <>
      <header
        className={`${
          (isScrolled || !isHomePage) && !isMenuOpen
            ? "shadow-lg lg:bg-iris_purple"
            : "lg:bg-transparent"
        } relative z-30 w-full bg-iris_purple lg:fixed`}
      >
        <div className="mx-3 flex min-w-fit items-center justify-between">
          <Link
            to={navItems[0].path}
            className="z-30 flex items-center gap-x-2 whitespace-nowrap text-start text-2xl text-white lg:mr-48 lg:font-extrabold"
          >
            <img src="/src/assets/pictures/iris.png" alt="" className="h-6" />
            <span>Gîte les Iris</span>
          </Link>

          <nav className="flex lg:mr-10 lg:w-full">
            <ul className="hidden lg:my-3 lg:flex lg:w-full lg:items-center lg:justify-between">
              {renderNavItem}
              {
                <li className="flex h-full items-end justify-center">
                  <Button
                    text="Réserver maintenant"
                    url="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
                  />
                </li>
              }
            </ul>

            <div className="flex flex-col items-end lg:hidden">
              <div
                id="menu-button"
                onClick={toggleMenu}
                className="group z-[1] my-4 cursor-pointer space-y-1 text-3xl text-black lg:hidden"
              >
                {/* {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />} */}
                <div
                  className={`h-1 w-6 bg-iris_yellow transition-transform duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                ></div>
                <div
                  className={`h-1 w-6 bg-iris_yellow transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></div>
                <div
                  className={`h-1 w-6 bg-iris_yellow transition-transform duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                ></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div>
        <ul
          ref={menuRef}
          className={`absolute right-0 z-20 flex h-[95dvh] w-screen flex-col content-stretch bg-iris_purple pb-10 pt-0 shadow-xl transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <span>{renderNavItem}</span>
          <li
            className="flex h-full items-end justify-center"
            onClick={toggleMenu}
          >
            <Button
              text="Réserver maintenant"
              url="https://www.booking.com/hotel/fr/gite-les-iris.fr.html?aid=385785&label=metakayak-linkdsk-corefr-hotel-53810_los-05_bw-028_curr-EUR_nrm-01_gstadt-03_gstkid-01_lang-fr_sat-0_dow-sat_aff-0_mcid-10_clkid-OO9Eg6Edt5HiSydub2K5XQ&sid=bb7ff456fef040781ad50ef677b82f43&dest_id=663128;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1727301921;srpvid=4be69b5370e70506;type=total;ucfs=1&"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
