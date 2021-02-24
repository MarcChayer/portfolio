// == Import : npm
import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link, animateScroll as scroll } from "react-scroll";
// import PropTypes from 'prop-types';

// == Import : local
import arrow from '../../assets/images/arrow.svg';
import './style.scss';
import 'aos/dist/aos.css';

// == Composant
const Contact = () => { 
  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  return (
    <div className="contact" >
      <div className="contact__container" data-aos="flip-down">
        <section className="contact__container__form">
          <h2 className="contact__container__title">
          N’hésitez pas à me contacter sur Linkedin
          ou en remplissant le formulaire de cette page.
          </h2>
          <div className="contact__container__form__paragraph">
            <form method="post" onSubmit="">
              <label className="form__label">Nom
              <input name="Nom" type="text" placeholder="Nom" className="contact__container__form__paragraph__input"/>
              </label>
              <label className="form__label">Email
              <input name="Email" type="email" placeholder="Email" className="contact__container__form__paragraph__input"/>
              </label>
              <label className="form__label">Message
              <textarea name="Message" type="text" placeholder="Message" className="contact__container__form__paragraph__input__message" rows="10" />
              </label>
              <button className="btn contact__container__form__paragraph__formButton" type="submit" ><span>Envoyer</span></button>
            </form>
          </div>
        </section>
      </div>
      <Link 
        to="home"  
        activeClass="active" 
        spy={true} 
        smooth={true}
        offset={0}
        duration={800}
      >
        <button className="arrow">
        <img 
          src={arrow} 
          href="retour accueil" 
          // onClick={this.scrollToTop}
        />
        </button>
      </Link>
    </div>
  );
};
// About.propTypes = {

// };

// == Export
export default Contact;
