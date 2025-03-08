"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-gray-900", "text-white");
    return () => {
      document.body.classList.remove("bg-gray-900", "text-white");
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-red-700 text-black shadow-lg">
      <h1 className="text-3xl font-extrabold text-white">TRIUMF</h1>
      <button
        className="md:hidden p-2 text-black"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      <nav
        className={`absolute top-16 right-4 bg-black text-white shadow-lg rounded-md p-4 md:static md:flex md:space-x-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {["Help Ukraine", "Eat", "News", "Contact", "Money", "Hels"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block md:inline-block px-4 py-2 hover:text-red-400"
            >
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
