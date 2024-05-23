import React from "react";
import threeStar from "../assets/images/three_star.svg";
import fourStar from "../assets/images/four_star.svg";
import fiveStar from "../assets/images/five_star.svg";
import "../styles/technologies_styles.css";

export default function Technologies(){
    return (
        <section className="technologies_wrapper">
            <div className="techItem">
                <p className="techName">Java</p>
                <img src={fiveStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">SpringBoot</p>
                <img src={fiveStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">React</p>
                <img src={threeStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">JavaScript</p>
                <img src={threeStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">GIT</p>
                <img src={fourStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">HTML</p>
                <img src={fourStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">CSS</p>
                <img src={fourStar} alt="rating" className="rating"/>
            </div>
            <div className="techItem">
                <p className="techName">SQL</p>
                <img src={fourStar} alt="rating" className="rating"/>
            </div>
        </section>
    )
}