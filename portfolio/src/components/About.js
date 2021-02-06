import React from 'react';


function About() {

  return (
    <div className='About'>
        <h2 className='skillh2'>About Me</h2>
        <div className='About-info'>
          <div className='AboutCard'>
          <h3>Past</h3>
          <p>I come from a background in Operations and Growth Marketing. Initially as an operator in the U.S. Air Force and the last few years doing growth marketing for tech startups in San Francisco.</p>
          </div>
          <div className='AboutCard'>
          <h3>Present</h3>
          <p>I’m 100% into web development. I’ve spent the better part of the year building up my technical skills so I could build beautiful, impactful, and ambitous things. </p>
          </div>
          <div className='AboutCard'>
          <h3>Future</h3>
          <p>My goal is to put my skills to work while leveraging my prior experience to build and ship meaningful products. I want to see a great software experience and say “I was apart of building that” </p>
          </div>
        </div>
        {/* <div className='Hero-image'>
        <img src='https://i.ibb.co/3fgLjCT/IMG-9436.png' alt='Mike Galvin'/>
        </div> */}
    </div>
  );
}

export default About;