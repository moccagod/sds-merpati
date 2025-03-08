import EventSection from "../organisms/EventSection";
import Footer from "../organisms/Footer";
import HeroBanner from "../organisms/HeroBanner";
import Navbar from "../organisms/Navbar";
import SambutanCard from "../organisms/SambutanCard";
import TeamSection from "../organisms/TeamSection";
import WelcomeSection from "../organisms/WelomeSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <WelcomeSection />
      <SambutanCard />
      <TeamSection />
      <EventSection />
      <div className="bg-white h-14">

      </div>
      <Footer />
    </div>
  );
};

export default Home;
