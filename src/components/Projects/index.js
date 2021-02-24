// == Import : npm
import React, { useEffect } from 'react';

import Projetdesign from './projetDesign'
import Projetweb from './projetWeb'

import projectDesign from '../../data/projectsDesign';
import projectWeb from '../../data/projectsWeb';
// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';

import laBoite from '../../assets/images/laBoite.jpg';
import lpgc from '../../assets/images/lpGenieClimatique.jpg';
import ltdm from '../../assets/images/leToitDeMauzac.jpg';
import mof from '../../assets/images/MOF.jpg';
import d3d from '../../assets/images/doudoune.png';

// == Composant
const Projects = () => { 
  const [showDesign, setShowDesign] = React.useState(true)
  const [showWeb, setShowWeb] = React.useState(false)

  const onClick = () => {
    setShowWeb(false);
    setShowDesign(true);
  }

  const handleOnClick = () => {
    setShowDesign(false);
    setShowWeb(true);
  }
  const listImage = document.querySelectorAll('.item');
  return (
    <div className="allProjects" >
        <section data-aos="fade-left" className="allProjects__listLeft" >
          <div className="project">
            <div className="project__allTitles">
              <button id="titleDesign" onClick={onClick}>
                design
              </button>
              <button id="titleWeb" onClick={handleOnClick}>
                web
              </button>
            </div>
            { 
              showDesign 
              ?
              projectDesign.map((oneProject) => (
                <Projetdesign
                  key={oneProject.description}
                  {...oneProject}
                  {...listImage}
                /> 
              ))
              : 
              null 
            }
            { 
              showWeb 
              ? 
              projectWeb.map((oneProject) => (
                <Projetweb
                  key={oneProject.description}
                  {...oneProject}
                /> 
              ))
              : 
              null 
            }
          </div>
        </section>
        <section className="allProjects__photoProject">
            <div data-project-no="1" className="item" style={{ backgroundImage: `url(${laBoite})` }}></div>
            <div data-project-no="2" className="item" style={{ backgroundImage: `url(${lpgc})` }}></div>
            <div data-project-no="3" className="item" style={{ backgroundImage: `url(${ltdm})` }}></div>
            <div data-project-no="4" className="item" style={{ backgroundImage: `url(${mof})` }}></div>
            <div data-project-no="5" className="item" style={{ backgroundImage: `url(${d3d})` }}></div>
        </section>
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default Projects;
