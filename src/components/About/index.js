// == Import : npm
import React, { useEffect } from 'react';
import Aos from 'aos';
// import { config, useSpring, animated } from 'react-spring'

// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
// import 'aos/dist/aos.css';

// == Composant
const About = () => { 
  useEffect(() => {
    Aos.init({ duration: 2000 })
  },[])
  return (
    <div className="about" >
      <section /**data-aos="slide-up"*/ className="about__firstBox">
        <div className="bio" >
          <h1 className="bio__title">
            Bio.
          </h1>
          <p className="bio__text" >
            Je m'appelle Marc Chayer, après avoir réalisé des études dans la communication visuelle, je suis graphiste depuis plus de 9 ans maintenant. 
            Et j'ai décidé d’améliorer mes compétences en devenant développeur web.
          </p>
          <p className="bio__text" >
            J’ai donc rejoins l’école O’clock (labelisée grande école du numérique) 
            pour une formation intensive de 5 mois, où j’ai pu apprendre 
            les technos suivantes : 
          </p>
          <p className="bio__text__technos" >
            HTML, CSS, Javascript, React, Redux, Node.js, PostgreSQL.
          </p>
          <p className="bio__text" >
            Ayant une affinité particulière pour tout ce qui touche à l'UI (interface utilistateur), j'aurais tendance à avoir une préférence pour le front. 
            Mais j'ai également apprécié mes expériences côté back donc je ne me ferme pas cette porte non plus.
            Je suis maintenant à la recherche d’un emploi sur Toulouse et ses environs afin de mettre en pratique mon savoir
            et mes compétences techniques.
          </p>
        </div>
      </section>
      <section /**data-aos="slide-up"*/ className="about__secondBox">
        <div className="cpt">
          <h1 className="allSkills__design__firstTitle" >
            compétences transversales et techniques
          </h1>
          <div className="allSkills" >
              <div className="allSkills__design">
                <ul className="allSkills__design__list">
                  <li>- Français : langue natale</li>
                  <li>- Anglais : écrit & oral intermédiaire</li>
                </ul>
                <h2 className="allSkills__design__secondTitle">
                  Graphisme : 
                </h2>
                  <ul className="allSkills__design__list">
                    <li>- Identité Graphique</li>
                    <li>- Carte de Visite</li>
                    <li>- Logo</li>
                    <li>- Flyer</li>
                    <li>- Interface Web</li>
                    <li>- Sublimation textile</li>
                  </ul>
              </div>
              <div className="allSkills__web">
                <h2 className="allSkills__web__thirdTitle">
                  Developpement web : 
                </h2>
                <ul className="allSkills__web__skillsLeft">
                  <li>- Méthode AGILE (SCRUM)</li>
                  <li>- L’architecture MVC</li>
                  <li>- Manipulation et création d'API</li>
                  <li>- Front (JS, React, React-Redux)</li>
                  <li>- Back (Node.js, Express.js)</li>
                  <li>- ORM (Sequelize)</li>
                  <li>- Gestion de données (SQL, PostgreSQL)</li>
                  <li>- Déploiement (AWS)</li>
                </ul>
              </div>
          </div>
        </div>
        </section>
    </div>
  );
};
// About.propTypes = {

// };

// == Export
export default About;
