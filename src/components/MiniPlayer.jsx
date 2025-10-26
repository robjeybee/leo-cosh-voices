import React from "react";
import { useAudio } from "./AudioContext";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../styles/mini-player.css";

export default function MiniPlayer({ isVisible }) {
  const { isPlaying, togglePlayPause, currentTime, duration, seek } =
    useAudio();

  return (
    <div className={`mini-player ${isVisible ? "visible" : ""}`}>
      <div className="mini-player-container">
        <div className="mini-player-content">
          <div className="mini-player-info">
            <h3 className="mini-player-title">Leo Cosh</h3>
            <p>Professional Voice Actor</p>
          </div>

          <button
            onClick={togglePlayPause}
            className="mini-player-button"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              className="mini-player-icon"
            />
          </button>
        </div>

        <div className="mini-player-progress">
          <ProgressBar
            showTime={false}
            currentTime={currentTime}
            duration={duration}
            onSeek={seek}
          />
        </div>
      </div>
    </div>
  );
}
