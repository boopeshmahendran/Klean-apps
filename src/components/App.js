import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("main"));