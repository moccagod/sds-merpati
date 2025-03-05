import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  title: string;
  items: { label: string; href: string }[];
  iconClosed: string;
  iconOpened: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  items,
  iconClosed,
  iconOpened,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full md:w-auto">
      {/* Dropdown Button */}
      <button
        className="px-4 py-2 flex items-center text-gray-700 hover:text-blue-600 w-full md:w-auto cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
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
        className={`${
          isOpen ? "block" : "hidden"
        } md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:shadow-lg md:rounded-md`}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href} // Use Link component for routing
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
