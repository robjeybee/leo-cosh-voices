import "../styles/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">LEO COSH</span>
            <span className="logo-subtitle">VOICES</span>
          </div>

          <a href="#contact">
            <button className="header-cta">
              <p>Let's Talk</p>
              <span className="material-symbols-outlined service-icon">
                arrow_circle_right
              </span>
            </button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
