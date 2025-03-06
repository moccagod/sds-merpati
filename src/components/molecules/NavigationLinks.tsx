import React from "react";

const links = [
  { name: "Beranda", href: "/tk-alirsyad/" },
  { name: "Prestasi", href: "#/prestasi" },
  { name: "Berita", href: "#/berita" },
  { name: "Kontak", href: "#/kontak" },
  { name: "PPDB", href: "#/ppdb" },
];

const NavigationLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-orange-500 font-bold mb-2">NAVIGASI</h3>
      <ul className="space-y-1 text-gray-300">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-white transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
