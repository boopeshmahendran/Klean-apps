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
            translateX: '-102%',
            open: false,
            animatable: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);

        this.startX = 0;
        this.currentX = 0;
    }

    open() {
        this.setState({
            open: true,
            translateX: 0,
            animatable: true
        });
    }

    close () {
        this.setState({
            open: false,
            translateX: '-102%',
            animatable: true
        });
    }

    handleNavigation(e) {
        this.close();
        smoothScroll(e);
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].pageX;
        this.currentX = e.touches[0].pageX;
    }

    handleTouchMove(e) {
        this.currentX = e.touches[0].pageX;
        const translateX = Math.min(0, this.currentX - this.startX);
        this.setState({
            translateX
        });
    }

    handleTouchEnd(e) {
        const translateX = Math.min(0, this.currentX - this.startX);
        if (translateX < -100) {
            this.close();
        } else {
            this.open();
        }
    }

    blockClicks(e) {
        e.stopPropagation();
    }

    handleTransitionEnd(e) {
        this.setState({
            animatable: false
        });
    }

    render() {
        const classes = cx({
            sideNavBar: true,
            sideNavBarVisible: this.state.open,
            sideNavBarAnimatable: this.state.animatable
        });

        // if translateX does not have unit, append px to it
        let translateAmt = isNaN(this.state.translateX)? this.state.translateX : `${this.state.translateX}px`;
        const style = {
            transform: `translateX(${translateAmt})`
        };

        return (
            <section className={classes} onClick={this.close}>
                <div style={style}
                    className={styles.sideNavContainer}
                    onClick={this.blockClicks}
                    onTouchStart={this.handleTouchStart}
                    onTouchMove={this.handleTouchMove}
                    onTouchEnd={this.handleTouchEnd}
                    onTransitionEnd={this.handleTransitionEnd}
                >
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