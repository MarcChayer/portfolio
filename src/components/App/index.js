// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

// == Import
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import About from 'src/containers/About';
import Projects from 'src/containers/Projects';
import Contact from 'src/containers/Contact';
import Footer from 'src/containers/Footer';

import './style.scss';
import logoMc from '../../assets/images/logoMc.svg';
import addLink from '../../assets/images/add.svg';
import gitHubLogo from '../../assets/images/gitHubLogo.svg';
import linkedinLogo from '../../assets/images/linkedinLogo.svg';
import cvLogo from '../../assets/images/cvLogo.svg';
import cvMc from '../../assets/images/cvMc-2021.pdf';
import arrow from '../../assets/images/arrow.svg';


// == Composant
const App = () => { 
  const [showLogo, setShowLogo] = React.useState(false)

  const handleOnClick = () => {
    const croix = document.querySelector('.app__logo__addLink');
    croix.classList.toggle('active');
    setShowLogo(!showLogo);
  }
  return (
    <div className="app">
      <div className="app__logo">
        <Link 
          to="home"  
          activeClass="active" 
          spy={true} 
          smooth={true}
          offset={0}
          duration={800}
        >
          <img src={logoMc} alt="Logo Marc Chayer" className="app__logo__MC" />
        </Link>
        <Link 
          to="home"  
          activeClass="active" 
          spy={true} 
          smooth={true}
          offset={0}
          duration={800}
        >
          <div className="arrow">
            <img 
              src={arrow} 
              href="retour accueil" 
            />
          </div>
        </Link>
          <div className="app__logo__addLink">
            <img src={addLink} alt="More" onClick={handleOnClick}/>
          </div>
          <div className={`${showLogo ? "app__logo__all" : "app__logo__all__hiddenLogo"}`} >
            <a className="app__logo__all__gitHub" href="https://github.com/MarcChayer?tab=repositories" target="_blank"><img src={gitHubLogo} alt="Logo GitHub"/></a>
            <a className="app__logo__all__linkedin" href="https://www.linkedin.com/in/chayer-marc/" target="_blank"><img src={linkedinLogo} alt="Logo Linkedin"/></a>            
            <a className="app__logo__all__cv" href={cvMc} download="cv marc chayer"><img src={cvLogo} alt="Logo CV" target="_blank"/></a>
          </div>
      </div>
      <Route exact path="/">
        <Header />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Route>
    </div>
  );
};

// == Export
export default App;
