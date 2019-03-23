import React from "react";
import styles from "./Footer.css";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";
import instagram from "../images/icons/instagram.svg";
import logo from "../images/icons/logo.svg";
import Strings from "../strings";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.col1}>
                    <p>
                        <img src={logo} alt="logo"/>
                        <span>{Strings.BRAND_NAME}</span>
                    </p>
                    <ul>
                        <li className={styles.navLink}><a href="#0">{Strings.ABOUT_US_TEXT}</a></li>
                        <li className={styles.navLink}><a href="#0">{Strings.SERVICES_TEXT}</a></li>
                        <li className={styles.navLink}><a href="#0">{Strings.CONTACT_US_TEXT}</a></li>
                    </ul>
                </div>
                <div className={styles.col2}>
                    <p>{Strings.ADDRESS_TEXT}</p>
                    <p>{Strings.ADDRESS}</p>
                </div>
                <div className={styles.col3}>
                    <p>{Strings.FOLLOW_US}</p>
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