// == Import : npm
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

import Projetdesign from '../../containers/ProjectDesign'
import Projetweb from '../../containers/ProjectWeb'

import projectDesignDate from '../../data/projectsDesign';
import projectWebData from '../../data/projectsWeb';
// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  // const [isOpen, setIsOpen] = useState(false)
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
        <section  data-aos="slide-up" className="allProjects__listLeft">
          <div className="project" data-aos="slide-up">
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
              projectDesignDate.map((oneProject) => (
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
          {
            projectId === 6
            ?
            <div image-id="6" className="item" style={{ backgroundImage: `url(${trackfit})` }}></div>
            :
            null
          }
          {
            projectId === 7
            ?
            <div image-id="7" className="item" style={{ backgroundImage: `url(${hotel})` }}></div>
            :
            null
          }
          {
            projectId === 8
            ?
            <div image-id="8" className="item" style={{ backgroundImage: `url(${portfolio})` }}></div>
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
