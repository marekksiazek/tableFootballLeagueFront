import React from "react";
import "../styles/portfolioItemWithOutPhoto.css";



export default function PortofioItemWithOutPhoto({itemTitle, description, tech}){
    return (
        <section className="portfolioItemWrapper">
        <p className="itemTitleText">{itemTitle}</p>
        <p className="description">Made on behalf of <a href="http://stand-by.pl" className="standByLink">Stand-by</a></p>
        <p className="description">{description}</p>
        <p className="technologies">Technologies: {tech}</p>
        
    </section>
    )
}