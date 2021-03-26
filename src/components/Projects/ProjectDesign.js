// == Import : npm
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';

// == Composant
const ProjectDesign = ({
  fullName,
  id,
  description,
  technos,
  image,
  projectId,
  isOpen,
  close,
  getIdTitle,
  handleClick,
}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  const handleMouseEnter = () => {
    getIdTitle(id);
  };

  const handleOnClickProject = () => {
    handleClick(id);
  }

  if (id === projectId) {
    isOpen = !isOpen;
  }
  
  return (
    <div /**data-aos="slide-up"*/ className="projects">
      <div className="projects__titleProjects" onMouseEnter={handleMouseEnter}>
        <h3 project-id={id} className="projects__titleProjects__name" onClick={handleOnClickProject}>
          {fullName}
        </h3>
      </div>
      <section className="forMobile">
        <p className="infoProject description">{description}</p>
        <p className="infoProject technos">{technos}</p>
      </section>
      {
        isOpen === true && close === false
        ?
        <section className="forDesktop">
          <p className="infoProject description">{description}</p>
          <p className="infoProject technos">{technos}</p>
        </section>
        :
        null
      }
      <img className="pictureProject" src={image} alt="photo du projet" />
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
