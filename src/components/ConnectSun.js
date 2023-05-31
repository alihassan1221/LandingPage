import React from "react";
import money from '../icons/money.png';
import sun from '../icons/sun.png';
import curve from '../icons/curve.png';
import setting from '../icons/setting.png';

const Connect = () => {
    return (
        <div className="connect">
            <div className="heading">
                <h1>Connettiti al sole anche tu</h1>
                <hr />
            </div>
            <div className="boxes container">
                <div className="border-box">
                    <div className="box">
                        <div className="box-img">
                            <img src={money} alt="moneyicon"/>
                        </div>
                        <div className="title">
                            <h2>Richiedi un Preventivo</h2>
                            <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn</p>
                        </div>
                    </div>
                </div>
                <div className="border-box">
                    <div className="box">
                        <div className="box-img">
                            <img src={curve} alt="moneyicon"/>
                        </div>
                        <div className="title">
                            <h2>Verifica la compatibilitâ</h2>
                            <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn</p>
                        </div>
                    </div>
                </div>
                <div className="border-box">
                    <div className="box">
                        <div className="box-img">
                            <img src={setting} alt="moneyicon"/>
                        </div>
                        <div className="title">
                            <h2>Installazione</h2>
                            <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn</p>
                        </div>
                    </div>
                </div>
                <div className="border-box">
                    <div className="box">
                        <div className="box-img">
                            <img src={sun} alt="moneyicon"/>
                        </div>
                        <div className="title">
                            <h2>Enjoy your Sun Power</h2>
                            <p>Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze ditilizzn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <button className="contact-button">Collegati al sole</button>
            </div>
        </div>
    );
};

export default Connect;