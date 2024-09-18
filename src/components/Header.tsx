import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { name: "accueil", path: "/" },
    { name: "à propos", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "louer", path: "/rent" },
    { name: "gallery", path: "/gallery" },
  ];
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
  const renderNavItem = navItems.map((navItem) => (
    <li className="capitalize mt-7 md:mt-0">
      <Link
        className="hover:underline text-center text-white"
        to={navItem.path}
      >
        {navItem.name}
      </Link>
    </li>
  ));

  return (
    <div
      className={`${
        isScrolled ? "md:bg-iris_purple" : "md:bg-transparent"
      } md:fixed z-20  transition-colors duration-300 bg-iris_purple w-full`}
    >
      <div className="flex items-center justify-between mx-3 min-w-fit">
        <Link to={navItems[0].path} className="md:mr-96 whitespace-nowrap">
          Gîte les Iris
        </Link>
        <nav className="flex md:w-full">
          <ul className="md:flex md:justify-between md:w-full md:my-5 hidden">
            {renderNavItem}
          </ul>
          <div className="flex flex-col items-end z-20">
            <button className="space-y-1 group md:hidden my-5">
              <div className="w-6 h-1 bg-iris_yellow"></div>
              <div className="w-6 h-1 bg-iris_yellow"></div>
              <div className="w-6 h-1 bg-iris_yellow"></div>
              <ul className=" w-screen bg-iris_purple  pb-10 absolute -top-full right-0 group-focus:top-12 duration-150 flex flex-col space-y-3 justify-end">
                {renderNavItem}
              </ul>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
