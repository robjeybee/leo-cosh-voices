import React, { useRef, useState, useEffect } from "react";
import MainPlayer from "./components/MainPlayer";
import MiniPlayer from "./components/MiniPlayer";
import Footer from "./components/Footer";
import { AudioProvider } from "./components/AudioContext";

import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Testimonials from "./components/Testimonials.jsx";

// Define your audio tracks array
const tracks = [
  {
    title: "Commercial Demo (2025)",
    description: "Voice Over Demo Reel",
    src: "/Assets/Leo Cosh Commercial Demo 2025.mp3",
  },
  {
    title: "Showreel (2025)",
    description: "Voice Acting & Commercial Reel",
    src: "/Assets/Leo Cosh Showreel_2025.mp3",
  },
];

function App() {
  const mainPlayerRef = useRef(null);
  const [mainPlayerVisible, setMainPlayerVisible] = useState(true);

  // Observe main player visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setMainPlayerVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (mainPlayerRef.current) {
      observer.observe(mainPlayerRef.current);
    }

    return () => {
      if (mainPlayerRef.current) {
        observer.unobserve(mainPlayerRef.current);
      }
    };
  }, []);

  return (
    // Pass the tracks array instead of a single src string
    <AudioProvider tracks={tracks}>
      <div ref={mainPlayerRef}>
        <MainPlayer />
      </div>

      <MiniPlayer isVisible={!mainPlayerVisible} />

      <Services />

      <About />

      <Testimonials />

      <Contact />

      <Footer />
    </AudioProvider>
  );
}

export default App;