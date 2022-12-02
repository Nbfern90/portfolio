import React from "react";
import Header from "./components/Header";
import About from "./views/About";
import Contact from "./views/Contact";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Technologies from "./views/Technologies";

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
