import React from "react"
import Domo from "../domotic.jpg";

export const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-sm-12">
                    <div className="main_about_area">
                        <div className="head_title">
                        <h1 className="about-heading">Présentation de l’entreprise</h1>
                        <p>Après avoir passé 15 ans dans la distribution du matériel 
                            et l’ingénierie des signaux de télévision, l’ingénieur 
                            d’affaires internationales  fonde en 2011 au Cameroun 
                            ALFA Télécom Sarl Cabinet d’ingénierie d’affaires spécialisé 
                            dans les technologies de communication électronique et plus 
                            tard en France, ALFA Télécom SAS, une agence commerciale spécialisée 
                            dans le même domaine et proprietaire de 02 plateformes de e-commerce 
                            dénommées easyturns.com et furniturexpertise.com.
                        </p>
                    </div>
                    <div className="main_about_content">
                        <div className="row">
                            <div className="col-md-6 col-xm-12">
                                <img className="image-about" src={Domo} alt="logo" />
                            </div>
                            <div className="col-md-6 col-xm-12">
                                <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Description de l’activité
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                    Dotée d’une expérience commerciale et multi-technique dans le domaine des technologies de la communication électronique, 
                                    <strong> ALFA TELECOM</strong> apporte à ses clients une maîtrise d’œuvre globale, simple et évolutive dans leur projet d’acquisition et 
                                    d’implémentation des lignes de services suivants : La Domotique, le Broadcast et la Gestion
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Notre démarche
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={{paddingLeft: 20}}>
                                            <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                            Etude des projets avec l’assistance des fabricants
                                        </li>
                                        <li style={{paddingLeft: 20}}>
                                            <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                            Prix au départ de l’usine ou Livré à votre adresse
                                        </li>
                                        <li style={{paddingLeft: 20}}>
                                            <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                            Service après vente garanti
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Mission
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Notre activité consiste à optimiser la connexion, 
                                        pour rendre la vie facile en trois (03) dimensions :
                                    </p>
                                    <ul>
                                        <li style={{paddingLeft: 20}}>
                                        <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                        Bien comprendre le besoin avant de faire une offre
                                        </li>
                                        <li style={{paddingLeft: 20}}>
                                        <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                        Faire l’offre la plus rentable possible pour le demandeur
                                        </li>
                                        <li style={{paddingLeft: 20}}>
                                        <i className="fa fa-check" aria-hidden="true" style={{paddingRight: 10}} />
                                        Raccourcir le lien entre le fabricant et l’utilisateur
                                        </li>
                                    </ul>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
