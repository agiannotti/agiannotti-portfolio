import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

export default function Main() {
  return (
    <div className="theBiggestBoy">
      <div className="main">
        <header className="header">
          <div className="__headline">
            <h1>Hello, I'm Anthony Giannotti.</h1>
            <p className="__About">
              A Chicago-based full-stack web developer. I have a passion for
              dynamic and interesting applications, thinking broadly, and
              tuning-in to the latest advancements in software development.
              {/* <br />
              <br />I strive to learn, to focus, and to listen. My goal is to
              become part of a team of hardworking developers, and to hone my
              own role and skillset.
              <br />
              <br />I enjoy sudoku, cold-weather, CSS, and black-coffee. I began
              my programming journey when I was a kid, flashing various devices
              with firmware to run Pokemon games and other JRPGS. */}
            </p>
          </div>
        </header>
        <Header />
        <footer className="main-footer">©Agiannotti</footer>
      </div>
      <Projects />
    </div>
  );
}
