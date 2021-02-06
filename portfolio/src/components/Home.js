import React from 'react';


function Home() {

  return (
      <div className='Home'>
    <div className='HomeInfo'>
        <div className='Hero-info'>
          <h1>Hi! I'm <span className='highlight'>Mike</span> and I'm a <br /> <span className='highlight'>Full-stack Developer</span></h1>
        </div>
        <div className='Hero-image'>
          <img src='https://i.ibb.co/3fgLjCT/IMG-9436.png' alt='Mike Galvin' />
        </div>
    </div>
    <div className='midLogo'>
    <a href='https://github.com/mikefgalvin' target="_blank" rel="noreferrer">Github</a>
    <a href='https://www.linkedin.com/in/mikefgalvin/' target="_blank" rel="noreferrer">linkedin</a>
    </div>
    <h2 className='skillh2'>Technical Skills</h2>
    <div className='skills'>
      <div className='skillList'>
        <h3>Frontend</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Context API</p>
          <p>Redux</p>
      </div>
      <div className='skillList'>
        <h3>Backend</h3>
          <p>Java</p>
          <p>SQL</p>
      </div>
    </div>
    </div>
  );
}

export default Home;