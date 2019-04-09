import React from "react";
import Brand from "./Brand";
import styles from "./Footer.css";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/linkedin.svg";
import instagram from "../images/icons/instagram.svg";
import Strings from "../../strings";
import { smoothScroll } from "../utils";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <Brand />
                <div className={styles.colWrapper}>
                    <div className={styles.col1}>
                        <ul>
                            <li className={styles.navLink}><a href="#about" onClick={smoothScroll}>{Strings.ABOUT_US_TEXT}</a></li>
                            <li className={styles.navLink}><a href="#services" onClick={smoothScroll}>{Strings.SERVICES_TEXT}</a></li>
                            <li className={styles.navLink}><a href="#getintouch" onClick={smoothScroll}>{Strings.CONTACT_US_TEXT}</a></li>
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
                </div>
            </footer>
        );
    }
}

export default Footer;