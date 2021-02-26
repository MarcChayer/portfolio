// == Import : npm
import React from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import homePhoto from '../../assets/images/marcProfileV2.png';
import './style.scss';

// == Composant
const Home = () => { 
  return (
    <div className="home" >
      <div className="leftSide">
        <img className="profile" src={homePhoto} href="photo accueil" />
        <div className="cercle"></div>
      </div>
      <div className="home__about">
        <p className="home__description">Bonjour ! Moi c'est Marc,</p>
        <p className="home__description">je suis Graphiste et Développeur Web</p>
        <p className="home__description">basé à Toulouse.</p>
      </div>
    </div>
  );
};
// Home.propTypes = {

// };

// == Export
export default Home;
