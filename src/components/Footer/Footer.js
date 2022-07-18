import React from 'react';
import classes from "./Footer.module.scss";
import FooterContacts from "./Contacts/FooterContacts";

const Footer = () => {
    return (
        <div className={classes.Footer_main}>
            <FooterContacts/>
        </div>
    );
};

export default Footer;