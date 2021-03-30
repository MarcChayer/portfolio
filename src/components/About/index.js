// == Import : npm
import React from 'react';
import { Helmet } from 'react-helmet';

// == Import : local
import './style.scss';

// == Composant
const About = () => { 

  return (
    <div className="about" >
      <Helmet defaultTitle="Portfolio - Marc Chayer">
        <title>Portfolio - Marc Chayer</title>
        <meta
          name="description"
          content="Marc Chayer, graphiste et développeur web vous présente son portfolio. Vous trouverez quelques-uns des projets que j'ai pu réaliser, que ce soit pour du web ou du design. Ainsi que la possibilité de me contacter"
        />
      </Helmet>
      <section className="about__firstBox">
        <div className="bio" >
          <h1 className="bio__title">
            Bio
          </h1>
          <p className="bio__text" >
            Je m'appelle Marc Chayer, après avoir réalisé des études dans la communication visuelle, je suis devenu graphiste et ce, depuis plus de 9 ans maintenant. 
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
      <section className="about__secondBox">
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

// == Export
export default About;
