import React from 'react';


function About() {

  return (
    <div className='About'>
        <div className='About-info'>
          <h1>About Me!</h1>
          <div className='AboutCard'>
          <h2>Past</h2>
          <p>I come from a background in Operations and Growth Marketing. Initially as an operator in the U.S. Air Force and the last few years doing growth marketing for tech startups in San Francisco.</p>
          </div>
          <div className='AboutCard'>
          <h2>Present</h2>
          <p>I’m 100% into web development. I’ve spent the better part of the year building up my technical skills so I could build beautiful, impactful, and ambitous things. </p>
          </div>
          <div className='AboutCard'>
          <h2>Future</h2>
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