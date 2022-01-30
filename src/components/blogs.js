import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        Aos.init({duration: 4000 })
    }, [])

    useEffect(()=>{
        fetch('https://dev.to/api/articles?username=themanselmo')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let count = 0
            let stuff = []
            while(count < 5) {
                stuff.push(data[count])
                count++
            }

            setBlogs(stuff)
        })
    }, [])



    const renderBlogs = (blogs) => blogs.map(blog => <div className='Blog-Post'>
        <Link href={blog.canonical_url}><h4>{blog.title}</h4></Link>
        {/* <img className='Card-Image' src={blog.cover_image} /> */}
    </div>)

    return (
        <div id="Blogs" className="Section" data-aos="fade-up">
            <div className="Section-Header">
                <h4>03.</h4>
                <h3>Blog Posts</h3>
            </div>
            
            <Divider />

            <div id="Blog-Posts">
                {renderBlogs(blogs)}
                <Link href={"https://dev.to/themanselmo"}><h4>more...</h4></Link>
            </div>
        </div>
    )
}

export default Blogs