import React from "react";
import github from "../img/githubIcon.png";
import gmail from "../img/gmail.png";
import linkedin from "../img/linkedin.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-links">
          <a href="mailto:nbfern90@gmail.com">
            <img src={gmail} alt="gmail" />
          </a>
          <a href="https://github.com/Nbfern90">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/nick-fernandez-8173a521b/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="copyright">
          <p>© 2022 Nick Fernandez</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
