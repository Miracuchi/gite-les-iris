import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { name: "accueil", path: "/" },
    { name: "à propos", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "louer", path: "/rent" },
    { name: "gallery", path: "/gallery" },
  ];
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
    <div className="bg-iris_purple">
      <div className="flex items-center justify-between mx-3 min-w-fit">
        <Link to={navItems[0].path} className="md:mr-96 whitespace-nowrap">
          Gîte les Iris
        </Link>
        <nav className="flex md:w-full">
          <ul className="md:flex md:justify-between md:w-full md:my-5 hidden">
            {renderNavItem}
          </ul>
          <div className="flex flex-col items-end">
            <button className="space-y-1 group md:hidden my-5">
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
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
