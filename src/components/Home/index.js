// == Import : npm
import React from 'react';
import { config, useSpring, animated } from 'react-spring'
// import PropTypes from 'prop-types';

// == Import : local
import homePhoto from '../../assets/images/marcProfile.png';
import './style.scss';

// == Composant
const Home = () => { 
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 170, friction: 26 } }))
  return (
    <div className="home" >
      <animated.div 
        className="leftSide"
        style={props}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
      {/* <div className="leftSide"> */}
        <img className="profile" src={homePhoto} href="photo accueil" />
        <div className="cercle"></div>
      {/* </div> */}
      </animated.div>
      <div className="home__about">
        <p className="home__description">Bonjour ! Moi c'est Marc,</p>
        <p className="home__description">je suis Graphiste et Développeur Web</p>
        <p className="home__description">basé à Toulouse.</p>
      </div>
    </div>
  );
};
// Home.propTypes = {

// };

// == Export
export default Home;
