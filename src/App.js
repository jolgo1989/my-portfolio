import "./App.css";
// import Button from "./componenet/Button";

import Home from "./componenet/home/Home";
import About from "./componenet/about/About";
import Resume from "./componenet/resume/Resume";
import Porfolio from "./pages/Porfolio";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import React, { useState, useRef } from "react";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Porfolio />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
