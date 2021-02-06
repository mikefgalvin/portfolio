import React from 'react';
import resume from '../assets/Resume.png'


function Resume() {

  return (
    <div className='Resume'>
        <div className='Resume-info'>
          <h2 className='skillh2'>Resume</h2>
          <div className='resumeDoc'>
             <img src={resume} alt='My Resume'/>
          </div>
        </div>
    </div>
  );
}

export default Resume;