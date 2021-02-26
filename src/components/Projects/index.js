// == Import : npm
import React, { useEffect } from 'react';

import Projetdesign from '../../containers/ProjectDesign'
import Projetweb from './ProjectWeb'

import projectDesignDate from '../../data/projectsDesign';
import projectWebData from '../../data/projectsWeb';
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
const Projects = ({ showBox, projectId }) => { 
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
  console.log('projectId', projectId);
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
              projectDesignDate.map((oneProject) => (
                <Projetdesign
                  key={oneProject.id}
                  {...oneProject}
                /> 
              ))
              : 
              null 
            }
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
          </div>
        </section>
        <section className="allProjects__photoProject">
          {
            projectId === 1
            ?
            <div image-id="1" className="item" style={{ backgroundImage: `url(${laBoite})` }}></div>
            :
            null
          }
          {
            projectId === 2
            ?
            <div image-id="2" className="item" style={{ backgroundImage: `url(${lpgc})` }}></div>
            :
            null
          }
          {
            projectId === 3
            ?
            <div image-id="3" className="item" style={{ backgroundImage: `url(${ltdm})` }}></div>
            :
            null
          }
          {
            projectId === 4
            ?
            <div image-id="4" className="item" style={{ backgroundImage: `url(${mof})` }}></div>
            :
            null
          }
          {
            projectId === 5
            ?
            <div image-id="5" className="item" style={{ backgroundImage: `url(${d3d})` }}></div>
            :
            null
          }
        </section>
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default Projects;
