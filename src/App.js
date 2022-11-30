import React from "react";
import Header from "./components/Header";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Technologies from "./views/Technologies";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
