import React from "react";
import AliceCarousel from "react-alice-carousel";
import wine1 from "../img/WineBuddy-Dash.png";
import wine2 from "../img/WineBuddy-Reg.png";
import wine3 from "../img/WineBuddy-Wines.png";
import wine4 from "../img/WineBuddy-oneWine.png";
import wine5 from "../img/WineBuddy-Edit.png";
import wineIcon from "../img/wineIcon.png";
import gitHub from "../img/githubIcon.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-info">
            <h1>Wine Buddy</h1>
            <h4>React Redux Node.js Express.js MongoDB JWT CSS Bootstrap </h4>
            <p>
              Wine Buddy Gives users the ability to showcase wines they've
              enjoyed while learning about wine that other users have tried.
            </p>
            <div className="linkbox">
              <img src={wineIcon} />
              <img src={gitHub} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <AliceCarousel autoPlay autoPlayInterval="3000">
<img src={wine1} className="sliderimg" />
<img src={wine2} className="sliderimg" />
<img src={wine3} className="sliderimg" />
<img src={wine4} className="sliderimg" />
<img src={wine5} className="sliderimg" />
</AliceCarousel> */
}
