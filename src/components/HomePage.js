import React from "react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";
import image1 from "../assets/images/tf.png";
import image2 from "../assets/images/sub.png";
// import image3 from "../assets/images/code.png";
import About from "./About";
import Technologies from "./Technologies";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import Resume from "./Resume";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import PortofioItemWithOutPhoto from "./PortfolioItemWithOutPhoto";

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
            itemTitle = {"Subassembly Ordering System"}
            imageUrl = {image2}
            description = {"A system for managing components for manufacturing. Components can be searched by model name or specific component names. We have a functionality whereby we can always choose which columns we want to have displayed and thus additionally display only the information we want. The models displayed in the main table are already filtered when extracting them from the database, then we can send them to the Polish or Korean RnD, where they can edit them to complete the data and send them on. You can approve the changes or send them back to the RnD department again. In the Korean RnD, the data can be exported to Excel. MySQL database, Java SpringBoot backend, Angular 17 frontend."}
            tech = {"JAVA, SpringBoot, Angular 17, MySQL"}
            demoUrl = {"https://marekksiazek.pl/sub"}
            githubUrl = {"https://github.com/marekksiazek/subassemblyOrderingSystemBackend"}
            githubUrlFront={"https://github.com/marekksiazek/subassemblyOrderingSystem/tree/main"}
        />
        {/* <PortfolioItem 
            itemTitle = {"Tytuł 3"}
            imageUrl = {image3}
            description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend suscipit dictum. Nulla mollis varius elementum. Phasellus nec mauris ac tortor vestibulum semper vehicula non arcu. Maecenas feugiat nisi eu velit consequat commodo. Nam placerat, lorem ac cursus faucibus, ipsum massa fermentum est, eu feugiat leo libero eu arcu. Aenean vel lobortis dui. "}
            tech = {"lista technologii"}
            demoUrl = {"url do demo"}
            githubUrl = {"https://github.com/marekksiazek"}
        /> */}
        <PortofioItemWithOutPhoto 
            itemTitle={"Scanner"}
            description={"An application to create URL code reading with a scanner connected to a computer. Communication over COM port. The application reads the barcode and then sends it to the specified URL."}
            tech={"Java 8 using AWT and Swing libraries"}
        
        />
        <PortofioItemWithOutPhoto 
            itemTitle={"Loop"}
            description={"An application designed to check if a process is running. If so, it terminates the process, deletes the indicated files and restarts the process. This function is executed in a loop at a time interval specified by the user."}
            tech={"Java 8 using AWT and Swing libraries"}
        
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