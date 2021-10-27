import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Cabinet d’ingénierie d’affaires</h1>
                <Typed 
                    className="typed-text"
                    strings={[
                        "Une Idée",
                        "Un Projet",
                        "Nous Vous Accompagnons"
                    ]}
                    typeSpeed={60}
                    backSpeed={80}
                    loop
                />
                <a href="#" className="btn-main-offer">contacter nous</a>
            </div>
        </div>
    )
}

export default Header
