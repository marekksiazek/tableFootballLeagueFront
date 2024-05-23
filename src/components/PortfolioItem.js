import React from "react";
import demoIcon from "../assets/images/demo.svg";
import githubIcon from "../assets/images/github.svg";
import "../styles/portfolioItem_styles.css";


export default function PortfolioItem({ itemTitle, imageUrl, description, tech,  demoUrl, githubUrl, githubUrlFront }){
    return (
        <section className="portfolioItemWrapper">
            <p className="itemTitleText">{itemTitle}</p>
            <img src={imageUrl} alt="code_screen" className="codeScreen" />
            <p className="description">{description}</p>
            <p className="technologies">Technologies: {tech}</p>
            <section className="linkWrapper">
                <a href={demoUrl} className="linkButton">Try demo <img src={demoIcon} alt="viewIcon" className="linkIcon" /></a>
                <a href={githubUrl} className="linkButton">View backend <img src={githubIcon} alt="githubIcon" className="linkIcon" /></a>
                <a href={githubUrlFront} className="linkButton">View frontend <img src={githubIcon} alt="githubIcon" className="linkIcon" /></a>
            </section>
        </section>
    )
}