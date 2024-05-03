import React from "react"
import photogrid from "../images/photogrid.png"

function Hero() {
    return (
        <div className="hero">
            <img src={photogrid} className="hero-image" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero