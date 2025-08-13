import "../styles/header.css";
import demoReel from "../Assets/Leo Cosh Commercial Demo 2025.mp3";

export default function Header() {
  return (
    <header className="header">
      <h1>
        Leo <span className="bold">Cosh</span>
      </h1>
      <p className="subtitle">Showreel 2025</p>
      <audio controls>
        <source src={demoReel} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </header>
  );
}
