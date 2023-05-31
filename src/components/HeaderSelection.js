import React from 'react';
import logo from '../images/logo.png';
import msg from '../icons/msg.png';
import phone from '../icons/phone.png';

const HeaderSection = () => {
  return (
    <header className="header container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="contact-info">
        <p><img src={phone} alt='phone'/> 0203 519 4420</p>
        <p><img src={msg} alt='msg'/> info@solarinnovatio.com</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </header>
  );
};

export default HeaderSection;
