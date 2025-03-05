import React from "react";
import NavigationLinks from "../molecules/NavigationLinks";
import SupportLinks from "../molecules/SupportLinks";
import ContactInfo from "../molecules/ContactInfo";
import IconLink from "../atoms/IconLink";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white py-8 px-6 md:px-16">
      {/* Grid untuk Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <NavigationLinks />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <SupportLinks />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <ContactInfo />
        </div>
      </div>

      {/* Garis Pemisah */}
      <div className="border-t border-gray-600 mt-6 pt-4 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        {/* Ikon Sosial Media */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <IconLink
            href="https://www.instagram.com"
            icon={<FaInstagram size={20} />}
          />
          <IconLink
            href="https://www.facebook.com"
            icon={<FaFacebook size={20} />}
          />
          <IconLink
            href="https://www.linkedin.com"
            icon={<FaLinkedin size={20} />}
          />
          <IconLink
            href="https://www.youtube.com"
            icon={<FaYoutube size={20} />}
          />
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          Copyright © 2024 <span className="text-orange-500">TK Al-Irsyad</span>{" "}
          All Rights Reserved | Made By <span className="font-bold">AZMI NAILAL HADI</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
