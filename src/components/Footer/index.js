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
          <li className="footer__mentions__oneInfo">marc chayer</li>
          <li className="footer__mentions__oneInfo">Copyright © 2021</li>
        </ul>
        <ul className="footer__mentions__right">
          <li className="footer__mentions__oneInfo">06 95 41 41 82</li>
          <li className="footer__mentions__oneInfo">marc.chayer@icloud.com</li>
        </ul>
      </section>
      {/* <section className="copyright">
        <p>Copyright ©</p>
        <p>marc chayer 2021</p>
      </section> */}
    </div>
  );
};
// About.propTypes = {

// };

// == Export
export default About;
