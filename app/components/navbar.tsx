import { NavLink } from "react-router"
import "../styles/navbar.css"

export default function Navbar() {
    return <div className="navbar">
        <nav>
            <NavLink to="/about">
                <p>Left</p>
            </NavLink>
            <NavLink to="/home">
                <p>Right</p>
            </NavLink>
        </nav>
    </div>
}