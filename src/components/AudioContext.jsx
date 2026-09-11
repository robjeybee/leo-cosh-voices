import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children, tracks = [] }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // Initialize Audio instance
  if (!audioRef.current && tracks.length > 0) {
    audioRef.current = new Audio(tracks[0].src);
  }

  const currentTrack = tracks[currentTrackIndex] || {};

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const playTrack = (index) => {
    if (index === currentTrackIndex && isPlaying) return;

    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentTrackIndex(index);
    audioRef.current = new Audio(tracks[index].src);
    setCurrentTime(0);

    audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
  };

  const seek = (time) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      audio.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex]);

  return (
    <AudioContext.Provider
      value={{
        audioRef,
        isPlaying,
        togglePlayPause,
        currentTime,
        duration,
        seek,
        tracks,
        currentTrackIndex,
        currentTrack,
        playTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};