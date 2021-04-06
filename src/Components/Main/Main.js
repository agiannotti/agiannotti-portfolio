import React from 'react';
import './Main.css';
import HeaderBar from '../HeaderBar/HeaderBar';
import Projects from '../Projects/Projects';

export default function Main() {
  return (
    <>
      <div className='main'>
        <header className='header'>
          <h1>Hello, I'm Anthony Giannotti.</h1>
          <p className='__About'>
            I'm a Chicago-based programmer, primarily focusing on Javascript,
            React, SQL, and Node. I have a passion for dynamic and interesting
            applications, thinking broadly, and tuning into the latest
            advancements in software development.
            <br />
            <br />I strive to learn, to focus, and to listen. My goal is to
            become part of a team of hardworking developers, and to hone my own
            role and skillset.
            <br />
            <br />I enjoy sudoku, cold-weather, CSS, and black-coffee. I began
            my programming journey when I was a kid, flashing various devices
            with firmware to run Pokemon games and other JRPGS.
          </p>
        </header>
        <HeaderBar />
      </div>
      <Projects />
    </>
  );
}
