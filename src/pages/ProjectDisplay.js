import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList} from "../helpers/ProjectList"
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {

    const handleGitHubClick = (gitUrl)=>{
        window.open(project.github, '_blank');
      }

    const { id } = useParams()
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1> { project.name }</h1>
            <img src={project.image} alt="projects" />
            <p>
                <b>Skills :</b> {project.skills}
            </p>
            <GitHubIcon style={{cursor: 'pointer'}} onClick ={handleGitHubClick}/>
        </div>
    )
}

export default ProjectDisplay
