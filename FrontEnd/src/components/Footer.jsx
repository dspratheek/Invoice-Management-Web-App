import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <>
            <div id="footer">           
                <a href="www.google.com" className="link">
                    Privacy Policy
                </a>
                <span className="copy">
                    |@ 2022 HighRadius Corporation. All rights are reserved.
                </span>      
                </div>
        </>
    );
}

export default Footer;