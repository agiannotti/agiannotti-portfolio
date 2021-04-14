import React from 'react';
import './Projects.css';
import launch from '../../Images/Thumbnails/launch.png';
import bookmark1 from '../../Images/Apps/Bookmarked/Main.png';
import console1 from '../../Images/Apps/Console.dev/Main.png';
import foodful1 from '../../Images/Apps/Foodful/Main.png';
import quiz1 from '../../Images/Apps/Quiz/Main.png';
import spacedrep1 from '../../Images/Apps/SpacedRep/Main.png';

export default function Projects() {
  return (
    <div className='project-container'>
      <h2 className='__projectsTagline'>Projects</h2>
      <div className='project-section'>
        <p className='__projectTitle'>Console.dev</p>
        <p className='__projectDesc'>Code Typing Test Web Application.</p>
        <p className='__projectTools'>
          Javascript | React, Hooks, Context | Node | Express | Mocha, Chai
        </p>
        <div className='__repo__live'>
          <a
            className='repo__link'
            rel='noopener noreferrer'
            href='https://github.com/agiannotti/console.dev-client'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Repository
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
          <a
            className='live__link'
            rel='noopener noreferrer'
            href='https://console-dev-client.vercel.app/'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Live App
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
        </div>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={console1} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Foodful</p>
        <p className='__projectDesc'>
          Foodful aims to unify communities and feed hungry families and
          individuals by creating a platform for people to share resources.
        </p>
        <p className='__projectTools'>
          Javascript | React | SQL | Node | Express
        </p>
        <div className='__repo__live'>
          <a
            className='repo__link'
            rel='noopener noreferrer'
            href='https://github.com/agiannotti/foodful-vercel'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Repository
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
          <a
            className='live__link'
            rel='noopener noreferrer'
            href='https://foodful.agiannotti.vercel.app/'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Live App
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
        </div>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={foodful1} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Spaced-Repetition</p>
        <p className='__projectDesc'>
          Learn latin phrases by utilizing the spaced repetition technique.
        </p>
        <p className='__projectTools'>
          {' '}
          Javascript | SQL | Vercel | Heroku | Node | Express
        </p>
        <div className='__repo__live'>
          <a
            className='repo__link'
            rel='noopener noreferrer'
            href='https://github.com/agiannotti/spaced-rep-client'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Repository
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
          <a
            className='live__link'
            rel='noopener noreferrer'
            href='https://spaced-rep-ajg.vercel.app/login'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Live App
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
        </div>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={spacedrep1} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Bookmarked</p>
        <p className='__projectDesc'>
          A minimalist display of bookmark functionality!
        </p>
        <p className='__projectTools'>Javascript | Jquery | Webpack</p>
        <div className='__repo__live'>
          <a
            className='repo__link'
            rel='noopener noreferrer'
            href='https://github.com/agiannotti/bookmark-app'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Repository
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
          <a
            className='live__link'
            rel='noopener noreferrer'
            href='https://agiannotti.github.io/bookmark-app/dist/'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Live App
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
        </div>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={bookmark1} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Quiz App</p>
        <p className='__projectDesc'>
          A quiz application utilizing JS and Jquery.
        </p>
        <p className='__projectTools'>Javascript | Jquery</p>
        <div className='__repo__live'>
          <a
            className='repo__link'
            rel='noopener noreferrer'
            href='https://github.com/agiannotti/quiz-app'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Repository
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
          <a
            className='live__link'
            rel='noopener noreferrer'
            href='https://agiannotti.github.io/quiz-app/'
            target='_blank'
            style={{ textDecoration: 'none' }}
          >
            Live App
            <img className='launch-img' src={launch} alt='launch-img' />
          </a>
        </div>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={quiz1} alt='app-img' />
        </div>
      </div>

      <footer className='mobile-footer'>©Agiannotti</footer>
    </div>
  );
}
