import { Link, Divider, Stack } from "@mui/material"

const Contact = () => {

    return (
        <div id="Contact" className="Section">
            <div className="Section-Header">
                <h4>05.</h4>
                <h3>Contact</h3>
            </div>
            
            <Divider />

            <Stack direction="row" spacing={2}>
                <Link href="">LinkedIn</Link>
                <Link href="https://github.com/themanselmo">Github</Link>
                <Link href="">Blogs</Link>
            </Stack>
            
        </div>
    )
}

export default Contact