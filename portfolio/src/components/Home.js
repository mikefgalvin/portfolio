import React from 'react';


function Home() {

  return (
      <>
    <div className='Home'>
        <div className='Hero-info'>
          <h1>Hi! I'm <span className='highlight'>Mike</span> and I'm a <br /> <span className='highlight'>Full-stack Developer</span></h1>
        </div>
        <div className='Hero-image'>
          <img src='https://i.ibb.co/3fgLjCT/IMG-9436.png' alt='Mike Galvin' />
        </div>
    </div>
    <h2 className='skillh2'>Techstack</h2>
    <div className='skills'>
      <div className='skillList'>
        <h3>Frontend</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className='skillList'>
        <h3>Backend</h3>
        <ul>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Home;