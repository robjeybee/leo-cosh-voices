import "../styles/services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2 className="services-title">
          With <span className="italic">a voice that works</span>
          <br />
          as hard as you do
        </h2>

        <p className="services-subtitle">
          Tone, pacing, and delivery — matched to every vision, so
          <br />
          audiences don't just hear your message — they feel it.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <span className="material-symbols-outlined service-icon">mic</span>
            <h3 className="service-title">Corporate film?</h3>
            <p className="service-description">
              Deliver a message that's professional, polished, and full of
              personality.
            </p>
          </div>

          <div className="service-card">
            <span className="material-symbols-outlined service-icon">work</span>
            <h3 className="service-title">Explainer video?</h3>
            <p className="service-description">
              Make complex ideas sound clear, simple, and engaging.
            </p>
          </div>

          <div className="service-card">
            <span className="material-symbols-outlined service-icon">
              rocket_launch
            </span>
            <h3 className="service-title">Launching a brand?</h3>
            <p className="service-description">
              Spark emotion with warmth and expertise.
            </p>
          </div>

          <div className="service-card">
            <span className="material-symbols-outlined service-icon">
              group
            </span>
            <h3 className="service-title">Character work?</h3>
            <p className="service-description">
              Bring scripts to life with an authentic voice and energy.
            </p>
          </div>
        </div>

        <p className="services-footer">
          Let's bring your message to life, start today.
        </p>

        <button className="cta-button">LET'S TALK</button>
      </div>
    </section>
  );
}
