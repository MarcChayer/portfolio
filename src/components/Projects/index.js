// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Projetdesign from '../../containers/ProjectDesign'
import Projetweb from '../../containers/ProjectWeb'

import projectDesignData from '../../data/projectsDesign';
import projectWebData from '../../data/projectsWeb';


// == Import : local
import './style.scss';

// image design project
import laBoite from '../../assets/images/laBoite.jpg';
import lpgc from '../../assets/images/lpGenieClimatique.jpg';
import ltdm from '../../assets/images/leToitDeMauzac.jpg';
import mof from '../../assets/images/MOF.jpg';
import d3d from '../../assets/images/doudoune.png';
// image web project
import trackfit from '../../assets/images/trackfit.jpg';
import hotel from '../../assets/images/mimadoHotel.jpg';
import portfolio from '../../assets/images/portfolio.jpg';

// == Composant
const Projects = ({ projectId }) => { 

  const [showDesign, setShowDesign] = useState(false)
  const [showWeb, setShowWeb] = useState(true)
  
  const onClick = () => {
    setShowWeb(false);
    setShowDesign(true);
  }
  
  const handleOnClick = () => {
    setShowDesign(false);
    setShowWeb(true);
  }
  
  return (
    <div className="allProjects">
      <Helmet defaultTitle="Portfolio - Marc Chayer">
        <title>Portfolio - Marc Chayer</title>
        <meta
          name="description"
          content="Marc Chayer, graphiste et développeur web vous présente son portfolio. Vous trouverez quelques-uns des projets que j'ai pu réaliser, que ce soit pour du web ou du design. Ainsi que la possibilité de me contacter"
        />
      </Helmet>
        <section className="allProjects__listLeft">
          <div className="project">
            <div className="project__allTitles">
              <button id="titleWeb" className={`${ showWeb ? "active" : null }`} onClick={handleOnClick}>
                web
              </button>
              <button id="titleDesign" className={`${ showDesign ? "active" : null }`} onClick={onClick}>
                design
              </button>
            </div>
            {
              showWeb
              ? 
              projectWebData.map((oneProject) => (
                <Projetweb
                  key={oneProject.id}
                  {...oneProject}
                />
              ))
              :
              null 
            }
            {
              showDesign 
              ?
              projectDesignData.map((oneProject) => (
                <Projetdesign
                  key={oneProject.id}
                  {...oneProject}
                /> 
              ))
              : 
              null 
            }
          </div>
        </section>
        <section className="allProjects__photoProject">
          {
            projectId === 1
            ?
            <div alt="logo La Boîte" image-id={1} className="item" style={{ backgroundImage: `url(${laBoite})` }}></div>
            :
            null
          }
          {
            projectId === 2
            ?
            <div alt="carte de visite LP Génie Climatique" image-id={2} className="item" style={{ backgroundImage: `url(${lpgc})` }}></div>
            :
            null
          }
          {
            projectId === 3
            ?
            <div alt="logo Le Toit De Mauzac" image-id={3} className="item" style={{ backgroundImage: `url(${ltdm})` }}></div>
            :
            null
          }
          {
            projectId === 4
            ?
            <div alt="logo Men On Fire" image-id={4} className="item" style={{ backgroundImage: `url(${mof})` }}></div>
            :
            null
          }
          {
            projectId === 5
            ?
            <div alt="doudoune 3d" image-id={5} className="item" style={{ backgroundImage: `url(${d3d})` }}></div>
            :
            null
          }
          {
            projectId === 6
            ?
            <div alt="project Trackfit" image-id={6} className="item" style={{ backgroundImage: `url(${trackfit})` }}></div>
            :
            null
          }
          {
            projectId === 7
            ?
            <div alt="hotel Mimado" image-id={7} className="item" style={{ backgroundImage: `url(${hotel})` }}></div>
            :
            null
          }
          {
            projectId === 8
            ?
            <div alt="porfolio" image-id={8} className="item" style={{ backgroundImage: `url(${portfolio})` }}></div>
            :
            null
          }
        </section>
    </div>
  );
};

Projects.propTypes = {
  projectId: PropTypes.number.isRequired,
};

// == Export
export default Projects;
