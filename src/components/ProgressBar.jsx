import React, { useRef, useEffect, useState } from "react";
import { useAudio } from "./AudioContext";
import "../styles/progress-bar.css";

export default function ProgressBar({
  showTime = true,
  currentTime = 0,
  duration = 0,
  onSeek,
}) {
  const { isPlaying, audioRef } = useAudio();
  const progressBarRef = useRef(null);
  const fillRef = useRef(null);
  const [displayTime, setDisplayTime] = useState(currentTime);

  // Smoothly interpolate playback
  useEffect(() => {
    let frame;
    let lastFrameTime = performance.now();

    const animate = (now) => {
      const audio = audioRef.current;
      const delta = now - lastFrameTime;
      lastFrameTime = now;

      setDisplayTime((prev) => {
        if (!isPlaying || !audio || !duration) return currentTime;
        const next = prev + delta / 1000;
        return Math.min(next, duration);
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, duration, currentTime, audioRef]);

  // Sync displayTime when paused, ended, or seeked
  useEffect(() => {
    setDisplayTime(currentTime);
  }, [currentTime, isPlaying]);

  const handleSeek = (e) => {
    if (!onSeek || !duration) return;
    const bounds = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const newTime = (x / bounds.width) * duration;
    onSeek(newTime);
    setDisplayTime(newTime); // ← instantly reflect the seek visually
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (displayTime / duration) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-wrapper"
        ref={progressBarRef}
        onClick={handleSeek}
      >
        <div
          ref={fillRef}
          className="progress-bar-fill"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
      {showTime && (
        <div className="progress-bar-time">
          <span>{formatTime(displayTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
}
