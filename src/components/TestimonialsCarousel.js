import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Avatars Import
import Avatar1 from "../images/images/avatars/avatar-1.png";
import Avatar2 from "../images/images/avatars/avatar-2.png";
import Avatar3 from "../images/images/avatars/avatar-3.png";
import Avatar4 from "../images/images/avatars/avatar-4.png";

export const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >

            <>
                <img src={Avatar1} alt="carousel-image1" />
                <div className="myCarousel">
                <h3>Akwa Palace</h3>
                    <p>
                        c,peEF%EMZPQGKLF?FLKDJGOQDLI?GEKRQG?OLM?WKD?VPRSMLG?%MQ/WB?RPQB?E%LTK?BQE
                        CIZNEMVLKSVLK?RZ?VMSD%?VLDK?VVDF?SLKDF?.dnsl,vlsq,vdlf,bkd,bldk bld,
                    </p>
                </div>
                
            </>

            <>
                <img src={Avatar2} alt="carousel-image2" />
                <div className="myCarousel">
                    <h3>Akwa Palace</h3>
                    <p>
                        c,peEF%EMZPQGKLF?FLKDJGOQDLI?GEKRQG?OLM?WKD?VPRSMLG?%MQ/WB?RPQB?E%LTK?BQE
                        CIZNEMVLKSVLK?RZ?VMSD%?VLDK?VVDF?SLKDF?.dnsl,vlsq,vdlf,bkd,bldk bld,
                    </p>
                </div>
                
            </>

            <>
                <img src={Avatar3} alt="carousel-image3" />
                <div className="myCarousel">
                    <h3>Akwa Palace</h3>
                    <p>
                        c,peEF%EMZPQGKLF?FLKDJGOQDLI?GEKRQG?OLM?WKD?VPRSMLG?%MQ/WB?RPQB?E%LTK?BQE
                        CIZNEMVLKSVLK?RZ?VMSD%?VLDK?VVDF?SLKDF?.dnsl,vlsq,vdlf,bkd,bldk bld,
                    </p>
                </div>
                
            </>

            <>
                <img src={Avatar4} alt="carousel-image4" />
                <div className="myCarousel">
                    <h3>Akwa Palace</h3>
                    <p>
                        c,peEF%EMZPQGKLF?FLKDJGOQDLI?GEKRQG?OLM?WKD?VPRSMLG?%MQ/WB?RPQB?E%LTK?BQE
                        CIZNEMVLKSVLK?RZ?VMSD%?VLDK?VVDF?SLKDF?.dnsl,vlsq,vdlf,bkd,bldk bld,
                    </p>
                </div>
            </>
        </Carousel>
    )
}
