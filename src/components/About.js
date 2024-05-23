import React from "react";
import profPic from "../assets/images/profile_pic.png";
import "../styles/about_styles.css";


export default function About(){
    return (
        <section id="about" className="aboutWrapper">
            <img src={profPic} alt="profile_pic" className="profPic"/>
            <p className="aboutMe">I am a person with a great need for continuous development. At the moment I am creating software for LG company. I am taking part in the creation of a new intranet, and I am independently working on a system for car avigation. I want to constantly expand my range of skills and develop the ones I already have.</p>
        </section>
    )
}