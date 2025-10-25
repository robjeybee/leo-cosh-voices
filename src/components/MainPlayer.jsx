import React from "react";
import { useAudio } from "./AudioContext";
import ProgressBar from "./ProgressBar";
import albumArtwork from "../assets/Leo Cosh Animated.png";
import "../styles/main-player.css";

export default function MainPlayer() {
  const { isPlaying, togglePlayPause, currentTime, duration, seek } =
    useAudio();

  const trackTitle = "Track Title";
  const trackDescription = "Track Description";

  return (
    <div className="main-player">
      <div className="main-player-heading">
        <h1>
          I'm <span>Leo</span>
        </h1>
        <p>
          a <span>Voice Actor</span>
        </p>
        <p>
          based in <span>London</span>
        </p>
      </div>
      <div className="main-player-card">
        {/* Artwork */}
        <div className="main-player-artwork">
          <img src={albumArtwork} alt={trackTitle} />
        </div>

        {/* Track info */}
        <div className="main-player-info">
          <h1 className="main-player-title">Press Play</h1>
          <p className="main-player-description">
            Let's create something amazing together
          </p>
        </div>

        {/* Progress bar */}
        <div className="main-player-progress">
          <ProgressBar
            showTime={true}
            currentTime={currentTime}
            duration={duration}
            onSeek={seek}
          />
        </div>

        {/* Controls */}
        <div className="main-player-controls">
          <button className="control-button" aria-label="Previous track">
            <span className="material-symbols-outlined">skip_previous</span>
          </button>

          <button
            onClick={togglePlayPause}
            className="control-button play-button"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className="material-symbols-outlined">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>

          <button className="control-button" aria-label="Next track">
            <span className="material-symbols-outlined">skip_next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
