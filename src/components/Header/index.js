// == Import : npm
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = () => (
  <div className="nav">
    <ul className="nav__group">
      {/* <li className="nav__one"><NavLink exact to="/" activeClassName="nav__one--active">Accueil</NavLink></li> */}
      <li className="nav__one">
        <Link 
          to="allProjects"  
          activeClass="active" 
          spy={true} 
          smooth={true}
          duration={800}
        >
            Projet
        </Link>
      </li>
      <li className="nav__one">
          <Link
            to="about"  
            activeClass="active" 
            spy={true} 
            smooth={true}
            duration={800}
          >
            À propos
          </Link>
        </li>
      <li className="nav__one">
        <Link
          to="contact"  
          activeClass="active" 
          spy={true} 
          smooth={true}
          duration={800}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

// Navigation.propTypes = {

// };

// == Export
export default Header;
