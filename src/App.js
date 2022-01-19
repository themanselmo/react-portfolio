import './App.css';
import About from './components/about';
import Header from './components/header';
import Projects from './components/projects';
import Welcome from './components/welcome';

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Blogs from './components/blogs';

function App() {

  useEffect(()=>{
    Aos.init({duration: 2000 })
  }, [])

  return (
    <div className="App">
      <Header />
      <Welcome id="Welcome" />
      <About id="About" />
      <Projects id="Projects" />
      <Blogs id="Blogs" />
    </div>
  );
}

export default App;
