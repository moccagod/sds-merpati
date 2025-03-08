import React from "react";
import EventCard from "../molecules/EventCard";
import Button from "../atoms/Button";

const events = [
  {
    date: "10",
    month: "MAR",
    title: "Kegiatan Kunjungan TK IT AL-IRSYAD",
    eventDate: "10-03-2025",
    location: "TK IT AL-IRSYAD",
  },
  {
    date: "15",
    month: "MAR",
    title: "Buka Puasa Bersama",
    eventDate: "15-03-2025",
    time: "17.00",
    location: "MASJID SUKARTY, AL-IRSYAD",
  },
];

const EventSection: React.FC = () => {
  return (
    <section className="py-12 px-5 md:px-24 bg-white">
      {/* Judul */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-1 h-6 bg-yellow-500"></div>
        <span className="text-black font-semibold">Kegiatan Mendatang</span>
      </div>
      <h2 className="text-2xl font-extrabold text-green-950 mb-6">
        Acara / Kegiatan
      </h2>

      {/* Daftar Acara */}
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Tombol Lihat Semua */}
      <div className="mt-8 text-center">
        <Button
          text="Selengkapnya"
          to="/kalender-akademik"
          className="px-6 py-3 bg-green-950 rounded-lg text-white w-full text-center hover:bg-green-800"
        />
      </div>
    </section>
  );
};

export default EventSection;
