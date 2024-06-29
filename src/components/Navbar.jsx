import React from "react"
import logo from "/images/airbnb-logo.png"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <img className="navbar-image" src={logo} />
            <div className="navbar-links">
                <Link to="/React-app-Airbnb/">HOME</Link>
                <Link to="/React-app-Airbnb/create">NEW CARDS</Link>
            </div>
        </nav>
    )
}

export default Navbar