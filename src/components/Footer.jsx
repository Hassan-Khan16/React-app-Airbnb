import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left-div">
                <p>© 2024 Airbnb, Inc</p>
                <Link to="/React-app-Airbnb/">HOME</Link>
                <Link to="/React-app-Airbnb/create">NEW CARDS</Link>
            </div>
            <div className="footer-right-div">
                <a href="https://www.facebook.com/airbnb" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                </a>
                <a href="https://www.twitter.com/airbnb" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                </a>
                <a href="https://www.instagram.com/airbnb" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;