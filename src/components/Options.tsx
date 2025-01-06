import { NavLink, useLocation } from "react-router-dom";

export default function Options() {
    const location = useLocation().pathname.replace(/\//g, "")

    return (
        <ul className="options">
            <NavLink className="active" to="/" children={location === "" ? <li>●</li> : <li>Home</li>} />
            <NavLink className="active" to="/Project" children={location === "Project" ? <li>●</li> : <li>Projects</li>} />
            <NavLink className="active" to="/Info" children={location === "Info" ? <li>●</li> : <li>Info</li>} />
            <NavLink className="active" to="/Contact" children={location === "Contact" ? <li>●</li> : <li>Contact</li>} />
        </ul>
    )
}