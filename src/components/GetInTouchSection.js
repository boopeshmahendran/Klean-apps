import React from "react";
import styles from "./GetInTouchSection.css";
import SendMessageSection from "./SendMessageSection";
import ContactUssection from "./ContactUsSection";
import CSS_CONSTANTS from "../css-constants";

class GetInTouchSection extends React.Component {
    render() {
        return (
            <section id="getintouch" className={styles.getInTouchSection}>
                <div className={styles.header}>
                    <span style={{ color: CSS_CONSTANTS.primaryColor }}>
                        {"Let's Get "}
                    </span>
                    <span style={{ color: CSS_CONSTANTS.accentColor }}>
                        In Touch
                    </span>
                </div>
                <div className={styles.body}>
                    <SendMessageSection />
                    <ContactUssection />
                </div>
            </section>
        );
    }
}

export default GetInTouchSection;