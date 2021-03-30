// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { Helmet } from 'react-helmet';

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
      <Helmet defaultTitle="Portfolio - Marc Chayer">
        <title>Portfolio - Marc Chayer</title>
        <meta
          name="description"
          content="Marc Chayer, graphiste et développeur web vous présente son portfolio. Vous trouverez quelques-uns des projets que j'ai pu réaliser, que ce soit pour du web ou du design. Ainsi que la possibilité de me contacter"
        />
      </Helmet>
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
              alt="Retour accueil"
            />
          </div>
        </Link>
          <div className="app__logo__addLink">
            <img src={addLink} alt="Accés réseaux sociaux et cv" onClick={handleOnClick}/>
          </div>
          <div className={`${showLogo ? "app__logo__all" : "app__logo__all__hiddenLogo"}`} >
            <a className="app__logo__all__gitHub" href="https://github.com/MarcChayer?tab=repositories" target="_blank" rel="noopener"><img src={gitHubLogo} alt="Logo GitHub"/></a>
            <a className="app__logo__all__linkedin" href="https://www.linkedin.com/in/chayer-marc/" target="_blank" rel="noopener"><img src={linkedinLogo} alt="Logo Linkedin"/></a>            
            <a className="app__logo__all__cv" href={cvMc} download="cv marc chayer"><img src={cvLogo} alt="Logo CV" target="_blank" rel="noopener"/></a>
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
