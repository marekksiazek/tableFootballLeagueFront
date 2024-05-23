import React from "react";
import "../styles/contactForm_styles.css";

export default function ContactForm(){
    return (
        <section className="contactFormWrapper">
            <form action="" className="contactForm">
                <label htmlFor="name" className="nameFieldLabel">Name:</label>
                <input type="text" name="name" id="name" className="nameField" required />
                <label htmlFor="email" className="emailFieldLabel">Email:</label>
                <input type="text" name="email" id="email" className="emailField" required />
                <label htmlFor="message" className="msgFieldLabel">Message:</label>
                <textarea type="text" name="message" id="message" className="msgField" required />
                <button type="submit" className="subBtn">Send</button>
            </form>
        </section>
    )
}