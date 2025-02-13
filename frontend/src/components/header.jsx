import React from "react";
import { Link } from "react-router-dom";
import "./../styles/style.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MED-I</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
