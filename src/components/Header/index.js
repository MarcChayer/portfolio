// == Import : npm
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = () => { 
  const [showBurgerMenu, setShowBurgerMenu] = React.useState(false)

  const handleOnClick = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('active');
    setShowBurgerMenu(!showBurgerMenu);
  }

  return (
    <div>
      <div className={`nav`}>
        <ul className={`${showBurgerMenu ? "nav__groupMobile" : "nav__group"}`} >
          <li className="nav__one">
            <Link 
              to="home"  
              activeClass="active" 
              spy={true} 
              smooth={true}
              duration={800}
            >
                Accueil
            </Link>
          </li>
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
        <div className="burger" onClick={handleOnClick}>
          <span></span>
        </div>
        {
          showBurgerMenu === true
          ?
          <ul className="nav__groupMobile">
            <li className="nav__one">
              <Link 
                to="home"  
                activeClass="active" 
                spy={true} 
                smooth={true}
                duration={800}
                onClick={handleOnClick}
              >
                  Accueil
              </Link>
            </li>
            <li className="nav__one" onClick={handleOnClick}>
              <Link 
                to="allProjects"  
                activeClass="active" 
                spy={true} 
                smooth={true}
                duration={800}
                onClick={handleOnClick}
              >
                  Projet
              </Link>
            </li>
            <li className="nav__one" onClick={handleOnClick}>
              <Link
                to="about"  
                activeClass="active" 
                spy={true} 
                smooth={true}
                duration={800}
                onClick={handleOnClick}
              >
                À propos
              </Link>
            </li>
            <li className="nav__one" onClick={handleOnClick}>
              <Link
                to="contact"  
                activeClass="active" 
                spy={true} 
                smooth={true}
                duration={800}
                onClick={handleOnClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          :
          null
        }
    </div>
  );
};

// Navigation.propTypes = {

// };

// == Export
export default Header;
