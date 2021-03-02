// == Import : npm
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = () => { 
  // const handleOnClick = () => {
  //   const burger = document.querySelector('.burger');
  //   burger.classList.toggle('active');
  // }
  return (
    <div>
      <div className="nav">
        <ul className="nav__group">
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
        {/* <div className="burger" onClick={handleOnClick}>
          <span></span>
        </div> */}
    </div>
  );
};

// Navigation.propTypes = {

// };

// == Export
export default Header;
