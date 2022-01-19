import Divider from '@mui/material/Divider';

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Blogs = () => {

    useEffect(()=>{
        Aos.init({duration: 4000 })
    }, [])

    return (
        <div id="Blogs" className="Section" data-aos="fade-up">
            <div className="Section-Header">
                <h4>04.</h4>
                <h3>Blog Posts</h3>
            </div>
            
            <Divider />

            <div id="Blog-Posts">
                
            </div>
        </div>
    )
}

export default Blogs