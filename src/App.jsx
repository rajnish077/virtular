import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default App;
