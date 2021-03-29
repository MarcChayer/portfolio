// == Import : npm
import React, { useEffect } from 'react';
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
    handleClick(id, isOpen);
  }

  if (id === projectId) {
    isOpen = !isOpen;
  } else {
    isOpen = false;
  }
  
  return (
    <div /**data-aos="slide-up"*/ className="projects">
      <div className="projects__titleProjects" onMouseEnter={handleMouseEnter}>
        <h3 project-id={id} className="projects__titleProjects__name" onClick={handleOnClickProject}>
          {fullName}
        </h3>
      </div>
      <img className="pictureProject" src={image} alt="photo du projet" />
      <section className={`${ isOpen === true ? "forDesktop" : "forMobile" }`}>
        <p className="infoProject description">{description}</p>
        <p className="infoProject technos">{technos}</p>
      </section>
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
