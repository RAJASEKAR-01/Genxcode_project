import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/genxcode.jpeg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} className="logo"/>

        {/* Hamburger button */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className="cta" onClick={() => setMenuOpen(false)}>Get Quote</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
