import React from "react";
import styles from "./SideNavBar.css";
import classNames from "classnames/bind";
import Strings from "../../strings";
import { smoothScroll } from "../utils";
import home from "../images/icons/home.svg";
import about_us from "../images/icons/about_us.svg";
import services from "../images/icons/services.svg";
import contact_us from "../images/icons/contact_us.svg";
import close from "../images/icons/close.svg";
import Brand from "./Brand";

const cx = classNames.bind(styles);

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    open() {
        this.setState({
            open: true
        });
    }

    close () {
        this.setState({
            open: false
        });
    }

    handleNavigation(e) {
        this.close();
        smoothScroll(e);
    }

    blockClicks(e) {
        e.stopPropagation();
    }

    render() {
        const classes = cx({
            sideNavBar: true,
            sideNavBarVisible: this.state.open
        });

        return (
            <section className={classes} onClick={this.close}>
                <div className={styles.sideNavContainer} onClick={this.blockClicks}>
                    <div className={styles.header}>
                        <Brand />
                        <a className={styles.closeBtn} href="#0" onClick={this.close}>
                            <img src={close} alt="close icon" />
                        </a>
                    </div>
                    <nav className={styles.navigation}>
                        <ul>
                            <li>
                                <a className={styles.navigation_item} href="#" onClick={this.handleNavigation}>
                                    <img src={home} alt="home icon" />
                                    {Strings.HOME_TEXT}
                                </a>
                            </li>
                            <li>
                                <a className={styles.navigation_item} href="#about" onClick={this.handleNavigation}>
                                    <img src={about_us} alt="about us icon" />
                                    {Strings.ABOUT_US_TEXT}
                                </a>
                            </li>
                            <li>
                                <a className={styles.navigation_item} href="#services" onClick={this.handleNavigation}>
                                    <img src={services} alt="services icon" />
                                    {Strings.SERVICES_TEXT}
                                </a>
                            </li>
                            <li>
                                <a className={styles.navigation_item} href="#getintouch" onClick={this.handleNavigation}>
                                    <img src={contact_us} alt="contact us icon" />
                                    {Strings.CONTACT_US_TEXT}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}

export default SideNavBar;