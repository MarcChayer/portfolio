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
  listImage
}) => { 
  useEffect(() => {
    Aos.init({ duration: 3000 })
  },[])

  const [showBox, setShowBox] = React.useState(false)

  const handleBoxToggle = () => setShowBox({ showBox: !showBox });
  console.log(showBox);
  
  const listLi = document.querySelectorAll('.titleProjects');
  // if (!showBox) {
  //   return listImage === listLi.dataProjectNo
  // }

  // let currentZIndex = 100;
  // let lastSeen = listLi[0];

  // listLi.forEach(li => {
  //   li.addEventListener('mouseenter', () => {
  //       const img = [...listImage].find(img => {
  //           return img.dataProjectNo === li.dataProjectNo
  //       })

  //       if(lastSeen === li) return

  //       img.style.transition = null

  //       img.style.opacity = 0;
  //       img.style.zIndex = currentZIndex++;

  //       setTimeout(() => {
  //           img.style.opacity = 1;
  //           img.style.transition = "opacity 700ms ease"
  //       }, 1);

  //       lastSeen = li;
  //   });
  // });

  return (
    <div className="titleImage">
      <ul data-aos="fade-zoom-in" className="projects">
        <li className="projects__titleProjects" data-project-no={id} onMouseEnter={handleBoxToggle}>
          <a href="#">
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
