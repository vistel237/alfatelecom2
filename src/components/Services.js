import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Nos Brochures</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-5">
                            <a className="hyper-link"  target="_blank" onClick={() => window.open("https://www.alfatelecoms.com/download/reception-distribution/?wpdmdl=2217")}>
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                    </div>
                                    <h3>Domotique</h3>
                                    <p>Système de réception & Distribution TV</p>
                                    
                                </div>
                            </a>
                        </div>

                        {/* - */}

                        <div className="col-md-2 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                </div>
                                <h3>Domotique</h3>
                                <p>Portier intercom & Contrôle d’accès</p>
                            </div>
                        </div>

                        {/* - */}

                        <div className="col-md-2 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                                </div>
                                <h3>Gestion</h3>
                                <p>Gestion de files d’attente & Affichage multimédia</p>
                            </div>
                        </div>
                        {/* - */}

                        <div className="col-md-2 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                                </div>
                                <h3>Gestion</h3>
                                <p>Certification de présence & Gestion de rondes</p>
                            </div>
                        </div>

                        {/* - */}
                        <div className="col-md-2 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>Broadcast</h3>
                                <p>Régie radio & Diffusion TV</p>
                            </div>
                        </div> 

                        
                        <div className="col-md-2 col-sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>Broadcast</h3>
                                <p>Alarme anti-intrusion & Sonorisation</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    )
}
