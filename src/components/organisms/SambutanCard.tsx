import { FaArrowRight } from "react-icons/fa";

const SambutanCard: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 bg-green-950">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Bagian Kiri: Foto dan Sambutan Kepala Sekolah */}
        <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-2/3">
          {/* Foto Kepala Sekolah */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-teal-500 flex items-center justify-center">
              <img
                src="/tk-alirsyad/images/teacher.png" // Ganti dengan path foto kepala sekolah
                alt="Kepala Sekolah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Sambutan Kepala Sekolah */}
          <div className="md:w-2/3 flex flex-col md:px-2 text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-lg font-bold text-gray-900">
              Sambutan Kepala Sekolah
            </h3>
            <h4 className="text-md font-semibold text-gray-700 mt-1">
              Achmad Sunanda, S.Pd.
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Puji dan syukur kami panjatkan ke hadirat Allah SWT, karena dengan
              rahmat dan karunianya pembuatan website sekolah ini dapat
              terwujud.
            </p>
            {/* Container Tombol: Dibuat agar tombol berada di tengah di HP */}
            <div className="mt-4 flex justify-center md:justify-start">
              <button className="bg-green-950 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-800 transition cursor-pointer">
                Lebih Lengkap <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Statistik Data Sekolah */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Statistik Data Sekolah
          </h3>
          <div className="flex justify-center items-center gap-6 md:gap-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">GURU & STAF</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>{" "}
            {/* Garis separator */}
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">139</p>
              <p className="text-sm text-gray-600">SISWA</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>{" "}
            {/* Garis separator */}
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-sm text-gray-600">ROMBEL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SambutanCard;
