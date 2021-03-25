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
  getIdTitle,
}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  const handleMouseEnter = () => {
    getIdTitle(id);
  };

  const [showInfoProject, setshowInfoProject] = useState(false)

  const handleOnClickProject = () => {
    setshowInfoProject(!showInfoProject)
  }
  
  return (
    <div data-aos="slide-up" className="projects">
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
        showInfoProject
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
