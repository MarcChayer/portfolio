// == Import : npm
import React, { useEffect, useState } from 'react';
import Aos from 'aos';

// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';
import gitHubLogo from '../../assets/images/gitHubLogo.svg';
import logoForWeb from '../../assets/images/logoForWeb.svg';

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
        <p className="infoProject technos">{technos}</p>
        <p className="infoProject description">{description}</p>
        <div className="infoProject all">
          <a className="infoProject all__logo" href={github} target="_blank"><img src={gitHubLogo} alt="Logo GitHub"/></a>
          <a className="infoProject all__logo" href={website} target="_blank"><img src={logoForWeb} alt="Logo vers site internet"/></a>
        </div>
      </section>
      <img className="pictureProject" src={image} alt="photo du projet" />
    </div>
  );
};

// Projects.propTypes = {

// };

// == Export
export default ProjectDesign;
