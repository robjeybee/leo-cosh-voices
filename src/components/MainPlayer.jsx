import React from "react";
import { useAudio } from "./AudioContext";
import ProgressBar from "./ProgressBar";
import albumArtwork from "/Assets/Leo_Cosh_Header_Image.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../styles/main-player.css";

export default function MainPlayer() {
  const {
    isPlaying,
    togglePlayPause,
    currentTime,
    duration,
    seek,
    tracks,
    currentTrackIndex,
    playTrack,
  } = useAudio();

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

        <div className="players-grid">
          {tracks.map((track, index) => {
            const isCurrentTrack = index === currentTrackIndex;
            const isTrackPlaying = isCurrentTrack && isPlaying;

            return (
              <div key={index} className="main-player-card">
                <div className="main-player-artwork">
                  <img src={albumArtwork} alt={track.title} />
                </div>

                <div className="main-player-info">
                  <h2 className="main-player-title">{track.title}</h2>
                  <p className="main-player-description">{track.description}</p>
                </div>

                <div className="main-player-progress">
                  <ProgressBar
                    showTime={true}
                    currentTime={isCurrentTrack ? currentTime : 0}
                    duration={isCurrentTrack ? duration : 0}
                    onSeek={(time) => {
                      if (!isCurrentTrack) playTrack(index);
                      seek(time);
                    }}
                  />
                </div>

                <div className="main-player-controls">
                  <button
                    className="control-button"
                    aria-label="Replay 10 seconds"
                    onClick={() => {
                      if (isCurrentTrack) seek(currentTime - 10);
                    }}
                  >
                    <span className="material-symbols-outlined">replay_10</span>
                  </button>

                  <button
                    onClick={() => {
                      if (isCurrentTrack) {
                        togglePlayPause();
                      } else {
                        playTrack(index);
                      }
                    }}
                    className="control-button play-button"
                    aria-label={isTrackPlaying ? "Pause" : "Play"}
                  >
                    <FontAwesomeIcon
                      icon={isTrackPlaying ? faPause : faPlay}
                      className="player-icon"
                    />
                  </button>

                  <button
                    className="control-button"
                    aria-label="Forward 10 seconds"
                    onClick={() => {
                      if (isCurrentTrack) seek(currentTime + 10);
                    }}
                  >
                    <span className="material-symbols-outlined">forward_10</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}