import React from "react";
import {render} from "react-snapshot";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import AboutUsSection from "./AboutUsSection";
import OurServicesSection from "./OurServicesSection";
import GetInTouchSection from "./GetInTouchSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <ProcessSection />
      <AboutUsSection />
      <OurServicesSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
};
export default App;

render(<App />, document.getElementById("main"));