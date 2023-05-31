import React from "react";
import send  from '../icons/send.png';
import logo1 from '../images/logo 1.png';
import image1 from '../images/image 1.png';
import location from '../icons/whitelocation.png';
import msg from '../icons/whitemsg.png';
import phone from '../icons/whitephone.png';

const Footer = () => {
    return (
        <div id="footer" className="footer">
                <div className="footer-start">
                    <div className="space-around container">
                        <div className="subscribe">
                            <h2>Subscribe for Newsletter</h2>
                            <p>Leo dui fermentum tristique urna tellus eget amet aliquam. <br />Id vitae orci maecenas tortor odio</p>
                        </div>
                        <div className="send">
                            <div className="input-with-button">
                                <input type="email" placeholder="Inserisci la tua email" className="input-field" />
                                <button className="input-button">
                                    <img src={send} alt="Send" className="button-image" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-end">
                        <div className="end container">
                            <div className="company">
                                <img src={logo1} alt="Logo" />
                                <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
                                <div className="images">
                                    <img src={image1} alt="freeimage"/>
                                    <img src={image1} alt="freeimage"/>
                                    <img src={image1} alt="freeimage"/>
                                    <img src={image1} alt="freeimage"/>
                                    <img src={image1} alt="freeimage"/>
                                    <img src={image1} alt="freeimage"/>
                                </div>
                            </div>
                            <div className="quicklinks">
                                <ul>
                                    <li><strong>Quick Links</strong></li>
                                    <li>Home</li>
                                    <li>Chi Siamo</li>
                                    <li>S.I.R.E</li>
                                    <li>SIRE Features</li>
                                    <li>Why SIRE?</li>
                                    <li>SIRE Product</li>
                                    <li>How it Works?</li>
                                </ul>
                            </div>
                            <div className="useful-links">
                                <ul>
                                    <li><strong>Useful Links</strong></li>
                                    <li>Help Center</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Condition</li>
                                    <li>FAQ</li>
                                    <li></li>
                                    <li><strong>Documents</strong></li>
                                    <li>Lindked Here</li>
                                </ul>
                            </div>
                            <div className="contact-full">
                                <div className="heading">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-info">
                                <div className="info">
                                    <div className="images">
                                    <img src={location} alt="location" />
                                    </div>
                                    <div className="desc">
                                        <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="images">
                                    <img src={msg} alt="msgicon" />
                                    </div>
                                    <div className="desc">
                                        <p>email@email.com</p>
                                        <p>support@email.com</p>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="images">
                                    <img src={phone} alt="phone" />
                                    </div>
                                    <div className="desc">
                                        <p>+29 98595 8998</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;