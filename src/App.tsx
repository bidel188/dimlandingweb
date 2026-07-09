import FeatureCards from "./components/FeatureCards";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Quote from "./components/Quote";
import RegistrationSection from "./components/RegistrationSection";
import Roadmap from "./components/Roadmap";
import Stats from "./components/Stats";
import StudyMethod from "./components/StudyMethod";
import Teacher from "./components/Teacher";

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <Header />
      <Hero />
      <FeatureCards />
      <StudyMethod />
      <Process />
      <Stats />
      <Teacher />
      <Roadmap />
      <RegistrationSection />
      <Quote />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
