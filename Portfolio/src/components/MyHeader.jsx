import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
    return (
        <header>
            <nav className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Games">Games</Link></li>
                    <li><Link to="/Survey">Survey</Link></li>
                    <li><Link to="/Workspace">Workspace</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MyHeader;