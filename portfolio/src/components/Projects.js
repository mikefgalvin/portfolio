import React from 'react';


function Projects() {
    // const [projects, setProjects] = useState(initialProjects)

    const handleClick = e => {
        e.preventDefault();
        window.location.href = '/';
    }

  return (
    <>
    <h1>Projects</h1>
    <div className="Projects">
            <div className="project" onClick={handleClick}>
                <img src="https://i.ibb.co/gVmJ6Nr/Github-Card.png'" alt="Github" class="image"/>
                    <div class="overlay">
                        <div class="text">Github Card</div>
                    </div>
            </div>
    </div>
    </>
  );
}



export default Projects;