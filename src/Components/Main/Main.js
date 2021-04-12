import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

export default function Main() {
  return (
    <>
      <div className="main">
        <header className="header">
          <div className="__headline">
            <h1>Hello, I'm Anthony Giannotti.</h1>
            <p className="__About">
              A Chicago-based full-stack web developer. I have a passion for
              dynamic and interesting applications, thinking broadly, and
              tuning-in to the latest advancements in software development.
            </p>
          </div>
        </header>
        <Header />
        <footer className="main-footer">©Agiannotti</footer>
      </div>
      <Projects />
    </>
  );
}
