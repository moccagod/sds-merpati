import React from "react";

const BannerPpdb: React.FC = () => {
  return (
    <div
      className="relative w-full h-64 md:h-64 lg:h-72 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/tk-alirsyad/images/banner-ppdb.jpg')" }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Banner */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          PPDB TK AL-IRSYAD 2025 – 2026
        </h1>

        {/* Breadcrumb */}
        <p className="text-sm md:text-base mt-4">
          <a
            href="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            TK AL-IRSYAD
          </a>
          <span className="mx-2">&gt;</span>
          <span className="text-green-600">
            PPDB TK AL-IRSYAD 2024 – 2025
          </span>
        </p>

        {/* Button Daftar Sekarang */}
        <a
          href="/pendaftaran"
          className="mt-4 inline-block bg-green-950 hover:bg-green-800 text-white text-sm md:text-base font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default BannerPpdb;
