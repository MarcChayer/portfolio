// == Import : npm
import React from 'react';

// == Import : local
import './style.scss';

// == Composant
const About = () => { 

  return (
    <div className="footer" >
      <section className="footer__mentions">
        <ul className="footer__mentions__left">
          <li className="footer__mentions__oneInfo">Copyright © 2021 Marc Chayer - Tous droits réservés</li>
        </ul>
      </section>
    </div>
  );
};

// == Export
export default About;
