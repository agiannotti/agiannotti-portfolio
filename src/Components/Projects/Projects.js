import React from 'react';
import './Projects.css';
import launch from '../../Images/Thumbnails/launch.png';
import github from '../../Images/Thumbnails/github.png';
import bookmark1 from '../../Images/Apps/Bookmarked/add.png';
import bookmark2 from '../../Images/Apps/Bookmarked/list.png';
import bookmark3 from '../../Images/Apps/Bookmarked/splash.png';
import console1 from '../../Images/Apps/Console.dev/login.png';
import console2 from '../../Images/Apps/Console.dev/main.png';
import foodful1 from '../../Images/Apps/Foodful/foodful1.png';
import foodful2 from '../../Images/Apps/Foodful/foodful2.png';
import foodful3 from '../../Images/Apps/Foodful/foodful3.png';
import foodful4 from '../../Images/Apps/Foodful/foodful4.png';
import foodful5 from '../../Images/Apps/Foodful/foodful5.png';
import quiz1 from '../../Images/Apps/Quiz/fin.png';
import quiz2 from '../../Images/Apps/Quiz/question.png';
import quiz3 from '../../Images/Apps/Quiz/splash.png';
import spacedrep1 from '../../Images/Apps/SpacedRep/feedback.png';
import spacedrep2 from '../../Images/Apps/SpacedRep/dashboard.png';
import spacedrep3 from '../../Images/Apps/SpacedRep/learnPage.png';
import spacedrep4 from '../../Images/Apps/SpacedRep/login.png';

export default function Projects() {
  return (
    <div className='project-container'>
      <h2>Projects</h2>
      <div className='project-section'>
        <p className='__projectTitle'>Console.dev</p>
        <p className='__projectDesc'>Code Typing Test Web Application.</p>
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
        <br />
        <div className='__pictures'>
          <img className='app__img' src={console1} alt='app-img' />
          <img className='app__img' src={console2} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Foodful</p>
        <p className='__projectDesc'>
          Foodful aims to unify communities and feed hungry families and
          individuals by creating a platform for people to share resources.
        </p>
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
        <br />
        <div className='__pictures'>
          <img className='app__img' src={foodful1} alt='app-img' />
          <img className='app__img' src={foodful2} alt='app-img' />
          <img className='app__img' src={foodful3} alt='app-img' />
          <img className='app__img' src={foodful4} alt='app-img' />
          <img className='app__img' src={foodful5} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Bookmarked</p>
        <p className='__projectDesc'>
          A minimalist display of bookmark functionality!
        </p>
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
        <br />
        <div className='__pictures'>
          <img className='app__img' src={bookmark1} alt='app-img' />
          <img className='app__img' src={bookmark2} alt='app-img' />
          <img className='app__img' src={bookmark3} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Quiz App</p>
        <p className='__projectDesc'>
          A quiz application utilizing JS and Jquery.
        </p>
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
        <br />
        <div className='__pictures'>
          <img className='app__img' src={quiz1} alt='app-img' />
          <img className='app__img' src={quiz2} alt='app-img' />
          <img className='app__img' src={quiz3} alt='app-img' />
        </div>
      </div>
      <div className='project-section'>
        <p className='__projectTitle'>Spaced-Repetition</p>
        <p className='__projectDesc'>
          Learn latin phrases by utilizing the spaced repetition technique.
        </p>
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
          href='https://spaced-rep-ajg.vercel.app/'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Live App
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
        <br />
        <div className='__pictures'>
          <img className='app__img' src={spacedrep1} alt='app-img' />
          <img className='app__img' src={spacedrep2} alt='app-img' />
          <img className='app__img' src={spacedrep3} alt='app-img' />
          <img className='app__img' src={spacedrep4} alt='app-img' />
        </div>
      </div>
    </div>
  );
}
