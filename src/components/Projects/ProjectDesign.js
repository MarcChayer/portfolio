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
  image,
  getIdTitle,
}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  const handleMouseEnter = () => {
    getIdTitle(id);
  };
  
  return (
    <div data-aos="slide-up" className="projects">
      <div className="projects__titleProjects" onMouseEnter={handleMouseEnter}>
        <h3 project-id={id} className="projects__titleProjects__name">
          {fullName}
        </h3>
      </div>
      <section className="forMobile">
        <p className="infoProject">{description}</p>
        <img className="pictureProject" src={image} alt="photo du projet" />
      </section>
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
