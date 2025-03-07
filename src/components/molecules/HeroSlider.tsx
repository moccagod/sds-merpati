import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/tk-alirsyad/images/hero1.jpg",
    title: "Pendaftaran PPDB 2025 Telah Dibuka!",
    description:
      "Segera daftarkan putra-putri Anda di sekolah kami. Kuota terbatas!",
    buttonText: "Daftar Sekarang",
    link: "/ppdb",
  },
  {
    image: "/tk-alirsyad/images/hero2.jpg",
    title: "Kegiatan Open House Sekolah",
    description:
      "Jangan lewatkan kesempatan untuk mengenal lebih dekat lingkungan sekolah kami!",
    buttonText: "Lihat Detail",
    link: "/event",
  },
  {
    image: "/tk-alirsyad/images/hero3.jpg",
    title: "Program Beasiswa Tahun Ajaran 2025",
    description:
      "Tersedia berbagai program beasiswa bagi siswa berprestasi. Daftarkan segera!",
    buttonText: "Cek Beasiswa",
    link: "/beasiswa",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay lebih transparan */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-6 text-center">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-gray-200 text-lg mt-2 max-w-xl drop-shadow-lg">
              {slide.description}
            </p>
            <button
              onClick={() => navigate(slide.link)}
              className="mt-4 bg-green-950 text-white px-5 py-2 rounded-full hover:bg-green-800 transition shadow-lg cursor-pointer"
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
