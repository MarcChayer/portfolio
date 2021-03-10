// == Import : npm
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Link, animateScroll as scroll } from "react-scroll";
import Aos from 'aos';

// import PropTypes from 'prop-types';

// == Import : local
import arrow from '../../assets/images/arrow.svg';
import './style.scss';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

// == Composant
const Contact = () => { 
  toast.configure();
  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  const handleOnSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm("service_gz5igu6", "template_ggn7dso", event.target, "user_9coErnt98IbJYjURIIR9L")
      .then((res) => {
          toast.success('Votre message à bien été envoyé, vous aurez un retour rapidement.', { className:"toast__success" });
      }, (err) => {
          toast.error('Une erreur est survenue, essayez à nouveau.', { className:"toast__error" });
      });
  }

  return (
    <div className="contact" >
      <div className="contact__container" data-aos="flip-down">
        <section className="contact__container__form">
          <h2 className="contact__container__title">
          N’hésitez pas à me contacter sur Linkedin
          ou en remplissant le formulaire de cette page.
          </h2>
          <div className="contact__container__form__paragraph">
            <form method="post" onSubmit={handleOnSubmit}>
              <label className="form__label">Nom
                <input
                  name="name"
                  type="text"
                  placeholder="Nom"
                  className="contact__container__form__paragraph__input"
                  autoComplete="off"
                />
              </label>
              <label className="form__label">Email
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="contact__container__form__paragraph__input"
                  autoComplete="off"
                />
              </label>
              <label className="form__label">Message
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  className="contact__container__form__paragraph__input__message"
                  rows="10"
                  autoComplete="off"
                />
              </label>
              <button className="btn contact__container__form__paragraph__formButton" type="submit" ><span>Envoyer</span></button>
            </form>
          </div>
        </section>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
