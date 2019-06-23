import React from "react";
import styles from "./HeroSection.css";
import Header from "./Header";
import CSS_CONSTANTS from "../css-constants";
import heroImage1 from "../images/heroImage1.png";

class HeroSection extends React.Component {
    render() {
        return (
            <section className={styles.heroSection}>
                <Header />
                    <div className={styles.hero}>
                        <img src={heroImage1} alt="hero image"/>
                        <div className={styles.heroContent}>
                            <div className={styles.heroLine}>
                                <p>
                                    {"We build "}
                                    <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                        {"beautiful "}
                                    </span>
                                    <span>
                                        {"and "}
                                    </span>
                                    <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                        {"mind blowing "}
                                    </span>
                                    <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                        {"apps and websites"}
                                    </span>
                                </p>
                            </div>
                            <button className={styles.heroButton}>Get Started</button>
                        </div>
                    </div>
            </section>
        );
    }
}

export default HeroSection;