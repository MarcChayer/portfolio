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
  github,
  website,
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
        <h3 project-id={id} className="projects__titleProjects__name" >
          {fullName}
        </h3>
      </div>
      <section className="forMobile">
      <p className="infoProject">{technos}</p>
      <p className="infoProject">{description}</p>
      <a className="infoProject" href={github} target="_blank">Github du projet</a>
      <a className="infoProject" href={website} target="_blank">Voir le site en ligne</a>
        <img className="pictureProject" src={image} alt="photo du projet" />
      </section>
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
