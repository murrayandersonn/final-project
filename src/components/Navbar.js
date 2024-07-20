import React, {} from "react";
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
       <nav>
            <Link to="/" className="title">Track Laps</Link>
            <ul>
                <li>
                    <NavLink to="/Nring">Nürburgring</NavLink>
                </li>
                <li>
                    <NavLink to="/LagunaSeca">Laguna Seca</NavLink>
                </li>
            </ul>
       </nav>
   );
}

export default Navbar;