import React from "react";
import msg from '../icons/msg.png';
import phone from '../icons/phone.png';
import location from '../icons/location.png';

const Contactform = () => {
    return (
        <div className="contact container">
            <div className="heading">
                <h2>CONTATTACI</h2>
                <hr />
            </div>
            <div className="left-right">
                <div className="left">
                    <div className="icon-description">
                        <img src={location} alt=""/>
                        <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                    </div>
                    <div className="icon-description">
                        <img src={msg} alt=""/>
                        <div className="mails">
                            <p>email@email.com</p>
                            <p>support@email.com</p>
                        </div>
                    </div>
                    <div className="icon-description">
                        <img src={phone} alt=""/>
                        <p>+29 98595 8998</p>
                    </div>
                    <hr />
                    <p>We Will get back to you within 24 hours. Or Call us Now </p>
                </div>
                <form>
                    <div className="form-section">
                        <div className="input-container">
                        <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-section">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-section">
                        <textarea id="comment" name="comment" rows="4" placeholder="Comment" required></textarea>
                    </div>
                    <button type="submit">SEND</button>
                </form>

            </div>
        </div>
    );
};

export default Contactform;