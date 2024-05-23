import React from "react";
import "../styles/welcome_styles.css";

export default function Welcome() {
    return (
        <main className="welcome_section_wrapper">
            <section className="welcome_section">
                <p className="text1">Hello! My name is</p>
                <p className="text_name">Marek Książek</p>
                <p className="text3">I'm a Software Developer</p>
            </section>
            <section className="link_section">
                <a href="#portfolio" className="link_to_portfolio">View Portfolio</a>
            </section>
        </main>
    )
}