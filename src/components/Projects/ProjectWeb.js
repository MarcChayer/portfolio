// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const ProjectWeb = ({
  fullName,
  id,
  description,
  technos,
  github,
  website,
  image,
  projectId,
  isOpen,
  getIdTitle,
  handleClick,
}) => { 
  
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
    <div className="projects" >
      <div className="projects__titleProjects" onMouseEnter={handleMouseEnter} >
        <h3 project-id={id} className="projects__titleProjects__name" onClick={handleOnClickProject}>
          {fullName}
        </h3>
      </div>
      <img className="pictureProject" src={image} alt="photo du projet" />
      <section className={`${ isOpen === true ? "forDesktop" : "forMobile" }`}>
        <p className="infoProject description">{description}</p>
        <p className="infoProject technos">{technos}</p>
        <div className="infoProject all">
          <a className="infoProject all__link" href={github} target="_blank" rel="noopener">Lien Github</a>
          <a className="infoProject all__link" href={website} target="_blank" rel="noopener">Site web</a>
        </div>
      </section>
    </div>
  );
};


ProjectWeb.propTypes = {
  fullName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectId: PropTypes.number,
  github: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  getIdTitle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// == Export
export default ProjectWeb;
