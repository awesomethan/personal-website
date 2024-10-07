import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Timeline from "./Components/Timeline";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="background">
        <Nav />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
