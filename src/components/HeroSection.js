import React from "react";
import styles from "./HeroSection.css";
import Carousel from "./Carousel";
import Header from "./Header";
import CSS_CONSTANTS from "../css-constants";
import heroImage1 from "../images/heroImage1.png";
import heroImage2 from "../images/heroImage2.png";
import heroImage3 from "../images/heroImage3.png";

class HeroSection extends React.Component {
    render() {
        return (
            <section className={styles.heroSection}>
                <Header />
                <Carousel>
                    <div className={styles.hero}>
                        <img src={heroImage1} />
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
                    <div className={styles.hero}>
                        <img src={heroImage2} />
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
                    <div className={styles.hero}>
                        <img src={heroImage3} />
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
                </Carousel>
            </section>
        );
    }
}

export default HeroSection;