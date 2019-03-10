import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";

const App = () => {
  return (
    <div className={styles.app}>
      <p>Klean apps</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));