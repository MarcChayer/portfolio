// == Import : npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

// == Import : local
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

// == Composant
const Contact = () => { 
  toast.configure();

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
    } 
    if (!name && !message) {
      toast.error('Vous devez remplir les trois champs du formulaire.', { className:"toast__error" });
    } else if (!isEmail()) {
      toast.error('Votre adresse mail ne semble pas valide, essayez à nouveau.', { className:"toast__error" });
    }
  }

  return (
    <div className="contact">
      <Helmet defaultTitle="Portfolio - Marc Chayer">
        <title>Portfolio - Marc Chayer</title>
        <meta
          name="description"
          content="Marc Chayer, graphiste et développeur web vous présente son portfolio. Vous trouverez quelques-uns des projets que j'ai pu réaliser, que ce soit pour du web ou du design. Ainsi que la possibilité de me contacter"
        />
      </Helmet>
      <div className="contact__container" >
        <section className="contact__container__form">
          <h2 className="contact__container__title">
          N’hésitez pas à me contacter sur LinkedIn
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
                  className="contact__container__form__paragraph__message"
                  rows="10"
                  autoComplete="off"
                />
              </label>
              <div class="buttonSubmit" >
                <a >
                  <button class="text" type="submit">Envoyer</button>
                  <span class="line -right"></span>
                  <span class="line -top"></span>
                  <span class="line -left"></span>
                  <span class="line -bottom"></span>
                </a>
              </div>
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
    </div>
  );
};

// == Export
export default Contact;
