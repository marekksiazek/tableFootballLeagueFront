import "../styles/contactForm_styles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function ContactForm(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_ux08wsp', 'contact_form', form.current, {
            publicKey: 'erdRjr6qUsybzwM93',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        
    };

    const resetForm = (ev) => {
        ev.preventDefault();
        document.getElementById('myForm').reset();
    }


    return (
        <section className="contactFormWrapper">
            <form id="myForm" ref={form} onSubmit={resetForm} className="contactForm">
                <label htmlFor="user_name" className="nameFieldLabel">Name:</label>
                <input type="text" name="user_name" id="name" className="nameField" maxLength="255" required />
                <label htmlFor="user_email" className="emailFieldLabel">Email:</label>
                <input type="text" name="user_email" id="email" className="emailField" maxLength="255" required />
                <label htmlFor="message" className="msgFieldLabel">Message:</label>
                <textarea type="text" name="message" id="message" className="msgField" maxLength="1000" required />
                <button type="submit" className="subBtn" onClick={sendEmail}>Send</button>
            </form>
        </section>
    )
}