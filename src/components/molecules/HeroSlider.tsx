import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Import ikon kutip

const slides = [
  {
    image: "/tk-alirsyad/images/hero1.jpg",
    quote:
      "Pendidikan adalah senjata paling ampuh yang bisa digunakan untuk mengubah dunia.",
    author: "Nelson Mandela",
  },
  {
    image: "/tk-alirsyad/images/hero2.jpg",
    quote:
      "Belajar bukan tentang mengisi pikiran, tetapi menyalakan api semangat dalam diri.",
    author: "William Butler Yeats",
  },
  {
    image: "/tk-alirsyad/images/hero3.jpg",
    quote:
      "Masa depan dimiliki oleh mereka yang menyiapkan diri hari ini melalui ilmu dan pengetahuan.",
    author: "Malcolm X",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay lebih transparan */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-6">
            {/* Tanda kutip besar & teks kutipan */}
            <p className="text-white text-2xl font-semibold text-center max-w-lg drop-shadow-lg">
              <FaQuoteLeft className="inline text-3xl text-gray-300 mr-2" />
              {slide.quote}
              <FaQuoteRight className="inline text-3xl text-gray-300 ml-2" />
            </p>
            {/* Nama penulis */}
            <p className="text-gray-200 text-lg font-medium mt-3">
              - {slide.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
