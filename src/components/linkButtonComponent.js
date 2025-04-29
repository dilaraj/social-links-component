import React from "react";
import "../global.css";

function LinkButton(props) {
    let socialMedia = props.socialMedia;
    let link = props.link;

    return (
        <div className="buttonContainer">
            <div className="linkButton">
                <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                    {socialMedia}
                </a>
            </div>
            {/* <p className="socialMedia">{socialMedia}</p>
            <p>{link}</p> */}
        </div>
    );
}

export default LinkButton;