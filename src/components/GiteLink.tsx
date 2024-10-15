import { Link } from "react-router-dom";

export default function GiteLink() {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-x-2 whitespace-nowrap text-start text-2xl font-extrabold text-white"
    >
      <img src="/src/assets/pictures/iris.png" alt="" className="h-6" />
      <span>Gîte les Iris</span>
    </Link>
  );
}
