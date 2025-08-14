import demoReel from "../Assets/Leo Cosh Commercial Demo 2025.mp3";
import "../styles/hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Leo Cosh Voices</h1>
            <h2>
              Your story deserves to be heard, with a voice that keeps people
              listening.
            </h2>
            <p>Hear the difference, play my show reel</p>
            <audio src={demoReel} type="audio/mpeg" controls>
              "Your browser does not support the audio element."
            </audio>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
