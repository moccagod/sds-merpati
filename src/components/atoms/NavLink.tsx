import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  text: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href, className }) => {
  return (
    <Link
      to={href} // Remove the hash since it's already included in the href

      className={`px-4 py-2 text-gray-700 hover:text-blue-600 ${className}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
