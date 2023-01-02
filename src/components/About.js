import React from "react";
import AboutData from "./Data";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <>
            <h1>Services</h1>
            <h2>We are providing</h2>
            <div className="service">
               {AboutData.map((val, ind) =>{
                return <AboutCard key={ind} imgsrc={val.imgsrc} title={val.title} target={val.target}/>
               })}
            </div>
        </>
    );
};

export default About;