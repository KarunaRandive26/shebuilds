import React from "react";
import { NavLink } from "react-router-dom";

const AboutCard = (props) => {
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={props.imgsrc} />
                <div className="card-body">
                    <NavLink to={props.target} className="titlename">{props.title}</NavLink>
                </div>
            </div>
        </>
    );
};

export default AboutCard;

