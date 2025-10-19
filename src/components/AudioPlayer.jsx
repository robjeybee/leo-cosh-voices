import "../styles/audioplayer.css";
import { useRef, useState, useEffect } from "react";

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Load metadata to get duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
    setEnded(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || isSeeking) return;
    setProgress((audio.currentTime / audio.duration) * 100);
    setCurrentTime(audio.currentTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    setEnded(true); // trigger sparkle

    setTimeout(() => {
      setProgress(0);
      setCurrentTime(0);
      setEnded(false); // remove sparkle after animation
    }, 1500); // match CSS animation duration
  };

  const seekToPosition = (clientX) => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (!progressBar || !audio || !audio.duration) return;

    const rect = progressBar.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newProgress = Math.min(Math.max(offsetX / rect.width, 0), 1);
    audio.currentTime = newProgress * audio.duration;
    setProgress(newProgress * 100);
    setCurrentTime(audio.currentTime);
  };

  // Mouse controls
  const handleMouseDown = (e) => {
    setIsSeeking(true);
    seekToPosition(e.clientX);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e) => seekToPosition(e.clientX);
  const handleMouseUp = () => {
    setIsSeeking(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Touch controls
  const handleTouchStart = (e) => {
    setIsSeeking(true);
    seekToPosition(e.touches[0].clientX);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };
  const handleTouchMove = (e) => seekToPosition(e.touches[0].clientX);
  const handleTouchEnd = () => {
    setIsSeeking(false);
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  const formatTime = (time) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="controls">
        <button
          onClick={togglePlay}
          className={`icon-btn ${isPlaying ? "active" : ""}`}
        >
          <span className="material-icons">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>

        {/* Progress Bar Wrapper */}
        <div className={`progress-bar-wrapper ${ended ? "sparkle" : ""}`}>
          <div
            ref={progressBarRef}
            className="progress-bar"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div
              className="progress-filled"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        <button
          onClick={toggleMute}
          className={`icon-btn ${isMuted ? "active" : ""}`}
        >
          <span className="material-icons">
            {isMuted ? "volume_off" : "volume_up"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
