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
  getIdTitle,
}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  const handleMouseEnter = () => {
    getIdTitle(id);
  };

  return (
    <div className="titleImage">
    <ul data-aos="slide-up" className="projects">
      <li  className="projects__titleProjects" onMouseEnter={handleMouseEnter}>
        <a project-id={id} href="#" >
          {fullName}
        </a>
      </li>
    </ul>
  </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
