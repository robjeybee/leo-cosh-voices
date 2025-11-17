import React from "react";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Corporate film?",
      description:
        "Deliver a message that’s professional, polished, and persuasive.",
      icon: "movie", // Google Material Icon
    },
    {
      title: "Launching a brand?",
      description: "Spark emotion with warmth and expertise.",
      icon: "emoji_events",
    },
    {
      title: "Explainer video?",
      description:
        "Give your ideas a clear, friendly and trustworthy presentation.",
      icon: "help_outline",
    },
    {
      title: "Character work?",
      description:
        "Bring scripts to life through a range of accents and authentic energy. Already inspired by a voice? See if I can match it!",
      icon: "person",
    },
  ];

  return (
    <div className="services-container">
      <section className="services">
        <h2 className="services-heading">
          With a voice that works as hard as you do
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="material-symbols-outlined service-icon">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <p className="services-summary">
          Tone, pacing, and delivery – matched to every vision, so audiences
          don’t just hear your message – they feel it - no matter the size!
        </p>

        <button
          className="services-cta"
          onClick={() => (window.location.href = "#contact")}
        >
          Let’s talk{" "}
          <span className="material-symbols-outlined">arrow_circle_right</span>
        </button>
      </section>
    </div>
  );
}
