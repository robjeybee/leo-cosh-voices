import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">
          Because <span className="italic">every</span> story matters
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-subtitle">
              In my
              <br />
              <span className="italic">own words</span>
            </h3>

            <p className="about-intro">
              I bring stories to life through voice.
            </p>

            <p className="about-paragraph">
              With a background in media production from Goldsmiths, University
              of London and over 10 years of voice acting experience, I
              specialise in full-cast audio dramas, writing, producing and
              performing work that immerses audiences in unforgettable worlds.
            </p>

            <p className="about-paragraph">
              As a voice actor, I've built a reputation for delivering
              authentic, engaging performances that connect with listeners. From
              shaping complex characters to driving narrative pace, I understand
              how voice and sound design work together to create compelling
              audio experiences.
            </p>

            <p className="about-paragraph">
              Whether behind the mic or behind the script, I combine creative
              storytelling with technical expertise, ensuring every project
              resonates, entertains and endures.
            </p>

            <button className="cta-button">LET'S TALK</button>
          </div>

          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
