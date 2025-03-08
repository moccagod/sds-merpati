// components/organisms/TeamSection.tsx
import TeamCard from "../molecules/TeamCard";
import Button from "../atoms/Button";

const teamMembers = [
  {
    image: "/tk-alirsyad/images/teacher.png",
    name: "Achmad Sunanda",
    role: "Kepala Sekolah",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    image: "/tk-alirsyad/images/teacher.png",
    name: "Nengsing",
    role: "Guru",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
  {
    image: "/tk-alirsyad/images/teacher.png",
    name: "Arum",
    role: "Guru",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">GURU & TENDIK</h2>
        <div className="mt-6 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
        <Button
          text="Selengkapnya"
          to="/guru-dan-tendik"
          className="px-4 py-3 bg-green-950 rounded-lg text-white w-full text-center hover:bg-green-800"
        />
      </div>
    </section>
  );
};

export default TeamSection;
