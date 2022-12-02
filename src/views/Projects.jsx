import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wine1 from "../img/WineBuddy-Dash.png";
import wine2 from "../img/WineBuddy-Reg.png";
import wine3 from "../img/WineBuddy-Wines.png";
import wine4 from "../img/WineBuddy-oneWine.png";
import wineIcon from "../img/wineIcon.png";
import gitHub from "../img/githubIcon.png";
import bread1 from "../img/HearthBakeryPic.png";
import bread2 from "../img/Bakery1.png";
import bread3 from "../img/Bakery2.png";
import bread4 from "../img/Bakery3.png";
import bread5 from "../img/Bakery4.png";
import breadIcon from "../img/breadIcon.png";
import funk1 from "../img/Funk1.png";
import funk2 from "../img/Funk2.png";
import funk3 from "../img/Funk3.png";
import funkIcon from "../img/funkIcon.png";

const Projects = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <br />,
    prevArrow: <br />,
  };
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project">
          <div className="project-info">
            <h2>Wine Buddy</h2>
            <h4>React Redux Node.js Express.js MongoDB JWT CSS Bootstrap </h4>
            <p>
              Wine Buddy Gives users the ability to showcase wines they've
              enjoyed while learning about wine that other users have tried.
            </p>
            <div className="linkbox">
              <a href="https://wine-buddy-app.onrender.com/">
                <img src={wineIcon} alt="Wine Icon" />
              </a>
              <a href="https://github.com/Nbfern90/WineBuddy-client">
                <img src={gitHub} alt="Github" />
              </a>
            </div>
          </div>
          <div className="carousel">
            <Slider {...carouselSettings}>
              <div>
                <img src={wine1} alt="" />
              </div>
              <div>
                <img src={wine2} alt="" />
              </div>
              <div>
                <img src={wine3} alt="" />
              </div>
              <div>
                <img src={wine4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h2>Bread Baker</h2>
            <h4>Javascript HTML CSS Mapbox </h4>
            <p>
              Bread Baker is an E-commerce site for a Mom 'n Pop style bakery.
              Fully responsive with working cart and geo-location via the Mapbox
              API.
            </p>
            <div className="linkbox">
              <a href="https://hearth-bakery.netlify.app/">
                <img src={breadIcon} alt="Bread Icon" />
              </a>

              <a href="https://github.com/Nbfern90/Bread-Baker">
                <img src={gitHub} alt="Github" />
              </a>
            </div>
          </div>
          <div className="carousel">
            <Slider {...carouselSettings}>
              <div>
                <img src={bread1} alt="" />
              </div>
              <div>
                <img src={bread2} alt="" />
              </div>
              <div>
                <img src={bread3} alt="" />
              </div>
              <div>
                <img src={bread4} alt="" />
              </div>
              <div>
                <img src={bread5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h2>Funk Generator</h2>
            <h4>Javascript HTML CSS </h4>
            <p>
              Funk Generator is a video shuffle player. At the tough of a
              button, users can randomly loop through a playlist of classic Funk
              and Funk influenced videos of the '70s and '80s.
            </p>
            <div className="linkbox">
              <a href="https://funkgenerator.netlify.app/">
                <img src={funkIcon} alt="James Brown" />
              </a>
              <a href="https://github.com/Nbfern90/FUNKGENERATOR">
                <img src={gitHub} alt="Github" />
              </a>
            </div>
          </div>
          <div className="carousel">
            <Slider {...carouselSettings}>
              <div>
                <img src={funk1} alt="" />
              </div>
              <div>
                <img src={funk2} alt="" />
              </div>
              <div>
                <img src={funk3} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
