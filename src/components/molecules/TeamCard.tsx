// components/molecules/TeamCard.tsx
import { FC } from "react";
import SocialIcon from "../atoms/SocialIcon";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
}

const TeamCard: FC<TeamCardProps> = ({ image, name, role, socials }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 text-center hover:scale-110 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <div className="mt-3 flex justify-center gap-4">
        <SocialIcon icon={<FaFacebookF />} link={socials.facebook} />
        <SocialIcon icon={<FaInstagram />} link={socials.instagram} />
        <SocialIcon icon={<FaLinkedinIn />} link={socials.linkedin} />
        <SocialIcon icon={<FaWhatsapp />} link={socials.whatsapp} />
      </div>
    </div>
  );
};

export default TeamCard;
