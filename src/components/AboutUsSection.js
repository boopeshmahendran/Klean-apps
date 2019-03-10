import React from "react";
import styles from "./AboutUsSection.css";
import HeadingLine from "./HeadingLine";

class AboutUsSection extends React.Component {
    render() {
        return (
            <section className={styles.aboutUs}>
                <div className={styles.header}>About Us</div>
                <HeadingLine />
                <p className={styles.body}>
                    We are a team of skilled software engineers and creative designers
                    who are focused on delivering beautiful and high quality software products
                    to our clients.
                </p>
            </section>
        );
    }
}

export default AboutUsSection;