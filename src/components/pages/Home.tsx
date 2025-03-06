import Footer from "../organisms/Footer";
import HeroBanner from "../organisms/HeroBanner";
import Navbar from "../organisms/Navbar";
import SambutanCard from "../organisms/SambutanCard";
import WelcomeSection from "../organisms/WelomeSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <WelcomeSection />
      <SambutanCard />
      <div className="h-60">

      </div>
      <Footer />
    </div>
  );
};

export default Home;
