import React from 'react';


function Home() {

  return (
      <>
    <div className='Home'>
        <div className='Hero-info'>
          <h2>Full-stack Web Developer</h2>
          <h1>Mike is a <span className='highlight'>Developer</span> building the way the world interacts with technology </h1>
        </div>
        <div className='Hero-image'>
        <img src='https://i.ibb.co/3fgLjCT/IMG-9436.png' alt='Mike Galvin'/>
        </div>
    </div>
    <div>
        <img src='https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' alt='Mike Galvin'/>    
    </div>
    </>
  );
}

export default Home;