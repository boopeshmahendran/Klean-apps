import React from "react";
import styles from "./AboutUsSection.css";
import HeadingLine from "./HeadingLine";
import Strings from "../../strings";

class AboutUsSection extends React.Component {
    render() {
        return (
            <section id="about" className={styles.aboutUs}>
                <div className={styles.header}>{Strings.ABOUT_US_HEADER}</div>
                <hr className={styles.seperationLine} />
                <p className={styles.body}>
                    {Strings.ABOUT_US_BODY}
                </p>
            </section>
        );
    }
}

export default AboutUsSection;