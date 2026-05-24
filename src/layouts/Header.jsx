import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import RGBWrapper from "../components/RGBWrapper";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <header className="bg-white relative z-50">
      <div className="bg-white flex items-center justify-between px-8 pt-12 pb-4 relative z-20">
        <div className="text-xl font-semibold uppercase">Ihor Levin</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 border border-transparent hover:border-gray-800 transition-colors duration-300 cursor-pointer z-50"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`
        absolute z-10 flex items-center gap-4 p-4 border-y border-gray-800 bg-linear-to-r from-slate-200 to-white w-full top-full transition-all duration-500 max-md:flex-col
        ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
      `}
      >
        {menuItems.map((item) => (
          <RGBWrapper
            key={item}
            className="w-44 h-20 bg-gray-50 hover:bg-black transition-colors duration-300 max-md:w-full md:flex-1"
          >
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full h-full text-gray-800 group-hover:text-white transition-colors duration-300"
            >
              <span className="font-semibold text-sm tracking-widest uppercase">
                {item}
              </span>
            </a>
          </RGBWrapper>
        ))}
      </div>
    </header>
  );
};

export default Header;
