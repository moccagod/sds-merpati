import React from "react";
import FeatureItem from "../atoms/FeatureItem";

// Path gambar di folder `public/assets/`
const features = [
  {
    icon: "/tk-alirsyad/images/b.png",
    title: "Akreditasi B",
    description:
      "Sekolah kami saat ini sudah Terverifikasi dan Terakreditasi B",
  },
  {
    icon: "/tk-alirsyad/images/gogreen.png",
    title: "TK PK - Adiwiyata",
    description:
      "Sekolah Pusat Keunggulan, Sekolah Adiwiyata dan Sekolah Ramah Anak",
  },
  {
    icon: "/tk-alirsyad/images/teacher.png",
    title: "Guru Kompeten",
    description: "Guru yang up-to-date dengan perkembangan dunia industri",
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Judul Section */}
        <h2 className="text-3xl font-bold">
          Kenapa harus sekolah di{" "} <br className="md:hidden"/>
          <span className="text-green-950">TK Al-Irsyad?</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Alasan kenapa kalian harus bergabung <br className="md:hidden" /> di TK Al-Irsyad
        </p>

        {/* Daftar Keunggulan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
