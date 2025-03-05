import React from "react";
import NavLink from "../atoms/NavLink";
import NavDropdown from "./NavDropdown";
import NavButton from "../atoms/NavButton";

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen }) => {
  return (
    <div>
      <nav
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:w-auto md:flex md:gap-4 md:bg-transparent md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
          <NavLink text="Beranda" href="/" />
          <NavDropdown
            title="Profil"
            items={[
              {
                label: "Sambutan Kepala Sekolah",
                href: "/sambutan-kepala-sekolah",
              },
              { label: "Visi & Misi", href: "/visi-dan-misi" },
              { label: "Sejarah", href: "/sejarah" },
              { label: "Guru & Tendik", href: "/guru-dan-tendik" },
              { label: "Akreditasi", href: "/akreditasi" },
            ]}
            iconClosed="/tk-alirsyad/images/arrowdown.png"
            iconOpened="/tk-alirsyad/images/arrowup.png"
          />
          <NavLink text="Prestasi" href="/prestasi" />
          <NavLink text="Berita" href="/berita" />
          <NavLink text="Kontak" href="/kontak" />
        </div>

        {/* Ikon dan Tombol dimasukkan ke dalam menu burger di HP */}
        <div className="flex flex-col items-center md:hidden px-4 pb-4">
          <NavButton
            text="PPDB"
            to="/ppdb"
            className="bg-green-950 text-white w-full text-center hover:bg-green-800"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
