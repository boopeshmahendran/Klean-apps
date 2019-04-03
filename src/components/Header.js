import React from "react";
import Brand from "./Brand";
import styles from "./Header.css";
import home from "../images/icons/home.svg";
import about_us from "../images/icons/about_us.svg";
import services from "../images/icons/services.svg";
import contact_us from "../images/icons/contact_us.svg";
import burger from "../images/icons/burger.svg";
import Strings from "../../strings";
import { smoothScroll } from "../utils";
import SideNavBar from "./SideNavBar";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.openSideNav = this.openSideNav.bind(this);
        this.sideBarRef = React.createRef();
    }
    openSideNav() {
        this.sideBarRef.current.open();
    }
    render() {
        return (
            <header className={styles.header}>
                <SideNavBar ref={this.sideBarRef} />
                <a href="#0" onClick={this.openSideNav}>
                    <img className="icon" src={burger} alt="burger icon" />
                </a>
                <Brand />
                {/* <nav className={styles.navigation}>
                    <ul>
                        <li className={styles.navigation_item}>
                            <a href="#" onClick={smoothScroll}>
                                <img className="icon" src={home} alt="home icon" />
                                {Strings.HOME_TEXT}
                            </a>
                        </li>
                        <li className={styles.navigation_item}>
                            <a href="#about" onClick={smoothScroll}>
                                <img className="icon" src={about_us} alt="about us icon" />
                                {Strings.ABOUT_US_TEXT}
                            </a>
                        </li>
                        <li className={styles.navigation_item}>
                            <a href="#services" onClick={smoothScroll}>
                            <img className="icon" src={services} alt="services icon"/>
                            {Strings.SERVICES_TEXT}
                            </a>
                        </li>
                        <li className={styles.navigation_item}>
                            <a href="#getintouch" onClick={smoothScroll}>
                                <img className="icon" src={contact_us} alt="contact us icon" />
                                {Strings.CONTACT_US_TEXT}
                            </a>
                        </li>
                    </ul>
                </nav> */}
            </header>
        );
    }
}

export default Header;