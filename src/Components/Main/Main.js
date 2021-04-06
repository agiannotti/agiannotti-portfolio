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
          <p>
            I'm a Chicago-based full-stack web developer, primarily focused on
            Javascript, React, SQL, and Node. I have a passion for dynamic
            applications, thinking broadly, and tuning into the latest
            advancements in web technologies.
          </p>
        </header>
        <HeaderBar />
      </div>
      <Projects />
    </>
  );
}
