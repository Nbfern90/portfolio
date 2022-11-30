import React from "react";
import Header from "./components/Header";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Skills from "./views/Skills";

function App() {
  return (
    <div className="container">
      <Header />
      <Dashboard />
      <About />
      <Skills />
    </div>
  );
}

export default App;
