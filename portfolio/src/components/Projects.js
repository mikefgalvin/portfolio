import React from 'react';
import { useHistory } from "react-router-dom";

function Projects() {
    // const [projects, setProjects] = useState(initialProjects)
    const { push } = useHistory();
    const handleClick = e => {
        e.preventDefault();
        // window.location.href = '/';
        push('/')
    }

  return (
    <>
    <h2 className='skillh2'>Projects</h2>
    <div className="Projects">
        
        <div className='Project-container'>
            <h2>Coming Soon...creating case studies!</h2>
            <h3>For now, explore my gitub!</h3>
            <a href='https://github.com/mikefgalvin' target="_blank" rel="noreferrer">Github</a>
            <h3>PS...this site was made with React JS</h3>

            {/* <a href='https://react-github-user-card-pink-rho.vercel.app/'><h2>Github Cards</h2></a> */}
            <div className="project" onClick={handleClick}>
                <img src="https://i.ibb.co/gVmJ6Nr/Github-Card.png'" alt="Github" class="image"/>
                    <div class="overlay">
                        <div class="text">Github Card</div>
                    </div>
            </div>
        </div>
    </div>
    </>
  );
}



export default Projects;