import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";

export const Footer = () => {
    return (
        <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Adresse France :</p>
              <p>8, Rue Victor Laloux 37 000 Tours - France</p>
              
            </div>
            <div className="d-flex">
            <p>Adresse Cameroun :</p>
            <p>Avenue du Docteur Jamot - Douala cameroun</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Messagerie </p>
            </div>
            <div className="d-flex">
            <p>alfatelecoms@yahoo.fr</p>
            </div>
            <div className="d-flex">
            <p>info@alfatelecoms.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Cameroun : </p>
              <a href="tel:+237 243 08 99 68"> +237 243 08 99 68</a>
            </div>
            <div className="d-flex">
            <p>Cameroun : </p>
              <a href="tel:+237 693 21 15 51">+237 693 21 15 51</a>
            </div>
            <div className="d-flex">
            <p>France : </p>
              <a href="tel:+33 643 146 961">+33 643 146 961</a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Alfa Telecoms | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}
