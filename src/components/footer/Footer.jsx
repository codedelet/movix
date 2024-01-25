import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaEnvelope,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                "Copyright © 2023 [Chitranshu Singh Tomar]. All Rights Reserved. | Designed with ❤️"
                </div>
                <div className="socialIcons">
                   
                    <a href="mailto:chitranshustg@gmail.com">
                        <span className="icon">
                             <FaEnvelope />
                         </span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/chitranshu-tomar-412655209?trk=contact-info" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaLinkedin />
                         </span>
                    </a>
                    
                    <a href="">
                        <span className="icon">
                             <FaFacebookF />
                          </span>
                    </a>
                    
                    <a href="https://www.instagram.com/chitranxhu.tomar/"><span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

