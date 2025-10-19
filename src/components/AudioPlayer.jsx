import "../styles/audioplayer.css"

import { useRef, useState, useEffect } from "react";
import "../styles/audioPlayer.css"; // optional, for styling

function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play / Pause toggle
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Update progress
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  // Reset on end
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="audio-player">
      {title && <p className="audio-title">{title}</p>}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <div className="controls">
        <button onClick={togglePlay} className="play-pause-btn">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="progress-bar">
          <div
            className="progress-filled"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
