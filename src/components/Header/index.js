import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './style.css';
import logo from "../Images/logo.png"

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className="logo" src={logo} />

      {/* Mobile Navigation Bar */}
      <div className="mobile-menu" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="dropdown">
            <Link className="dropbtn">Services</Link>
            <div className="dropdown-content">
              <Link to="/service1">Service 1</Link>
              <Link to="/service2">Service 2</Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
