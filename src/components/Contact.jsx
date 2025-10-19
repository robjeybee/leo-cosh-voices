import "../styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-content-header">
            <p>
              Let's make it <span>unforgettable</span>
            </p>
          </div>

          <div className="contact-content-cta">
            <p>Get in touch</p>
            <p>
              Got a script? I’ll bring it to life in 2–3 business days, with a
              process that’s fast, collaborative, and surprisingly fun.
            </p>
            <a href="mailto:youremail@example.com" className="contact-email-link">
              <span className="material-symbols-outlined">mail</span>
              <p>Email me</p>
            </a>
          </div>

          <div className="contact-content-socials">
            <p>connect with me</p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faPhone} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
