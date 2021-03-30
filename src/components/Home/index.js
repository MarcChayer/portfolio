// == Import : npm
import React from 'react';
import { Helmet } from 'react-helmet';

// == Import : local
import homePhoto from '../../assets/images/marcProfileV2.png';
import './style.scss';

// == Composant
const Home = () => { 
  return (
    <div className="home" >
      <Helmet defaultTitle="Portfolio - Marc Chayer">
        <title>Portfolio - Marc Chayer</title>
        <meta
          name="description"
          content="Marc Chayer, graphiste et développeur web vous présente son portfolio. Vous trouverez quelques-uns des projets que j'ai pu réaliser, que ce soit pour du web ou du design. Ainsi que la possibilité de me contacter"
        />
      </Helmet>
      <div className="leftSide">
        <img className="profile" src={homePhoto} alt="Photo accueil" />
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

// == Export
export default Home;
