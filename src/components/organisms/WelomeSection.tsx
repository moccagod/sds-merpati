const WelcomeSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
      {/* Gambar Sekolah */}
      <div className="md:w-1/2">
        <img
          src="/tk-alirsyad/images/hero1.jpg"
          alt="Gedung Sekolah"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Teks Selamat Datang */}
      <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h3 className="text-lg font-semibold text-gray-900">
          Selamat Datang di
        </h3>
        <h2 className="text-3xl font-bold text-green-950">
          Website TK IT Al-Irsyad
        </h2>
        <p className="text-gray-600 mt-4">
          Website ini merupakan media informasi publik bagi masyarakat luas.
          Website ini juga merupakan media komunikasi berbagai informasi tentang
          akademik, kesiswaan maupun kegiatan lainnya.
        </p>
        <p className="text-gray-600 mt-4">
          Semoga dengan terus dikembangkannya website sekolah ini dapat menjadi
          wahana sumber informasi publik yang informatif kepada masyarakat
          luas...
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
