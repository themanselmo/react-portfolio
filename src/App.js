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
        <Projects id="Projects" />
        <Blogs id="Blogs" />
        <Contact id="Contact" />
      </div>
    </ThemeProvider>
  );
}

export default App;
