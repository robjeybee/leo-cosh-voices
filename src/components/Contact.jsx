import React from "react";
import "../styles/contact.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <h1 className="contact-main-heading">Let’s make it unforgettable.</h1>
      <h2 className="contact-subheading">Get in touch</h2>
      <p className="contact-description">
        Got a script? I’ll bring it to life in 2–3 business days, with a process
        that’s fast, collaborative, and surprisingly fun.
      </p>

      <div className="contact-get-in-touch">
        <a href="mailto:hello@example.com" className="contact-btn">
          <span className="material-symbols-outlined">mail</span>
          Email Me
        </a>
        <a href="tel:+447568307902" className="contact-btn">
          <span className="material-symbols-outlined">call</span>
          Call Me
        </a>
      </div>

      <h3 className="contact-connect-heading">Connect with me</h3>
      <div className="contact-socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
