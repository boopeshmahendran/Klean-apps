import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import SectionLine from "./SectionLine";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <SectionLine />
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
      <p>weoriuweoir</p>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("main"));