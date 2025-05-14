import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo className="logo-icon" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <a href="/#how-it-works" onClick={() => setMenuOpen(false)}>HOW IT WORKS</a>
        </li>
        <li>
          <a href="/#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        </li>
        <li>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a>
        </li>
        <li>
          <NavLink
            to="/value-added-services"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            VALUE ADDED SERVICES
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <NavLink to="/download" className="download-btn">
          Download
        </NavLink>

        
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
