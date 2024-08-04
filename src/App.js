import { Element } from 'react-scroll';
import './App.css';
import Contact from './Components/Contact';
import IntroSec from './Components/IntroSec';
import MyWork from './Components/MyWork';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';

function App() {
  return (
    <>
    <NavBar/>
    <IntroSec/>

    <Element name="Experience" className="section">
    <WorkExperience/>
    </Element>
    
    <Element name="Skills" className="section">
    <Skills/>
    </Element>
    
    <Element name="MyWork" className="section">
    <MyWork/>
    </Element>
    
    <Element name="Contact" className="section">
    <Contact/>
    </Element>
    </>
  );
}

export default App;