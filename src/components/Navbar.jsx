import React from "react"
import logo from "../images/airbnb-logo.png"
function Navbar() {
    return (
        <nav>
            <img className="navbar-image" src={logo} />
        </nav>
    )
}

export default Navbar