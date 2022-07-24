import './App.scss';

//images


//Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import SectionIntro from './components/SectionIntro';
import Toolshed from './components/Toolshed/Toolshed';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <SectionIntro text={"My Toolshed contains"} />
      <Toolshed />
      <SectionIntro text={"Feel free to say hello :)"} />
      <Contact />

    </div>
  );
}

export default App;
