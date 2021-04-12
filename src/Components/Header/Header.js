import React from "react";
import "./Header.css";

import face from "../../Images/Photo/soho-self.jpg";
import launch from "../../Images/Thumbnails/launch.png";
import github from "../../Images/Thumbnails/github.png";
import linkedin from "../../Images/Thumbnails/linkedin.png";
import emailimg from "../../Images/Thumbnails/Email.png";

export default function HeaderBar() {
  return (
    <>
      <header className="header">
        <div className="__headline">
          <h1>Hello, I'm Anthony Giannotti.</h1>
          <p className="__About">
            {/* Software Engineer <br />
            Cat Dad
            <br /> Chicago, Illinois.
            <br /> */}
            <ul className="__bio">
              <li>Software Engineer | Javascript | React</li>
              <li>Cat Dad</li>
              <li>CSS Lover</li>
              <li>Musician</li>
              <li>Former Chef</li>
              <li>Coffee nerd</li>
            </ul>
          </p>
        </div>
      </header>
      <div className="header-box">
        <li>
          <div>
            <span>
              <img id="face-img" src={face} alt="face-img" />
            </span>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://github.com/agiannotti"
              style={{ textDecoration: "none" }}
            >
              <img className="git-img" src={github} alt="github" />
              GitHub
              <img className="launch-img" src={launch} alt="launch-img" />
            </a>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/agiannotti/"
              style={{ textDecoration: "none" }}
            >
              <img className="linkedin-img" src={linkedin} alt="linkedin" />
              LinkedIn
              <img className="launch-img" src={launch} alt="launch-img" />
            </a>
          </div>
          <div>
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href={`mailto:${"aj.gianno@gmail.com"}`}
              style={{ textDecoration: "none" }}
            >
              <img className="email-img" src={emailimg} alt="email" />
              Email
              <img className="launch-img" src={launch} alt="launch-img" />
            </a>
          </div>
        </li>
      </div>
    </>
  );
}
