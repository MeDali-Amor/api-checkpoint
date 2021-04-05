import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ login, setLogin }) => {
    return (
        <div className="navbar">
            <div>
                <Link to="/">
                    <h1 className="logo">Conect</h1>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="links" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
            <button className="login-btn" onClick={() => setLogin(!login)}>
                {login ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default Navbar;
