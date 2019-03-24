import React from "react";
import styles from "./OurServicesSection.css";
import iphone from "../images/iphone.png";
import imac from "../images/imac.png";
import SectionLine from "./SectionLine";
import HeadingLine from "./HeadingLine";
import ServiceSection from "./ServiceSection";

class OurServicesSection extends React.Component {
    render() {
        return (
            <section id="services">
                <SectionLine></SectionLine>
                <div className={styles.header}>Our Services</div>
                <HeadingLine />
                <div className={styles.body}>
                    <ServiceSection
                     image={iphone}
                     headerText="Android / iOS Apps"
                     bodyText="Be it android, iOS or hybrid mobile applications, we develop elegant and blazingly fast mobile apps"
                     />
                    <ServiceSection
                     image={imac}
                     headerText="Web Apps"
                     bodyText="We create responsive, beautiful and highly performant web apps using the latest of web technologies such as HTML5, CSS3, React etc."
                     order="contentFirst"
                     />
                </div>
                <SectionLine></SectionLine>
            </section>
        );
    }
}

export default OurServicesSection;