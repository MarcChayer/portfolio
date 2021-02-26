// == Import : npm
import React, { useEffect } from 'react';
import Aos from 'aos';

// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';

// == Composant
const ProjectDesign = ({fullName}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])
  return (
    <ul data-aos="fade-zoom-in" className="projects">
      <li className="titleProjects">{fullName}</li>
    </ul>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
