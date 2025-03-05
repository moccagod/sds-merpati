import React from "react";

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-orange-500 transition"
    >
      {icon}
    </a>
  );
};

export default IconLink;
