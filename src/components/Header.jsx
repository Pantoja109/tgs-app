import { FaBars } from "react-icons/fa";
export function Header() {
  return (
    <header className="mx-0 w-full px-4 py-6 bg-pink-200 6 flex justify-between">
      <p className="text-pink-600 text-2xl font-bold">The Shopping Girl</p>
      <FaBars className="text-pink-600 w-6 h-6" />
    </header>
  );
}
