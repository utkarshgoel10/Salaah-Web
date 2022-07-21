import React from "react";
import "./ContactUs.css";
import Navbar from "../components/header/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { SiBuymeacoffee } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_88tx0q4",
      "template_c3vh6kt",
      form.current,
      "hDeRlK-5jXDd9ZbDm"
    );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="happening">
          <div className="container">
            <h1 className="Ultrabold">How can we help you?</h1>
          </div>
        </div>

        <div className="creative container" style={{ marginTop: "-3%" }}>
          <div className="left__side__info">
            <h3 className="Regular">
              We're happy to answer any questions you may have about us.
            </h3>
          </div>
        </div>
      </div>
      <section id="contact" style={{marginBottom: "10%", marginTop: "6%"}}>
        <div className="container contact__container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Contact;
