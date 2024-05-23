import React from "react";
import viewIcon from "../assets/images/viewResume.svg";
import downloadResume from "../assets/images/downloadResume.svg";
import "../styles/resume_styles.css";


export default function Resume(){
    return (
        <section className="resumeWrapper">
            <a href="resumePDF" className="linkButton">View resume <img src={viewIcon} alt="viewIcon" className="linkIcon" /></a>
            <a href="downloadPDF" className="linkButton">Download resume <img src={downloadResume} alt="githubIcon" className="linkIcon" /></a>
        </section>
    )
}