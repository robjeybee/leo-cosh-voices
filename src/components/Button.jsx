import "../styles/button.css";

function Button() {
  return (
    <a className="btn" href="#contact">
      Let's Talk
      <span className="material-symbols-outlined service-icon">
        arrow_circle_right
      </span>
    </a>
  );
}

export default Button;
