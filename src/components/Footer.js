import React from "react";
import styles from "./Footer.css";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";
import instagram from "../images/icons/instagram.svg";
import logo from "../images/icons/logo.svg";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.col1}>
                    <p>
                        <img src={logo} alt="logo"/>
                        <span>Klean apps</span>
                    </p>
                    <ul>
                        <li className={styles.navLink}><a href="#0">About Us</a></li>
                        <li className={styles.navLink}><a href="#0">Services</a></li>
                        <li className={styles.navLink}><a href="#0">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.col2}>
                    <p>Address</p>
                    <p>No. 123, abcd street,</p>
                    <p>Bangalore - 1234</p>
                </div>
                <div className={styles.col3}>
                    <p>Follow Us on:</p>
                    <p>
                        <img className={styles.socialIcon} src={facebook} alt="facebook" />
                        <img className={styles.socialIcon} src={instagram} alt="instagram" />
                        <img className={styles.socialIcon} src={twitter} alt="twitter" />
                        <img className={styles.socialIcon} src={linkedin} alt="linkedin" />
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;