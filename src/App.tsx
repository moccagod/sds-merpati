import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SambutanKepalaSekolah from "./components/pages/Profil/SambutanKepalaSekolah";
import GuruTendik from "./components/pages/Profil/GuruTendik";
import Sejarah from "./components/pages/Profil/Sejarah";
import VisiMisi from "./components/pages/Profil/VisiMisi";
import Prestasi from "./components/pages/Prestasi/Prestasi";
import Berita from "./components/pages/Berita/Berita";
import Kontak from "./components/pages/Kontak/Kontak";
import Ppdb from "./components/pages/PPDB/Ppdb";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/sambutan-kepala-sekolah"
        element={<SambutanKepalaSekolah />}
      />
      <Route path="/guru-dan-tendik" element={<GuruTendik />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/visi-dan-misi" element={<VisiMisi />} />
      <Route path="/prestasi" element={<Prestasi />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/ppdb" element={<Ppdb />} />
    </Routes>
  );
}

export default App;
