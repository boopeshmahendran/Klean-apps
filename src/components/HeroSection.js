import React from "react";
import TextAnimation from "./TextAnimation";
import heroImage from "../images/heroImage.png";
import styles from "./HeroSection.css";
import CSS_CONSTANTS from "../css-constants";

class HeroSection extends React.Component {
    render() {
        return (
            <section className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <img src={heroImage} alt="IMac and Iphone" />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.heroLine}>
                        <span>We build </span>
                        <TextAnimation 
                            values={[
                                <span>
                                    <span style={{color: CSS_CONSTANTS.secondaryBrandColor}}>Beautiful </span>
                                    <span style={{color: CSS_CONSTANTS.primaryBrandColor}}>Websites </span>
                                </span>,
                                <span>
                                    <span style={{color: CSS_CONSTANTS.primaryBrandColor}}>Awesome </span>
                                    <span style={{color: CSS_CONSTANTS.secondaryBrandColor}}>Apps </span>
                                </span>,
                                <span>
                                    <span style={{color: CSS_CONSTANTS.primaryBrandColor}}>Creative </span>
                                    <span style={{color: CSS_CONSTANTS.secondaryBrandColor}}>Websites </span>
                                </span>,
                            ]}
                            animationDelay={1000}
                        />
                    </div>
                    <button className={styles.heroButton}>Get Started</button>
                </div>
            </section>
        );
    }
}

export default HeroSection;