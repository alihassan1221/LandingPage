import React from "react";
import why1 from '../icons/why1.png';
import why2 from '../icons/why2.png';
import why3 from '../icons/why3.png';
import panel from '../icons/panel.png';
import doc from '../icons/doc.png';
import leave from '../icons/leave.png';


const Whysire = () => {
    return (
        <div id="whysire" className="mainsire">
            <div className="whysire container">
                <div className="heading">
                    <h1>Perchè S.I.R.E.</h1>
                    <hr />
                </div>
                <div className="cards">
                    <div className="block">
                            <div className="left-section">
                                <img src={why1} alt="Icon" />
                            </div>
                            <div className="right-section">
                                <h2>Risparmio Energetico</h2>
                                <p>Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.</p>
                            </div>
                    </div>
                    <div className="block">
                            <div className="left-section">
                                <img src={why2} alt="Icon" />
                            </div>
                            <div className="right-section">
                                <h2>Mobilità Elettrica</h2>
                                <p>L'unica soluzione che rende lutilizzo di unauto elettrica veramente economico.  Lefficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.</p>
                            </div>
                    </div>
                    <div className="block">
                            <div className="left-section">
                                <img src={why3} alt="Icon" />
                            </div>
                            <div className="right-section">
                                <h2>Comunità Energetica</h2>
                                <p>Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="info-below">
                <div className="container">
                    <div className="blocks">
                        <div className="left-section">
                            <img src={panel} alt="Icon" />
                        </div>
                        <div className="right-section">
                            <h2> 110%</h2>
                            <p>Superbonus</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="left-section">
                            <img src={panel} alt="Icon" />
                        </div>
                        <div className="right-section">
                            <h2>65%</h2>
                            <p>Detrazione DOMOTICA</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="left-section">
                            <img src={doc} alt="Icon" />
                        </div>
                        <div className="right-section">
                            <p>Progettazione <br /> personalizzata</p>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="left-section">
                            <img src={leave} alt="Icon" />
                        </div>
                        <div className="right-section">
                            <p>consulenza fiscale <br /> sui bonus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whysire;