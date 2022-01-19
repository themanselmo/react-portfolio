
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Welcome = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
      }, [])

    return (
        <div id="Welcome" className="Section" data-aos="fade-up">
            <h4>Hello, my name is</h4>
            <h1 id="header-name">Max Anselmo.</h1>
            <h1 id="header-tag">I create things for the web.</h1>
            <p>I'm a software engineer specializing in designing and building cutting-edge, rich web applications.</p>
        </div>
    )
}

export default Welcome