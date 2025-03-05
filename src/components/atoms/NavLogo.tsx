import React from "react";

const NavLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/sds-merpati/images/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
      <h1 className="text-lg font-bold">SDS Merpati</h1>
    </div>
  );
};

export default NavLogo;
