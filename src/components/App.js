import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutUsSection />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("main"));