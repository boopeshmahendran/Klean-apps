import React from "react";
import styles from "./Header.css";
import logo from "../images/logo.svg";
import home_icon from "../images/home_icon.svg";
import about_us_icon from "../images/about_us_icon.svg";
import services_icon from "../images/services_icon.svg";
import contact_us_icon from "../images/contact_us_icon.svg";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.header__brand}>
                    <img src={logo} alt="logo" />
                    <h2>klean apps</h2>
                </div>
                <nav className={styles.header__navigation}>
                    <ul>
                        <li className={styles.header__navigation_item}>
                            <img src={home_icon} alt="home icon"/>
                            Home
                        </li>
                        <li className={styles.header__navigation_item}>
                            <img src={about_us_icon} alt="about us icon"/>
                            About Us
                        </li>
                        <li className={styles.header__navigation_item}>
                            <img src={services_icon} alt="services icon"/>
                            Services
                        </li>
                        <li className={styles.header__navigation_item}>
                            <img src={contact_us_icon} alt="contact us icon"/>
                            Contact Us
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;