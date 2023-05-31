import React from "react";
import image1 from '../images/Testoni Cristian.png';
import image2 from '../images/Gavioli.png';
import image3 from '../images/Massimo Fabi_ direttore commerciale.png';

const About = () => {
    return (
        <div id="about" className="about container">
            <div className="heading">
                <h1>Chi Siamo</h1>
                <hr />
            </div>
            <div className="about-info">
                <p>Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. <br /> Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="image-container">
                        <img src={image1} alt="Member of team" />
                    </div>
                    <div className="info-container">
                        <h4>Testoni Cristian</h4>
                        <p>Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica. </p>
                    </div>                
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={image2} alt="Member of team" />
                    </div>
                    <div className="info-container">
                        <h4>Francesco Gavioli</h4>
                        <p>Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici </p>
                    </div>                
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={image3} alt="Member of team" />
                    </div>
                    <div className="info-container">
                        <h4>Massimo Fabi</h4>
                        <p>Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori</p>
                    </div>                
                </div>
            </div>
            <div className="base">
                <blockquote>Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una soluzione ingegneristica più completa che comprende sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.</blockquote>
                <p>- Cristian Testoni -</p> 
            </div>
        </div>
    );
};

export default About;