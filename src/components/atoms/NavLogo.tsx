import React from "react";

const NavLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/tk-alirsyad/images/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
      <h1 className="hidden md:flex text-lg font-bold">TK IT AL-IRSYAD AL-ISLAMIYAH</h1>
    </div>
  );
};

export default NavLogo;
