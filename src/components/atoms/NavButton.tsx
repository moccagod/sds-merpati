import React from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  text: string;
  to: string; // Ganti dari onClick ke to
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, to, className }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 font-bold bg-green-950 duration-300 text-white rounded-lg hover:bg-green-800 transition ${className}`}
    >
      {text}
    </Link>
  );
};

export default NavButton;
