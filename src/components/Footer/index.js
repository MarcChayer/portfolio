// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';
// == Import : local
import './style.scss';

// == Composant
const About = () => { 

  return (
    <div className="footer" >
      <section className="footer__mentions">
        <ul className="footer__mentions__left">
          <li className="footer__mentions__oneInfo">Copyright © 2021 Marc Chayer</li>
        </ul>
      </section>
    </div>
  );
};
// About.propTypes = {

// };

// == Export
export default About;
