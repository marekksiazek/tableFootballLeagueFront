import React from "react";
import profPic from "../assets/images/myPhoto.jpeg";
import "../styles/about_styles.css";


export default function About(){
    return (
        <section id="about" className="aboutWrapper">
            <img src={profPic} alt="profile_pic" className="profPic"/>
            <div className="aboutTextWrapper">
                <p className="aboutMe">As a Java Developer, I am passionate about creating efficient and scalable software. My programming skills have been acquired while working on complex projects in diverse business environments. I specialize in the full application lifecycle, from concept to deployment, with a strong focus on clean code and best practices.</p>
                <p className="aboutMe">My knowledge of multiple libraries and the SpringBoot framework allows me to build applications that not only meet business requirements, but are also ready for future extensions. I am a proponent of agile and CI/CD, which facilitates rapid value delivery and continuous integration of changes. In teamwork, I value communication and collaboration.</p>
                <p className="aboutMe">I believe that sharing knowledge and working together towards technical excellence, which are key to the success of any project.</p>
            </div>
            
        </section>
    )
}