import Button from "./Button";
import "../styles/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" href="#contact">
            <a href="#">
              <p>
                Leo Cosh
                <br />
                <span>Voices</span>
              </p>
            </a>
          </div>

          <Button />
        </div>
      </header>
    </>
  );
}

export default Header;
