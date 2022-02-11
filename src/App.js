import "./App.css";
import FccClock from "./Components/FccClock/FccClock";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <h1 className="text-center p-2 bg-primary mb-5 text-light">FCC 25 + 5 Clock</h1>
      <FccClock />
    </div>
  );
};

export default App;
