import React from 'react';


const NavigationBar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-toggler">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#images">Images</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#howit">How it works</a></li>
        <li><a href="#why">Why us</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
