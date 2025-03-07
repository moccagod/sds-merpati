import React, { useState, useEffect } from "react";
import NavLink from "../atoms/NavLink";
import NavDropdown from "./NavDropdown";
import NavButton from "../atoms/NavButton";

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Fungsi untuk toggle dropdown
  const handleToggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Fungsi untuk menutup dropdown ketika klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".dropdown-menu") &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:static md:w-auto md:flex md:gap-4 md:bg-transparent md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
          <NavLink text="Beranda" href="/" />

          {/* Dropdown Profil */}
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
            isOpen={openDropdown === "profil"}
            onToggle={() => handleToggleDropdown("profil")}
          />

          {/* Dropdown Akademik */}
          <NavDropdown
            title="Akademik"
            items={[
              { label: "Program Sekolah", href: "/proram-sekolah" },
              { label: "Kalender Akademik", href: "/kalender-akademik" },
              { label: "Prestasi", href: "/prestasi" },
            ]}
            iconClosed="/tk-alirsyad/images/arrowdown.png"
            iconOpened="/tk-alirsyad/images/arrowup.png"
            isOpen={openDropdown === "akademik"}
            onToggle={() => handleToggleDropdown("akademik")}
          />

          <NavLink text="Berita" href="/berita" />
          <NavLink text="Kontak" href="/kontak" />
        </div>

        {/* Ikon dan Tombol masuk ke menu burger di HP */}
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
