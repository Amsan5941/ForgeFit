import React, { useState } from "react";
import "./Navbar.css";
import LoginButton from "../Logins/LoginButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="left">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tracker">Tracker</Link>
            <Link to="/chat">Chat Bot</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="right">
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
