import React from "react";
import logo from "../logo_1.png";
import {Link} from "react-scroll";

//react fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="home"><img className="logo" src={logo} alt="logo" /></Link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Accueil<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">A propos de nous</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Nos solutions</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="services" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Documentations</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar