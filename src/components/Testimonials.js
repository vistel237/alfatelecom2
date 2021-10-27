import React from "react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Avis Clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
        </div>
    )
}
