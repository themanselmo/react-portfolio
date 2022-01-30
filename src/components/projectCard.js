import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const ProjectCard = ({ projectName, projectDesc, techs, githubLink, imagesrc}) => {

    useEffect(()=>{
        Aos.init({duration: 3000 })
      }, [])

    return (
        <div className="Project-Card" data-aos="fade-up">
            <h4>Featured Project</h4>
            <h3>{projectName}</h3>
            <img className="Card-Image" src={imagesrc} alt="demonstration image of project"/>
            <p>{projectDesc}</p>
            <ul className="Tech-List">
                {techs.map(tech => <li>{tech}</li>)}
            </ul>
            <Link href={githubLink}>Github</Link>
        </div>
    )
}

export default ProjectCard