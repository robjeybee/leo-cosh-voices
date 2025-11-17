import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-container">
      <h2 className="about-heading">Because every story matters</h2>

      <div className="about-content">
        <div className="about-text">
          <h3 className="about-subheading">In my own words</h3>

          <p>
            I believe sound and voice are powerful because they’re
            underestimated - in any project, they can be more versatile than the
            grandest budgets or even the most eye-popping pictures!
          </p>

          <p>
            I’ve built on years of running live role-playing games and
            co-presenting panels to make sure I can connect with as many
            listeners as possible.
          </p>

          <p>
            With a background in media production from Goldsmiths, University of
            London and over 10 years of voice acting experience, I specialise in
            full-cast audio dramas, writing, producing and performing work that
            immerses audiences in unforgettable worlds.
          </p>

          <p>
            As a voice actor, my goal is to combine my experience with your
            influences and make it work for you.
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

        <div className="about-image">
          <img src="/Assets/AboutImage.JPG" alt="Leo Cosh" />
        </div>
      </div>
    </section>
  );
}
