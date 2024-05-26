import React from "react";
import hobbiesPic from "../assets/images/bike.svg";
import "../styles/hobbies_styles.css";



export default function Hobbies(){
    return (
        <section className="hobbiesWrapper">
            <p className="hobbiesDescr">In addition to my main passion, which is coding, I like to devote time to other interests. I am focused on sports and healthy living. Every Monday I meet with friends to play soccer or basketball. <br></br>
            I am very fond of the sea and sailing on the lakes, and I even hold a sailing patent.
            <br></br>
            In addition, I like to be interested in what is happening in national politics and the world.</p>
            <img src={hobbiesPic} alt="hobbies" className="hobbiesPic"/>
        </section>
    )
}