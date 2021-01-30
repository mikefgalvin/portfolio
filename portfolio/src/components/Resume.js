import React from 'react';
import { Document } from 'react-pdf';
import copy from '../assets/copy.jpg'
import resume from '../assets/Resume.png'


function Resume() {

  return (
    <div className='Resume'>
        <div className='Resume-info'>
          <h1>Resume!</h1>
          <div className='resumeDoc'>
             <img src={resume}/>
          </div>
        </div>
    </div>
  );
}

export default Resume;