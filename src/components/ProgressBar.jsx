import React, { useRef } from "react";
import "../styles/progress-bar.css";

export default function ProgressBar({
  showTime = true,
  currentTime = 0,
  duration = 0,
  onSeek,
}) {
  const progressBarRef = useRef(null);

  const handleSeek = (e) => {
    if (!onSeek) return;

    const bounds = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const newTime = (x / bounds.width) * duration;

    onSeek(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-wrapper"
        ref={progressBarRef}
        onClick={handleSeek}
      >
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      {showTime && (
        <div className="progress-bar-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
}
