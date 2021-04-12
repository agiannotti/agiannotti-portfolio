import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

export default function Main() {
  return (
    <>
      <div className="main">
        <Header />
      </div>
      <div className="projects"></div>
      <Projects />
    </>
  );
}
