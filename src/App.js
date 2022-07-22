import './App.scss';

//images


//Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import SectionIntro from './components/SectionIntro';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <SectionIntro text={"My Toolshed contains"} />
    </div>
  );
}

export default App;
