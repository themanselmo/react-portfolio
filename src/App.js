import './App.css';
import About from './components/about';
import Header from './components/header';
import Projects from './components/projects';
import Welcome from './components/welcome';
import Contact from './components/contact';

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Blogs from './components/blogs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000 })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Welcome id="Welcome" />
        <About id="About" />
        <div className="spacer layer2" id="Welcome-Wrappera" data-aos="fade-up"></div>
        <div className="spacer layer1" id="Welcome-Wrappera"></div>
        <Projects id="Projects" />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Blogs id="Blogs" />
          </Grid>
          <Grid item xs={4}>
            <Contact id="Contact" />
          </Grid>
          
        </Grid>
        <div className="spacer layer2" id="Welcome-Wrappera"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
