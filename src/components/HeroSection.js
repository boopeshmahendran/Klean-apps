import React from "react";
import heroImage from "../images/heroImage.png";
import styles from "./HeroSection.css";

class HeroSection extends React.Component {
    render() {
        return (
            <section className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <img src={heroImage} alt="IMac and Iphone" />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.heroLine}>
                        We build
                        <span> Klean </span>
                         apps
                    </div>
                    <button className={styles.heroButton}>Get Started</button>
                </div>
            </section>
        );
    }
}

export default HeroSection;