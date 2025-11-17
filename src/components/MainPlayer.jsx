import React from "react";
import { useAudio } from "./AudioContext";
import ProgressBar from "./ProgressBar";
import albumArtwork from "/Assets/Leo_Cosh_Header_Image.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../styles/main-player.css";

export default function MainPlayer() {
  const { isPlaying, togglePlayPause, currentTime, duration, seek } =
    useAudio();

  const trackTitle = "Track Title";

  return (
    <div className="main-container" id="main">
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
          <div className="main-player-artwork">
            <img src={albumArtwork} alt={trackTitle} />
          </div>

          <div className="main-player-info">
            <h1 className="main-player-title">Press Play</h1>
            <p className="main-player-description">
              Let's create something amazing together
            </p>
          </div>

          <div className="main-player-progress">
            <ProgressBar
              showTime={true}
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
            />
          </div>

          <div className="main-player-controls">
            <button
              className="control-button"
              aria-label="Replay 10 seconds"
              onClick={() => seek(currentTime - 10)}
            >
              <span className="material-symbols-outlined">replay_10</span>
            </button>

            <button
              onClick={togglePlayPause}
              className="control-button play-button"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="player-icon"
              />
            </button>

            <button
              className="control-button"
              aria-label="Forward 10 seconds"
              onClick={() => seek(currentTime + 10)}
            >
              <span className="material-symbols-outlined">forward_10</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
