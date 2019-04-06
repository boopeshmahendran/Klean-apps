import React from "react";
import ReactDOM from "react-dom";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurServicesSection from "./OurServicesSection";
import GetInTouchSection from "./GetInTouchSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <AboutUsSection />
      {/* <OurServicesSection /> */}
      {/* <GetInTouchSection /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("main"));