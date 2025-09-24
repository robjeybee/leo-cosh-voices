import { useState, useEffect } from "react";
import videoReel from "../assets/Leo Cosh Hero Reel.mp4";
import mobileReel from "../assets/Leo Cosh Mobile Video.mp4";
import "../styles/hero.css";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(videoReel);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(mobileReel); // mobile video
      } else {
        setVideoSrc(videoReel); // desktop video
      }
    };

    // Set initial video based on current window size
    handleResize();

    // Update video when window resizes
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      {/* Background video */}
      <video
        className="hero-video"
        src={videoSrc}
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
