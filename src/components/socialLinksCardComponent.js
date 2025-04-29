import React from "react";
import "../global.css";
import profImg from "../assets/images/avatar-jessica.jpeg";
import LinkButton from "./linkButtonComponent";

function SocialLinksCard() {
    return (
        <div>
            <div className="socialLinksCard">
                <div className="profDetails">
                    <img src={profImg} alt="Profile Avatar" className="profImg"/>
                    <p className="profName">Jessica Randall</p>
                    <p className="profLocation">London, United Kingdom</p>
                </div>
                <div className="profLinks">
                    <p className="profDescription">"Front-end developer and avid reader"</p>
                    <div className="linksContainer">
                        <LinkButton socialMedia='GitHub' link='https://google.com.au' />
                        <LinkButton socialMedia='Frontend Mentor' link='https://google.com.au' />
                        <LinkButton socialMedia='LinkedIn' link='https://google.com.au' />
                        <LinkButton socialMedia='Twitter' link='https://google.com.au' />
                        <LinkButton socialMedia='Instagram' link='https://google.com.au' />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialLinksCard;