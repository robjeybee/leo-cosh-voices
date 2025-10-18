import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">
          Let's make it <span className="italic">unforgettable</span>
        </h2>

        <h3 className="contact-subtitle">Get in touch</h3>

        <p className="contact-description">
          Got a script? I'll bring it to life in 2–3 business days,
          <br />
          with a process that's fast, collaborative, and surprisingly fun.
        </p>

        <div className="contact-card">
          <div className="contact-info">
            <p className="contact-label">Email me directly</p>
            <a href="mailto:leocosh@leocosh.com" className="contact-email">
              leocosh@leocosh.com
            </a>
          </div>
        </div>

        <div className="social-section">
          <p className="social-title">Connect with me</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn"></a>
            <a href="#" className="social-link" aria-label="Instagram"></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
