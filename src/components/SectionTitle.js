import React from "react";
import "../styles/sectionTitle_styles.css";


export default function SectionTitle({ title, sectionId }){
    return (
        <p id={sectionId} className="titleText">{title}</p>
    )
}