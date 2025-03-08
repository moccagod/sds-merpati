import React, { FC } from "react";

interface SocialIconProps {
  icon: React.ReactNode;
  link: string;
}

const SocialIcon: FC<SocialIconProps> = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
