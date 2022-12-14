import React from "react";
import me from "../img/Mug.jpg";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dash-container">
        <div className="intro">
          <h1>Hey, I'm Nick</h1>
          <br />
          <h2>Web Developer</h2>
        </div>
        <img src={me} alt="me" />
      </div>
    </section>
  );
};

export default Dashboard;
