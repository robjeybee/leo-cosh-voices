import "../styles/demo.css";

export default function PressPlay() {
  return (
    <section className="press-play-section">
      <div className="press-play-content">
        <h2 className="press-play-title">
          <span className="italic">Press play</span> — and let's create
          <br />
          something amazing together
        </h2>

        <div className="audio-player">
          <audio src="/Assets/Leo Cosh Commercial Demo 2025.mp3" controls />
        </div>

        <p className="press-play-description">
          If your brand, film, or campaign isn't connecting,
          <br />
          it's not your message — it's how it's told.
        </p>
        <p className="press-play-tagline">
          I bring warmth, clarity, and presence that makes
          <br />
          people lean in and stay engaged.
        </p>

        <button className="cta-button">
          LET'S TALK
          <span className="material-symbols-outlined service-icon">
            arrow_circle_right
          </span>
        </button>
      </div>
    </section>
  );
}
