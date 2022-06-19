import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyectos from "./components/Proyectos/Proyectos";
import About from "./components/About/About";
import { CV } from "./CV/CV";

const { hero, education, more, about } = CV;
function App() {
  const [showHero, setShowHero] = useState("1");

  return (
    <div className='App'>
      <div className='buttons'>
      
        <button className='bt1' onClick={() => setShowHero("1")}>
          Inicio
        </button>
        <button className='bt1' onClick={() => setShowHero("2")}>
         Tools
        </button>
        <button className='bt1' onClick={() => setShowHero("3")}>
         Proyectos
        </button>
        <button className='bt1' onClick={() => setShowHero("4")}>
          Sobre mi
        </button>
      </div>

      <div className='principal'>
        {showHero === "1" ?
         (<Hero hero={hero} />) :
          showHero === "2" ?
         (<Tecnologias tecnologias={education} />) :
          showHero === "3" ?
          (<Proyectos proyectos={more} />):
          showHero === "4" ?
          (<About about={about} />):
         (<Hero hero={hero} />)}
      </div>
    </div>
  );
}

export default App;
