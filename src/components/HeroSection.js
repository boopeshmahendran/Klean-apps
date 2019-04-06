import React from "react";
import styles from "./HeroSection.css";
import Carousel from "./Carousel";
import Header from "./Header";
import CSS_CONSTANTS from "../css-constants";

class HeroSection extends React.Component {
    render() {
        return (
            <section className={styles.heroSection}>
                <Header />
                <Carousel>
                    <div className={styles.heroContent + ' ' + styles.heroContent1}>
                        <div className={styles.heroLine}>
                            <p>
                                <span>
                                    We build&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    beautiful&nbsp;
                                        </span>
                                <span>
                                    and&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    heavenly
                                        </span>
                            </p>
                            <p>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    apps and websites
                                        </span>
                            </p>
                        </div>
                        <button className={styles.heroButton}>Get Started</button>
                    </div>
                    <div className={styles.heroContent + ' ' + styles.heroContent2}>
                        <div className={styles.heroLine}>
                            <p>
                                <span>
                                    We build&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    beautiful&nbsp;
                                        </span>
                                <span>
                                    and&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    heavenly
                                        </span>
                            </p>
                            <p>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    apps and websites
                                        </span>
                            </p>
                        </div>
                        <button className={styles.heroButton}>Get Started</button>
                    </div>
                    <div className={styles.heroContent + ' ' + styles.heroContent3}>
                        <div className={styles.heroLine}>
                            <p>
                                <span>
                                    We build&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    beautiful&nbsp;
                                        </span>
                                <span>
                                    and&nbsp;
                                        </span>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    heavenly
                                        </span>
                            </p>
                            <p>
                                <span style={{ color: CSS_CONSTANTS.accentColor }}>
                                    apps and websites
                                        </span>
                            </p>
                        </div>
                        <button className={styles.heroButton}>Get Started</button>
                    </div>
                </Carousel>
            </section>
        );
    }
}

export default HeroSection;