import React from "react";
import styles from "./OurServicesSection.css";
import Strings from "../../strings";
import androidIcon from "../images/icons/android.svg";
import appleIcon from "../images/icons/apple.svg";
import webIcon from "../images/icons/web.svg";
import ServiceSection from "./ServiceSection";
import HeadingLine from "./HeadingLine";

class OurServicesSection extends React.Component {
    render() {
        return (
            <section id="services" className={styles.ourServicesSection}>
                <div className={styles.header}>{Strings.SERVICES_HEADER}</div>
                <HeadingLine />
                <div className={styles.body}>
                    <ServiceSection image={androidIcon} header="Android App Development" />
                    <ServiceSection image={appleIcon} header="iOS App Development" />
                    <ServiceSection image={webIcon} header="Web Development" />
                </div>
            </section>
        );
    }
}

export default OurServicesSection;