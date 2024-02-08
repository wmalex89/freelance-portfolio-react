import { useParams } from 'react-router-dom';

import {projects} from './../helpers/projectsList.jsx';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';

const Project = () => {

    const {id} = useParams();
    const project = projects[id]

    return ( 
        <main className="section">
        <div className="container">
            <h1 className="title-1">{project.title}</h1>
            <div className="project-details">
                <img src={project.imgBig} alt="" className="project-details__cover"/>
                <div className="project-details__description">
                    <p>Skills: {project.skills}</p>
                </div>

                {project.gitHubLink && (
                    <BtnGitHub link='https://github.com'/>
                )} 
                
            </div>
        </div>

    </main>
     );
}
 
export default Project;