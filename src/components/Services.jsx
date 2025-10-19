import "../styles/voice.css";
import Button from "./Button";

function VoiceSection() {
  return (
    <section className="voice">
      <div className="voice-container">
        <div className="voice-heading">
          <h2>
            With <em>a voice that works</em> as hard as you do
          </h2>
        </div>

        <div className="voice-services">
          <div className="voice-service">
            <span className="icon">🎙️</span>
            <div>
              <h3>Corporate film?</h3>
              <p>Deliver a message that’s professional, polished, and full of personality.</p>
            </div>
          </div>

          <div className="voice-service">
            <span className="icon">🎙️</span>
            <div>
              <h3>Launching a brand?</h3>
              <p>Spark emotion with warmth and expertise.</p>
            </div>
          </div>

          <div className="voice-service">
            <span className="icon">🎙️</span>
            <div>
              <h3>Explainer video?</h3>
              <p>Make complex ideas sound clear, simple, and engaging.</p>
            </div>
          </div>

          <div className="voice-service">
            <span className="icon">🎙️</span>
            <div>
              <h3>Character work?</h3>
              <p>Bring scripts to life with an authentic voice and energy.</p>
            </div>
          </div>
        </div>

        <div className="voice-footer">
          <p>
            Tone, pacing, and delivery – matched to every vision, so audiences don’t just hear your
            message – <em>they feel it.</em>
          </p>
          <p className="bold-text">
            Let’s bring your message to life, start today.
          </p>

          <hr />
          <Button text="LET’S TALK" />
        </div>
      </div>
    </section>
  );
}

export default VoiceSection;
