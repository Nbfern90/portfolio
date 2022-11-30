import React from "react";
import littleMe from "../img/x-mas.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <img src={littleMe} alt="Little Me" />
        <div className="about-info">
          <h1>About Me</h1>
          <p>
            I am a dedicated Full Stack Developer who enjoys thinking on my feet
            and troubleshooting. My knack for figuring out solutions I attribute
            to my years working in the Culinary Industry. I'm a motivated
            individual who likes to take challenges head-on.
          </p>
          <br />
          <p>
            With a Bachelor's Degree of Applied Science and Culinary Managment,
            I spent 10+ years working in the kitchens of downtown Chicago. When
            the pandemic happened, I took that opportunity to learn about web
            development and decided to enroll myself in a coding bootcamp.
            Though at times challenging, I came away with a great experenice and
            a new set of skills.
          </p>
          <br />
          <p>
            When I'm not coding, you'll find me: playing guitar, drinking
            coffee, expanding my collection of musical instruments, or seeking
            out unique bottles of wine from various parts of the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
