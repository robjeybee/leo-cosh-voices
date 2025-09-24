import videoReel from "../assets/Leo Cosh Hero Reel.mp4";

function Hero() {
  return (
    <video
      src={videoReel}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "auto" }}
    />
  );
}

export default Hero;
