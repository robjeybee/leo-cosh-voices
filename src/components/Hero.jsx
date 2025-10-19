import Button from "./Button";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          I'm <span className="hero-name">Leo, </span>
          <img
            src="/Assets/Leo Cosh Hero Image.png"
            alt="Portrait of Leo Cosh"
            className="hero-inline-image"
            loading="lazy"
          />
          <br />a <span>Voice Actor</span>
          <br />
          based in <span>London</span>
        </h1>
        <p className="hero-subtitle">
          Your story deserves to be heard,
          <br />
          with a voice that keeps people listening.
        </p>
        <Button />
      </div>
    </section>
  );
}

export default Hero;
