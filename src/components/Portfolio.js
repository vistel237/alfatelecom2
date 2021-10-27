import React from 'react'
import Iptv from "../images/iptv_2.png";
import Iptv2 from "../images/itv2.jpg";
import Control from "../images/controlle.jpg";
import Tv from "../images/tvr2.jpg";
import Sono from "../images/sono.jpg";
import Attente from "../images/attente.jfif";
import Stv from "../images/SRD.jpg";
import Ronde from "../images/Datix2App_1-300x300.png";
//React PopupBox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";




export const Portfolio = () => {


    //Domotic_1
    const openPopupboxDomotic1 = () => {
        const content = (
        
            <div className="Modal">
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                    <div className="container">
                    <div className="carousel-caption">
                        <h2>Système TV</h2>
                        <p>Nos solutions offre une nouvelle dimension de service et divertissement 
                        permettant le traitement des signaux TV de différentes sources pour 
                        une distribution centralisée vers les points d’accès.</p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Another example headline.</h1>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                    </div>
                    </div>
                </div>
                
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Marketing messaging and featurettes
            ================================================== */}
            {/* Wrap the rest of the page in another container to center all the content. */}
            <div className="container marketing">
                {/* Three columns of text below the carousel */}
                
                {/* START THE FEATURETTES */}
                <hr className="featurette-divider" />
                <div className="row featurette">
                
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Transformez votre édifice avec un kit New age TV</h2>
                        <p className="lead">
                        New-age TV est un ensemble de solutions offrant une nouvelle dimension de service 
                        et divertissement permettant le traitement des signaux TV de différentes sources 
                        pour une distribution centralisée vers les points d’accès. La solution IPTV permet
                        de réunir sur un même réseau de donnée, la TV de Haute définition, la téléphonie, 
                        l’internet, la vidéo à la demande, la téléphonie et l’affichage dynamique.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-1" src={Iptv2} alt="image" />
                    </div>
                   
                </div>

                <hr className="featurette-divider" />

                <div className="services">
                <h1 className="py-5">Concept de la New age TV</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-5">
                                
                                    <div className="box">
                                        <div className="circle">
                                            <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                        </div>
                                        <h4>QUALITÉ, FIABILITÉ ET FLEXIBILITÉ</h4>
                                        <p>La plateforme est configurée en fonction des besoins et 
                                        caractéristiques de chaque client de manière à fournir une haute 
                                        technologie personnalisée et facile à utiliser.
                                        </p>
                                        
                                    </div>
                                
                            </div>

                            {/* - */}

                            <div className="col-md-4 col-sm-5">
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
                                    </div>
                                    <h4>ESTHÉTIQUE DE L’ÉDIFICE</h4>
                                    <p>La plateforme est conçue dans le respect des normes 
                                    internationales en matière de câblage réseaux, de 
                                    conception de baie de brassage et d’urbanisme permettant 
                                    des interventions ou maintenance facile.
                                    </p>
                                </div>
                            </div>

                            {/* - */}

                            <div className="col-md-4 col-sm-5">
                                <div className="box">
                                    <div className="circle">
                                        <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                                    </div>
                                    <h4>Gestion</h4>
                                    <p>Les éléments des différentes solutions 
                                    (SMATV-CATV-IPTV) sont rigoureusement sélectionnés 
                                    pour répondre à une utilisation intensive. Le fabriquant 
                                    offre une garantie de deux (02) ans sur tous les produits.
                                    </p>
                                </div>
                            </div>
                                               
                            
                        </div>
                    </div>
                </div>
                <div className="section-content relative">
                <div className="row" id="row-167965529">
                    <div className="col small-12 large-12"><div className="col-inner text-center" style={{padding: '40px 0px 0px 0px'}}>
                        <p style={{textAlign: 'center'}}><span style={{fontSize: '200%', color: '#ffffff'}}>Nos solutions de distribution TV &amp; de Reception TV</span></p>
                    </div></div>
                </div>
                </div>


                <hr className="featurette-divider" />

                <div className="distribution">
                <h1 className="py-5">Distribution TV résidences & bureaux</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-5">
                                
                                    <div className="box">
                                        
                                        <img className="box-img" src={Iptv2} alt="module" />
                                        <p>Modulateur TV avec audio mono, qui à partir des signaux audio 
                                        et vidéo génère un canal de TV analogique. Le canal généré se multiplexe 
                                        avec le reste des canaux de l’installation de TV. Disponible en différentes 
                                        bandes, normes et tables de canaux.
                                        </p>
                                        
                                    </div>
                                
                            </div>

                            {/* - */}

                            <div className="col-md-6 col-sm-5">
                                <div className="box">
                                    <img className="box-img" src={Iptv2} alt="module" />
                                        <p>Système sans fil d’extension de la télécommande 
                                        en 433 MHz, distance maximum 75 m sans obstacles. 
                                        Installation facile et rapide
                                        </p>
                                </div>
                            </div>                                               
                            
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="distribution-2">
                <h1 className="py-5">Réception TV résidences & bureaux</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-5">
                                
                                    <div className="box">
                                        
                                        <img className="box-img" src={Iptv2} alt="module" />
                                        <p>Antennes yagi large bande UHF / VHF ou par groupe de canaux. 
                                        Montage des réflecteurs simple et rapide, tous les éléments sont 
                                        prémontés et aucun outillage n’est nécessaire pour le montage.
                                        </p>
                                        
                                    </div>
                                
                            </div>

                            {/* - */}

                            <div className="col-md-6 col-sm-5">
                                <div className="box">
                                    <img className="box-img" src={Iptv2} alt="module" />
                                        <p>Récepteur TNT de taille réduite et au design soigné, 
                                        capable de conserver en mémoire jusqu’à 2000 chaînes (Télévision + Radio). 
                                        Réception de chaînes numériques terrestres gratuites sans besoin de changer 
                                        de poste de télévision.
                                        </p>
                                </div>
                            </div>                                               
                            
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="distribution">
                <h2 className="py-4">Station de Tête pour Hôtels. Exemple d’un traitement pour 10 chaines TV</h2>
                    <div className="container">
           
                        <div className="box">
                            
                            <p>Equipement complet de modulation stéréo ou mono, 
                            les canaux générés par l’équipement sont amplifiés avec 
                            un amplificateur large bande intégré à l’équipement. Dans 
                            cet exemple, les signaux audio et vidéo pour les modulateurs 
                            proviennent d’un récepteur satellite individuel et d’un équipement vidéo.
                            </p>
                            <img className="box-img" src={Iptv2} alt="module" />
                            
                        </div>

                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="distribution-2">
                <h2 className="py-5">Complexes résidentiels. Exemple d’une distribution bis pour 08 prises TV</h2>
                    <div className="container">
                    <div className="row featurette">
                            <div className="col-md-6">
                                <img className="img-1" src={Iptv2} alt="image" />
                            </div>
                            <div className="col-md-6">
                                <p className="lead">
                                New-age TV est un ensemble de solutions offrant une nouvelle dimension de service 
                                et divertissement permettant le traitement des signaux TV de différentes sources 
                                pour une distribution centralisée vers les points d’accès. La solution IPTV permet
                                de réunir sur un même réseau de donnée, la TV de Haute définition, la téléphonie, 
                                l’internet, la vidéo à la demande, la téléphonie et l’affichage dynamique.
                                </p>
                            </div>
                        
                        </div>
                        </div>
                    </div>

            </div>
            </div>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigDomotic1 ={
        titleBar: {
            enable: true,
            text: "Système TV & Réseaux IP"
        }
    }

    return (
        <>
        <div id="portfolio" className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="main_service_area">
                    <div className="head_title center m-y-3 wow fadeInUp">
                        <h1 className="py-5">Nos solutions</h1>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> <img src={Iptv} />
                            <div className="photos">Domotique</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Système TV &amp; <br /> Réseaux IP</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">Solution permettant le traitement des signaux TV de différentes sources pour une distribution centralisée vers…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#basicExampleModal" onClick={openPopupboxDomotic1}>
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> <img src={Control} />
                            <div className="photos">Domotique</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Portier Intercom &amp; contrôle D’accès</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">L’interphonie AV est une solution moderne de communication audio-visuelle pourles édifices Résidentiels…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> <img src={Tv} />
                            <div className="photos">Broadcast</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Régie Radio &amp; Diffusion TV</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">Le kit Radio Pro est un concept d’intégration de tout le nécessaire pour une station radio prêt à aller en onde…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> <img src={Sono} />
                            <div className="photos">Broadcast</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Sonorisation Pro &amp; Téléphonie IP</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">Le kit Sonorisation Pro est un concept d’intégration de tout le nécessaire pour une salle de conference prête…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> 
                        <img src={Attente} />
                            <div className="photos">Gestion</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Gestion de File d’attente &amp; Affichage dynamique</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">Réduisez vos temps de file d’attente, servez plus de clients et améliorez l’efficacité du personnel…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cardcontainer">
                        <div className="photo"> <img src={Ronde} />
                            <div className="photos">Gestion</div>
                        </div>
                        <div className="content">
                            <p className="txt4">Contrôle des rondes &amp; Gestion de temps</p>
                            {/* <p class="txt5">A city that never sleeps</p> */}
                            <p className="txt2">Datrix pro est la solution intelligente pour la gestion des rondes, la présence du personnel et la sécurité des…</p>
                        </div>
                        <div className="footer-card">
                            <p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
                                Savoir +
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
            <PopupboxContainer {...popupboxConfigDomotic1} />
        </>

    )
}
