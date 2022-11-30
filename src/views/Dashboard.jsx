import React from "react";
import moonknight from "../img/moon knight.jpg";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dash-container">
        <div className="intro">
          <h1>Hey, I'm Nick</h1>
          <br />
          <h2>Web Developer</h2>
        </div>
        <img src={moonknight} alt="moonknight" />
      </div>
    </section>
  );
};

export default Dashboard;
