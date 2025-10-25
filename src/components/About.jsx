import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-heading">Because every story matters</h2>

      <div className="about-content">
        {/* Text content */}
        <div className="about-text">
          <h3 className="about-subheading">In my own words</h3>

          <p>
            I bring stories to life through voice. With a background in media
            production from Goldsmiths, University of London and over 10 years
            of voice acting experience, I specialise in full-cast audio dramas,
            writing, producing and performing work that immerses audiences in
            unforgettable worlds.
          </p>

          <p>
            As a voice actor, I’ve built a reputation for delivering authentic,
            engaging performances that connect with listeners. From shaping
            complex characters to driving narrative pace, I understand how voice
            and sound design work together to create compelling audio
            experiences.
          </p>

          <p>
            Whether behind the mic or behind the script, I combine creative
            storytelling with technical expertise, ensuring every project
            resonates, entertains and endures.
          </p>

          <button
            className="services-cta"
            onClick={() => (window.location.href = "#contact")}
          >
            Let’s talk{" "}
            <span className="material-symbols-outlined">
              arrow_circle_right
            </span>
          </button>
        </div>

        {/* Image */}
        <div className="about-image">
          <img src="/Assets/Leo_Cosh_Header_Image.JPG" alt="Leo Cosh" />
        </div>
      </div>
    </section>
  );
}
