import React from "react";
import logo from "../assets/images/logo_mk.svg";
import "../styles/navigation_styles.css";


export default function Navigation(){
    return (
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo_top"/>
                <ul className="navList">
                    <li className="navItem"><a href="#portfolio" className="link">Portfolio</a></li>
                    <li className="navItem"><a href="#about" className="link">About</a></li>
                    <li className="navItem"><a href="#resume" className="link">Resume</a></li>
                    <li className="navItem"><a href="#contact" className="link">Contact</a></li>
                    <li className="navItem"><a href="https://github.com/marekksiazek" className="link">Github</a></li>
                    <li className="navItem"><a href="https://www.linkedin.com/in/marek-książek-4a6947180" className="link">Linkedin</a></li>
                </ul>
            </nav>
    );
}