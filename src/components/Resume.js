import React from "react";
import viewIcon from "../assets/images/viewResume.svg";
import downloadResume from "../assets/images/downloadResume.svg";
import "../styles/resume_styles.css";
import pdf from "../assets/downloads/Marek Książek Resume.pdf";


export default function Resume(){

    
    return (
        <section className="resumeWrapper">
            <a href={pdf} className="linkButton" target="_blank" rel="noopener noreferrer">View resume <img src={viewIcon} alt="viewIcon" className="linkIcon" /></a>
            <a href={pdf} className="linkButton" download="Marek Książek Resume" target='_blank' rel="noreferrer">Download resume <img src={downloadResume} alt="githubIcon" className="linkIcon" /></a>
        </section>
    )
}