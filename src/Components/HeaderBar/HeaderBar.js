import React from 'react';
import './HeaderBar.css';

import face from '../../Images/Photo/soho-self.jpg';
import launch from '../../Images/Thumbnails/launch.png';
import github from '../../Images/Thumbnails/github.png';
import linkedin from '../../Images/Thumbnails/linkedin.png';
import emailimg from '../../Images/Thumbnails/Email.png';

export default function HeaderBar() {
  return (
    <div className='header-bar'>
      <div className='face-container'>
        <img className='face-img' src={face} alt='face-img' />
      </div>
      <div className='header-links'>
        <a
          target={'_blank'}
          rel='noopener noreferrer'
          href='https://github.com/agiannotti'
          style={{ textDecoration: 'none' }}
        >
          <img className='git-img' src={github} alt='github' />
          GitHub
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
      <div className='header-links'>
        <a
          target={'_blank'}
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/agiannotti/'
          style={{ textDecoration: 'none' }}
        >
          <img className='linkedin-img' src={linkedin} alt='linkedin' />
          LinkedIn
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
      <div className='header-links'>
        <a
          target={'_blank'}
          rel='noopener noreferrer'
          href={`mailto:${'aj.gianno@gmail.com'}`}
          style={{ textDecoration: 'none' }}
        >
          <img className='email-img' src={emailimg} alt='email' />
          Email
          <img className='launch-img' src={launch} alt='launch-img' />
        </a>
      </div>
    </div>
  );
}
