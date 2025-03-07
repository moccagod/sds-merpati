import React from "react";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  title: string;
  items: { label: string; href: string }[];
  iconClosed: string;
  iconOpened: string;
  isOpen: boolean;
  onToggle: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  items,
  iconClosed,
  iconOpened,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="relative w-full md:w-auto cursor-pointer">
      {/* Dropdown Button */}
      <button
        className="px-4 py-2 flex items-center justify-between text-gray-700 hover:text-blue-600 w-full md:w-auto cursor-pointer"
        onClick={onToggle}
      >
        {title}
        <img
          src={isOpen ? iconOpened : iconClosed}
          alt="Dropdown Icon"
          className="ml-2 w-4 h-4"
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} 
          md:absolute md:mt-2 md:w-56 md:border md:border-gray-300 md:bg-white md:shadow-lg md:rounded-md
          md:right-0 md:left-auto`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={onToggle} // ✅ Tutup dropdown saat item diklik
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
