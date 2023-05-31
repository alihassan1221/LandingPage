import React from "react";
import minus from '../icons/minus.png';
import plus from '../icons/plus.png';

const Frequently = () => {
    return (
        <div className="FAQs container">
            <div className="heading">
                <h2>Frequently Asked Questions</h2>
                <hr />
            </div>
            <div className="questions">
                <div className="question-box">
                    <div className="question">
                        <img src={minus} alt="minusicon"/>
                        <h4>Dove si monta S.I.R.E.?</h4>
                    </div>
                    <div>
                        <p>S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra </p>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>Chi monta l’impianto S.I.R.E.?</h4>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>Quanto tempo impiega l’installazione?</h4>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>E’ necessario richiedere autorizzazioni al condominio?</h4>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>E’ necessario predisporre pratiche per il GSE?</h4>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>L’impianto è garantito?</h4>
                    </div>
                </div>
                <div className="question-box">
                    <div className="question">
                        <img src={plus} alt="minusicon"/>
                        <h4>E’ possibile usufruire di bonus fiscali?</h4>
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <button className="contact-button">Collegati al sole</button>
            </div>
        </div>
    );
};

export default Frequently; 