import React from "react";
import styles from "./Header.css";
import logo from "../images/icons/logo.svg";
import home from "../images/icons/home.svg";
import about_us from "../images/icons/about_us.svg";
import services from "../images/icons/services.svg";
import contact_us from "../images/icons/contact_us.svg";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.brand}>
                    <img src={logo} alt="logo" />
                    <div className={styles.brand_name}>klean apps</div>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={home} alt="home icon"/>
                            Home
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={about_us} alt="about us icon"/>
                            About Us
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={services} alt="services icon"/>
                            Services
                        </li>
                        <li className={styles.navigation_item}>
                            <img className="icon" src={contact_us} alt="contact us icon"/>
                            Contact Us
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;