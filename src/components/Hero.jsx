import videoReel from "../assets/Leo Cosh Hero Reel.mp4";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background video */}
      <video
        className="hero-video"
        src={videoReel}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Creative Developer & Designer</p>
      </div>
    </section>
  );
}

export default Hero;
