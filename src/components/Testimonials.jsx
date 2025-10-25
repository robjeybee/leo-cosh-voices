import React from "react";
import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-container">
      <div className="testimonials-inner">
        <h2 className="testimonials-heading">
          And every word deserves to be felt
        </h2>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “I have had the greatest pleasure working with Leo. All the way
            through our collaboration he has delivered high-quality voice acting
            by checking in on what could be better and if he was delivering the
            lines in the way I envisioned it. I also very much appreciated how
            he provided me with different takes, exploring and creatively
            improving my initial vision, turning my manuscript into a living
            performance. I highly recommend him to anyone who is in need of a
            professional voice actor.”
          </p>

          <p className="testimonial-achievement">
            With this performance I won the highest reward at the Banzaicon
            Cosplay Contest — effectively the Norwegian Cosplay Championship —
            which qualified me and the performance for the Nordic Cosplay
            Championship (NCC). The judges highlighted the high quality of sound
            and acting as standout factors.
          </p>

          <p className="testimonial-author">— Sara Østvik</p>
        </div>
      </div>
    </section>
  );
}
