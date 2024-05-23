import React from "react";
import england from "../assets/images/english.svg";
import germany from "../assets/images/germany.svg";
import poland from "../assets/images/poland.svg";
import "../styles/languages_styles.css";

export default function Languages(){
    return(
        <section className="languagesWrapper">
            <div className="languagesItem">
                <img src={england} alt="english" className="languagesPic"/>
                <p className="levelText">level:</p>
                <p className="langRating"><span className="placeFill">B1/</span>B2</p>
            </div>
            <div className="languagesItem">
                <img src={germany} alt="germany" className="languagesPic"/>
                <p className="levelText">level:</p>
                <p className="langRating">A1/A2</p>
            </div>
            <div className="languagesItem">
                <img src={poland} alt="poland" className="languagesPic"/>
                <p className="levelText">level:</p>
                <p className="langRating">native</p>
            </div>

        </section>
    )
}