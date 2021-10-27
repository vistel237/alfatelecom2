import React,{ useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export const Contacts = () => {
    const [ successMessage, setSuccessMessage ] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_embh3k2";
    const templateID = "template_dh5dr1j";
    const userID = "user_XIHKFO5P3NO5z6WVnAjPA";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

     const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Votre Message a étè envoyer avec succes! Nous vous recontacterons le plus-tôt possible");
          }).catch(err => console.error(`quelque chose n as pas marché ${err}`));
      };

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contacter nous</h1>
                <p>Nous serions ravi de recevoir votre besoin de les annalyser et de vous recontacter
                Alors nous vous invitons a nous contacter par ce formulaire.</p>
                <span className="success-message">{successMessage}</span>
            </div>

            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/*Name Input*/}
                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Votre Nom"
                                name="name"
                                ref={
                                    register({
                                        required: "s'il vous plais entrez votre nom",
                                        maxLength: {
                                            value: 20,
                                            message: "s'il vous plat votre nom ne dois pas depasser 20 caractéres"
                                        }
                                    })
                                }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>

                        {/*Phone Input*/}
                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Télèphone"
                                name="phone"
                                ref={
                                    register({
                                        required: "s'il vous plais entrez votre numero de telephone",
                                    })
                                }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>

                        {/*Email Input*/}
                        <div className="text-center">
                            <input
                                className="form-control"
                                placeholder="Votre Email"
                                name="email"
                                ref={
                                    register({
                                        required: "s'il vous plais entrez votre email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "email invalide"
                                        }
                                    })
                                }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>

                        {/*Subject Input*/}
                        <div className="text-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Objet"
                                name="subject"
                                ref={
                                    register({
                                        required: "s'il vous plais entrez l'objet de votre message",
                                    })
                                }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>

                    </div>
                    <div className="col-md-6 col-xs-12">
                            {/*Message*/}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Merci de decrire brevement votre projet..."
                                    name="description"
                                    ref={
                                    register({
                                        required: "s'il vous plais entrez votre message",
                                    })
                                }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                            {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">envoyer</button>
                        </div>
                </div>
            </form>
            </div>
        </div>
    )
}
