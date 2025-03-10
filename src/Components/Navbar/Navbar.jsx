import React, { useState } from "react";
import "./Navbar.css"; // Import CSS for styling
import LoginButton from "../Logins/LoginButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tracker">Tracker</a>
          <a href="#chat">Chat Bot</a>
          <a href="#contact">Contact</a>
          <LoginButton></LoginButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
