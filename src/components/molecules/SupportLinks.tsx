import React from "react";

const links = [
  { name: "Sambutan Kepala Sekolah", href: "#/sambutan-kepala-sekolah" },
  { name: "Visi & Misi", href: "#/visi-dan-misi" },
  { name: "Sejarah", href: "#/sejarah" },
  { name: "Guru & Tendik", href: "#/guru-dan-tendik" },
  { name: "Akreditasi", href: "#/akreditasi" },
];

const SupportLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-orange-500 font-bold mb-2">PROFIL</h3>
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

export default SupportLinks;
