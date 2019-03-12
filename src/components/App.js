import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import OurServicesSection from "./OurServicesSection";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("main"));