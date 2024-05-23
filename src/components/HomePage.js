import React from "react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";
import image1 from "../assets/images/tf.png"
import image2 from "../assets/images/code.png"
import image3 from "../assets/images/code.png"
import About from "./About";
import Technologies from "./Technologies";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import Resume from "./Resume";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function HomePage(){
    return (
    <>
        <Navigation />
        <Welcome />
        <SectionTitle title={"Portfolio"} sectionId={"portfolio"} />
        <PortfolioItem 
            itemTitle = {"Table Football League"}
            imageUrl = {image1}
            description = {"A very simple CRUD-type program that is used to sign up people willing to participate in games. There is a simple form to fill out with basic data, which is saved to a database. The frontend was done using Vue, Java is responsible for the backend using the SpringBoot framework, and all the data is stored in a MySQL database."}
            tech = {"JAVA, SpringBoot, Vue, MySQL"}
            demoUrl = {"https://marekksiazek.pl/tf"}
            githubUrl = {"https://github.com/marekksiazek/tableFootballLeague"}
            githubUrlFront={"https://github.com/marekksiazek/tableFootballLeagueFront/tree/main"}
        />
        <PortfolioItem 
            itemTitle = {"Tytuł 2"}
            imageUrl = {image2}
            description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend suscipit dictum. Nulla mollis varius elementum. Phasellus nec mauris ac tortor vestibulum semper vehicula non arcu. Maecenas feugiat nisi eu velit consequat commodo. Nam placerat, lorem ac cursus faucibus, ipsum massa fermentum est, eu feugiat leo libero eu arcu. Aenean vel lobortis dui. "}
            tech = {"lista technologii"}
            demoUrl = {"url do demo"}
            githubUrl = {"https://github.com/marekksiazek"}
        />
        <PortfolioItem 
            itemTitle = {"Tytuł 3"}
            imageUrl = {image3}
            description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend suscipit dictum. Nulla mollis varius elementum. Phasellus nec mauris ac tortor vestibulum semper vehicula non arcu. Maecenas feugiat nisi eu velit consequat commodo. Nam placerat, lorem ac cursus faucibus, ipsum massa fermentum est, eu feugiat leo libero eu arcu. Aenean vel lobortis dui. "}
            tech = {"lista technologii"}
            demoUrl = {"url do demo"}
            githubUrl = {"https://github.com/marekksiazek"}
        />
        <SectionTitle title={"About me"} sectionId={"about"}/>
        <About />
        <SectionTitle title={"Technologies in which I work"} sectionId={"technologies"}/>
        <Technologies />
        <SectionTitle title={"Languages"} sectionId={"languages"}/>
        <Languages />
        <SectionTitle title={"Hobbies"} sectionId={"hobbies"}/>
        <Hobbies />
        <SectionTitle title={"Resume"} sectionId={"resume"}/>
        <Resume />
        <SectionTitle title={"Contact"} sectionId={"contact"}/>
        <ContactForm />
        <Footer />
    </>
    );
}