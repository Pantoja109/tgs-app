import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="mx-0 w-full px-4 py-6 bg-pink-200 6 flex justify-between">
      <Link to={"/"}>
        <p className="text-pink-600 text-2xl font-bold">The Shopping Girl</p>
      </Link>
      <FaBars className="text-pink-600 w-6 h-6" />
    </header>
  );
}
