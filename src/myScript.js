import React, { useState } from 'react';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavLinks = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar container">
      <div className="navbar-toggler" onClick={toggleNavLinks}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Chi Siamo</a></li>
        <li><a href="#sire">S.I.R.E</a></li>
        <li><a href="#features">SIRE Features</a></li>
        <li><a href="#whysire">Why SIRE?</a></li>
        <li><a href="#choose">SIRE Product</a></li>
        <li><a href="#contact">How it Works?</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
