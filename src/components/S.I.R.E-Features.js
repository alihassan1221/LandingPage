import React from "react";
import ellipse from '../icons/ellipse1.png';
import call from '../icons/call.png';
import sign from '../icons/sign.png';
import lightening from '../icons/lightening.png';
import safe from '../icons/safe.png';
import toggler from '../icons/toggler.png';
import meter from '../icons/meter.png';

const Features = () => {
    return (
        <div id="features" className="features">
            <div className="heading">
                <h1>Connesso, Intelligente, Resistente</h1>
                <hr />
            </div>
            <div className="full-info container">
                <div className="info-with-icons">
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={call} alt="call"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={lightening} alt="lightening"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                </div>
                <div className="info-with-icons">
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={meter} alt="meter"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={sign} alt="sign"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                </div>
                <div className="info-with-icons">
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={toggler} alt="toggler"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                    <div className="groupicons">
                        <div className="icons">
                            <img src={ellipse} alt="ellipse"/>
                            <img src={safe} alt="safe"/>
                        </div>
                        <div className="data">
                            <h3>Versatile</h3>
                            <p>Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;