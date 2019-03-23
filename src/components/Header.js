import React from "react";
import Brand from "./Brand";
import styles from "./Header.css";
import home from "../images/icons/home.svg";
import about_us from "../images/icons/about_us.svg";
import services from "../images/icons/services.svg";
import contact_us from "../images/icons/contact_us.svg";
import Strings from "../../strings";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <Brand />
                <nav className={styles.navigation}>
                    <ul>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={home} alt="home icon"/>
                            {Strings.HOME_TEXT}
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={about_us} alt="about us icon"/>
                            {Strings.ABOUT_US_TEXT}
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={services} alt="services icon"/>
                            {Strings.SERVICES_TEXT}
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={contact_us} alt="contact us icon"/>
                            {Strings.CONTACT_US_TEXT}
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;