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

import './style.scss';
import logoMc from '../../assets/images/logoMc.svg';
import addLink from '../../assets/images/add.svg';

// == Composant
const App = () => (
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
      <button className="app__logo__addLink"><img src={addLink} alt="add link Github Linkedin"  /></button>
    </div>
      <Header />
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/">
      <Projects />
    </Route>
    <Route exact path="/">
      <About />
    </Route>
    <Route exact path="/">
      <Contact />
    </Route>
  </div>
);

// == Export
export default App;
