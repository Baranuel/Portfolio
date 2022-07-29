import React, {useState, useEffect} from 'react';

import './App.scss';

//images


//Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import SectionIntro from './components/SectionIntro';
import Toolshed from './components/Toolshed/Toolshed';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import NavigationToggle from './components/NavigationToggle';
import Navigation from './components/Navigation';

function App() {

  const[navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen(prev => !prev)
  }

  

  return (
    <div className="App">
      <NavigationToggle toggle={toggleNav}  />
      <Navigation toggle={toggleNav}   navIsOpen={navIsOpen} />
      <Hero />
      <About />
      <Work />
      <SectionIntro text={"My Toolshed contains"} />
      <Toolshed />
      <SectionIntro text={"Feel free to say hello :)"} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
