import { Link, Divider, Stack } from "@mui/material"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Contact = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
    }, [])

    return (
        <div id="Contact" className="Section-Bottom" data-aos="fade-up">
            <div className="Section-Header">
                <h4>04.</h4>
                <h3>Contact</h3>
            </div>
            
            <Divider />

            <Stack direction="row" spacing={2}>
                <Link href="https://www.linkedin.com/in/maxanselmo/">LinkedIn</Link>
                <Link href="https://github.com/themanselmo">Github</Link>
                <Link href="https://dev.to/themanselmo">Blog</Link>
                <Link href="mailto:maxedwans@gmail.com">Mail</Link>
            </Stack>
            
        </div>
    )
}

export default Contact