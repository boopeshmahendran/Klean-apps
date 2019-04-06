import React from "react";
import styles from "./OurServicesSection.css";
import SectionLine from "./SectionLine";
import HeadingLine from "./HeadingLine";

class OurServicesSection extends React.Component {
    render() {
        return (
            <section id="services">
                <SectionLine></SectionLine>
                <div className={styles.header}>Our Services</div>
                <HeadingLine />
                <div className={styles.body}>
                </div>
                <SectionLine></SectionLine>
            </section>
        );
    }
}

export default OurServicesSection;