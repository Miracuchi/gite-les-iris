import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import GiteLink from "./GiteLink";
import LanguageDropdownV2 from "./LanguageSelectorV2";
import NavBar from "./NavBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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

  return (
    <>
      <header
        className={`${
          isScrolled || !isHomePage
            ? "shadow-lg lg:bg-iris_purple"
            : "md:bg-transparent"
        } relative z-50 w-full bg-iris_purple md:fixed`}
      >
        <div className="z-50 mx-3 flex min-w-fit items-center justify-between">
          <span className="lg:order-1">
            <GiteLink />
          </span>
          <span className="order-3 lg:order-2 lg:mx-24 lg:w-full">
            <NavBar />
          </span>
          <span className="hidden lg:order-3 lg:flex">
            <LanguageDropdownV2 />
          </span>
        </div>
      </header>
    </>
  );
}
