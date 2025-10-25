import React from "react";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Corporate film?",
      description:
        "Deliver a message that’s professional, polished, and full of personality.",
      icon: "movie", // Google Material Icon
    },
    {
      title: "Launching a brand?",
      description: "Spark emotion with warmth and expertise.",
      icon: "emoji_events",
    },
    {
      title: "Explainer video?",
      description: "Make complex ideas sound clear, simple, and engaging.",
      icon: "help_outline",
    },
    {
      title: "Character work?",
      description: "Bring scripts to life with an authentic voice and energy.",
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
          don’t just hear your message – they feel it.
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
