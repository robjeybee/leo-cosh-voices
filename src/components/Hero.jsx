import "../styles/hero.css";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            I'm <span className="hero-name">Leo,</span>
            <br />a <span className="hero-role">Voice Actor</span>
            <br />
            based in <span className="hero-location">London</span>
          </h1>
          <p className="hero-subtitle">
            Your story deserves to be heard,
            <br />
            with a voice that keeps people listening.
          </p>
          <button className="cta-button">LET'S GET STARTED</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
