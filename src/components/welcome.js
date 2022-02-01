import lily from "../assets/lily.gif"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Welcome = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
      }, [])

    return (
        <div>

            {/* <div className="spacer layer2" id="Welcome-Wrappera"></div> */}
            <div className="spacer layer1" id="Welcome-Wrappera" style={{ backgroundImage: lily}}>
                <div id="Welcome" className="Section" data-aos="fade-up">
                    <h4>Hello, my name is</h4>
                    <h1 id="header-name">Max Anselmo.</h1>
                    <h1 id="header-tag">I create things for the web.</h1>
                    <p>I'm a software engineer specializing in designing and building cutting-edge, rich web applications.</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome