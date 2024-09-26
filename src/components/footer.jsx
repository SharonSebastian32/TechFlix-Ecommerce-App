import React from "react";
import "./footer.css";
const Footer = () => {
    return <div className="footer">
        &copy; Technoflip {new Date().getFullYear()}
    </div>;
};

export default Footer;
