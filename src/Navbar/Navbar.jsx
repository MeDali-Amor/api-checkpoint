import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/">
                    <h1 className="logo">Conect</h1>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
            <button className="login-btn">Login</button>
        </div>
    );
};

export default Navbar;
