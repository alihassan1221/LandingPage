import React from "react";
import image1 from '../images/Ellipse 1.png';
import imageup from '../images/imageup.png';
import imagebelow from '../images/imagebelow.png';

const SIRE = () => {
    return (
        <div className="sire container">
          <div className="horizontal">  
            <div className="images">
                <img src={image1} alt="Elispe shape" />
                <div className="groupimage">
                    <img src={imagebelow} alt="Imagebelow" />
                    <img src={imageup} alt="Imageup" />
                </div>
            </div>
            <div className="sire-info">
                <div className="heading">
                    <h2>S.I.R.E</h2>
                    <h2>Smart Integrated Renewable Energy</h2>
                    <hr />
                    <p>S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.</p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default SIRE;