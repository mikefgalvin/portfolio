import React from 'react';
import resume from '../assets/Resume.png'


function Resume() {

  return (
    <div className='Resume'>
        <div className='Resume-info'>
          <h1>Resume!</h1>
          <div className='resumeDoc'>
             <img src={resume} alt='My Resume'/>
          </div>
        </div>
    </div>
  );
}

export default Resume;