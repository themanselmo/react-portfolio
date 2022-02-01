// import portrait from '../assets/portrait.PNG'

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { Grid } from '@mui/material';

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
      }, [])

    return (
        <div id="About" className="Section" data-aos="fade-up">
            <div className="Section-Header">
                <h4>01.</h4>
                <h3>About Me</h3>
            </div>
            
            {/* <Divider /> */}
            <div id="About-Content">
                <Grid container spacing={4}>

                    <Grid item xs>
                        <div>
                            <p>Hello! My name is Max and I enjoy creating things that live on the internet. My interest in programming began back in 2015 when I decided to take my interest in computers to the next level and enrolled in the Object Oriented Programming with Java course at my highschool -- while I didn't quite understand everything at first I knew I was hooked.</p>
                            <p>Now with an Associates degree in Computer Science and Engineering and having completed Flatiron School's Fullstack Software Engineering program, I feel that the sky is the limit when it comes to what I can bring into reality. My main focus these days is to build accessible, clean, reliable, and interactive digital experiences.</p>

                            <h4>Some of the technologies I work with include:</h4>
                            
                                <ul className="Tech-List">
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Java</li>
                                    <li>PostgreSQL</li>
                                    <li>Ruby On Rails</li>                
                                </ul>
                            
                            
                        </div>
                    </Grid>
                    {/* <Grid item xs>
                        <img id="portrait" src={portrait} alt="A portrait of myself."/>
                    </Grid> */}
                   
                </Grid>
                
            </div>
            
        </div>
    )
}

export default About