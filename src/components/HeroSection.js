import React from "react";
import TextAnimation from "./TextAnimation";
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
                        <span>We build </span>
                        <TextAnimation 
                            values={[
                                <span>
                                    <span style={{color: "#6e6eff"}}>Beautiful </span>
                                    <span style={{color: "#ff6e6e"}}>Websites </span>
                                </span>,
                                <span>
                                    <span style={{color: "#ff6e6e"}}>Awesome </span>
                                    <span style={{color: "#6e6eff"}}>Apps </span>
                                </span>,
                                <span>
                                    <span style={{color: "#6e6eff"}}>Creative </span>
                                    <span style={{color: "#ff6e6e"}}>Websites </span>
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