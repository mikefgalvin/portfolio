import React from 'react';
import resume1 from '../assets/Resume1.png'


function Resume() {

  return (
    <div className='Resume'>
        <div className='Resume-info'>
          <h2 className='skillh2'>Resume</h2>
          <div className='resumeDoc'>
             <img src={resume1} alt='My Resume'/>
          </div>
        </div>
    </div>
  );
}

export default Resume;