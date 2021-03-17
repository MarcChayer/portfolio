// == Import : npm
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import Aos from 'aos';

// import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

// == Composant
const Contact = () => { 
  toast.configure();
  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // verification des inputs
    if (name && isEmail() && message) {
      emailjs.sendForm("service_gz5igu6", "template_ggn7dso", event.target, "user_9coErnt98IbJYjURIIR9L")
        .then((res) => {
            toast.success('Votre message à bien été envoyé, vous aurez un retour rapidement.', { className:"toast__success" });
            setName("");
            setEmail("");
            setMessage("");
        });
    } else if (!isEmail()) {
      toast.error('Votre adresse mail ne semble pas valide, essayez à nouveau.', { className:"toast__error" });
    } else {
      toast.error('Vous devez remplir les trois champs du formulaire.', { className:"toast__error" });
    }


  }

  return (
    <div className="contact">
      <div className="contact__container" data-aos="slide-up">
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
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom"
                  value={name}
                  className="contact__container__form__paragraph__input"
                  autoComplete="off"
                />
              </label>
              <label className="form__label">Email
                <input
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                  className="contact__container__form__paragraph__input"
                  autoComplete="off"
                />
              </label>
              <label className="form__label">Message
                <textarea
                  name="message"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  value={message}
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
        autoClose={4500}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Link 
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
      </Link> */}
    </div>
  );
};
// About.propTypes = {

// };

// == Export
export default Contact;
