import Divider from '@mui/material/Divider';
import ProjectCard from "./projectCard"
import rootbasePic from "../assets/rbsnippet.PNG"
import optiPic from "../assets/optisnippet.PNG"
import lapelPic from "../assets/lapelsnippet.PNG"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Projects = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
      }, [])
    
    return (
        <div id="Projects" className="Section" data-aos="fade-up">
            <h4>02.</h4>
            <h3>Passion Projects</h3>
            <Divider />
            <ProjectCard 
                projectName={"Rootbase"}
                projectDesc={"Application designed to aid in managing tasks and worker productivity in small-large scale cultivation operations."}
                techs={["React", "Ruby on Rails", "PostgreSQL", "MaterialUI", "ActiveStorage"]}
                githubLink={"https://github.com/themanselmo/rootbase-frontend"}
                imagesrc={rootbasePic}
            />
            <ProjectCard 
                projectName={"Optaroute"}
                projectDesc={"Application designed to help users keep track of and plan mileage they will accrue on their vehicles."}
                techs={["React", "Ruby on Rails", "PostgreSQL", "MaterialUI"]}
                githubLink={"https://github.com/themanselmo/optaroute"}
                imagesrc={optiPic}

            />
            <ProjectCard 
                projectName={"Lapel"}
                projectDesc={"Online marketplace that enables users to list collections of items to be sold."}
                techs={["React", "Ruby", "SQLite", "Material UI"]}
                githubLink={"https://github.com/themanselmo/Lapel"}
                imagesrc={lapelPic}

            />
        </div>
    )
}

export default Projects