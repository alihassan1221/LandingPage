import React from "react";
import tower from '../images/tower.png';
import bulb from '../images/bulb.png';
import dots from '../icons/dots.png';
import battery from '../icons/battery.png';
import family from '../icons/family.png';
import Ellipse from '../icons/Ellipse.png';

const Choose = () => {
    return (
        <div className="choose container">
            <div className="heading">
                <h1>Scegli il tuo SIRE</h1>
                <hr />
            </div>
            <div className="block">
                <div className="cards">
                        <img src={tower} alt="Tower" />
                        <h2>S.I.R.E Full</h2>
                        <p><img src={dots} alt="dots" /> Struttura meccanizzata in poliuera e sensoristica intelligente</p>
                        <p><img src={dots} alt="dots" /> Pannelli alta efficienza da 1KW</p>
                        <p><img src={dots} alt="dots" /> Inverter e conne ssione aII impianto domestico </p>
                        <p><img src={dots} alt="dots" /> App di controllo e gesti one</p>
                        <h4>CONSIGLIATO PER:</h4>
                        <div className="block-container">
                            <div className="block">
                                <div className="groupicon">
                                    <img src={Ellipse} alt="Ellipse" />
                                    <img src={battery} alt="batteryicon" />
                                </div>
                                <div className="right-section">
                                    <p>Devices</p>
                                </div>
                            </div>
                            <div className="block">
                                <div className="groupicon">
                                    <img src={Ellipse} alt="Ellipse" />
                                    <img src={family} alt="familyicon" />
                                </div>
                                <div className="right-section">
                                    <p>Families</p>
                                </div>
                            </div>
                        </div>
                        <div className="ulist">
                            <h4><strong>Title here if they have, otherwise remove this</strong></h4>
                            <ul>
                                <li>Siste ma 2 kW con accumuIo.</li>
                                <li>Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
                                <li>Te mpo di scarica a 16A is 8 ore.</li>
                                <li>Autonomia dalla rete eIettrica 62Po.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={bulb} alt="Bulb" />
                        <h2>S.I.R.E Full</h2>
                        <p><img src={dots} alt="dots" /> Struttura meccanizzata in poliuera e sensoristica intelligente</p>
                        <p><img src={dots} alt="dots" /> Pannelli alta efficienza da 1KW</p>
                        <p><img src={dots} alt="dots" /> Inverter e conne ssione aII impianto domestico </p>
                        <p><img src={dots} alt="dots" /> App di controllo e gesti one</p>
                        <h4>CONSIGLIATO PER:</h4>
                        <div className="block-container">
                            <div className="block">
                                <div className="groupicon">
                                    <img src={Ellipse} alt="Ellipse" />
                                    <img src={battery} alt="batteryicon" />
                                </div>
                                <div className="right-section">
                                    <p>Devices</p>
                                </div>
                            </div>
                            <div className="block">
                                <div className="groupicon">
                                    <img src={Ellipse} alt="Ellipse" />
                                    <img src={family} alt="familyicon" />
                                </div>
                                <div className="right-section">
                                    <p>Families</p>
                                </div>
                            </div>
                        </div>
                        <div className="ulist">
                            <h4><strong>Title here if they have, otherwise remove this</strong> <i className="scroll-down-icon"></i></h4>
                            <ul>
                                <li>Siste ma 2 kW con accumuIo.</li>
                                <li>Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
                                <li>Te mpo di scarica a 16A is 8 ore.</li>
                                <li>Autonomia dalla rete eIettrica 62Po.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Choose;