import React from 'react';
import './Projects.css';
import launch from '../../Images/launch.png';

export default function Projects() {
  return (
    <div className='project-container'>
      <h2>Projects</h2>
      <div className='project-section'>
        <a
          rel='noopener noreferrer'
          href='https://github.com/agiannotti/quiz-app'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Console.dev
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
      <div className='project-section'>
        <a
          rel='noopener noreferrer'
          href='https://github.com/agiannotti/foodful-vercel'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Foodful
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
      <div className='project-section'>
        <a
          rel='noopener noreferrer'
          href='https://github.com/agiannotti/bookmark-app'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Bookmarked
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
      <div className='project-section'>
        <a
          rel='noopener noreferrer'
          href='https://github.com/agiannotti/quiz-app'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Quiz App
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
    </div>
  );
}
