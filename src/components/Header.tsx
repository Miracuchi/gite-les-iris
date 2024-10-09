import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/data";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const renderNavItem = navItems.map((navItem, index) => (
    <li
      key={index}
      className="mt-7 text-center capitalize text-white md:mt-0 lg:hover:text-iris_yellow"
    >
      {navItem.isButton ? (
        <a href={navItem.path} target="_blank" rel="noopener noreferrer">
          <Button text={navItem.name} />
        </a>
      ) : (
        <Link to={navItem.path}>{navItem.name}</Link>
      )}
    </li>
  ));

  return (
    <header
      className={`${
        isScrolled || !isHomePage
          ? "shadow-lg md:bg-iris_purple"
          : "md:bg-transparent"
      } z-20 w-full bg-iris_purple transition-colors duration-300 md:fixed`}
    >
      <div className="mx-3 flex min-w-fit items-center justify-between">
        <Link
          to={navItems[0].path}
          className="flex items-center gap-x-2 whitespace-nowrap text-2xl text-white md:mr-48 md:font-extrabold"
        >
          <img src="/src/assets/pictures/iris.png" alt="" className="h-6" />
          <span>Gîte les Iris</span>
        </Link>

        <nav className="flex md:mr-10 md:w-full">
          <ul className="hidden md:my-3 md:flex md:w-full md:items-center md:justify-between">
            {renderNavItem}
          </ul>
          <div className="z-20 flex flex-col items-end">
            <button className="group my-5 space-y-1 md:hidden">
              <div className="h-1 w-6 bg-iris_yellow"></div>
              <div className="h-1 w-6 bg-iris_yellow"></div>
              <div className="h-1 w-6 bg-iris_yellow"></div>
              <ul className="absolute -top-full right-0 flex w-screen flex-col justify-end space-y-3 bg-iris_purple pb-10 shadow-xl duration-150 group-focus:top-12">
                {renderNavItem}
              </ul>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
