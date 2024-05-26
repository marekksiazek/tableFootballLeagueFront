import React from "react";
import githubPic from "../assets/images/github_footer.svg";
import linkedinPic from "../assets/images/linkedin_footer.svg";
import "../styles/footer_styles.css";

export default function Footer(){
    return (
        <footer className="footerWrapper">
            <a href="https://github.com/marekksiazek"><img src={githubPic} alt="github_pic" className="footerItem" /></a> 
            <a href="https://www.linkedin.com/in/marek-książek-4a6947180"><img src={linkedinPic} alt="linkedin_pic" className="footerItem" /></a>
        </footer>
    )
}