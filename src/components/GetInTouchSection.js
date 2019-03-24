import React from "react";
import styles from "./GetInTouchSection.css";
import HeadingLine from "./HeadingLine";
import SendMessageSection from "./SendMessageSection";
import ContactUssection from "./ContactUsSection";
import MapSection from "./MapSection";

class GetInTouchSection extends React.Component {
    render() {
        return (
            <section id="getintouch">
                <div className={styles.header}>Get In Touch</div>
                <HeadingLine />
                <div className={styles.body}>
                    <ContactUssection />
                    <MapSection />
                    <SendMessageSection />
                </div>
            </section>
        );
    }
}

export default GetInTouchSection;