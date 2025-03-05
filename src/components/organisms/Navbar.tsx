import React, { useState } from "react";
import NavLogo from "../atoms/NavLogo";
import NavMenu from "../molecules/NavMenu";
import NavButton from "../atoms/NavButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <NavLogo />

        {/* Wrapper Menu */}
        <div className="flex items-center">
          {/* Tombol Burger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={
                isOpen
                  ? "/sds-merpati/images/close.png"
                  : "/sds-merpati/images/menu.png"
              }
              alt="Menu"
              className="w-6 h-6"
            />
          </button>

          {/* Menu Navigasi */}
          <NavMenu isOpen={isOpen} />
        </div>

        {/* Tombol PPDB Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <NavButton
            text="PPDB"
            to="/ppdb"
            className="hidden md:flex items-center gap-5"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
