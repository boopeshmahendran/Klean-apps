import React from "react";
import styles from "./GetInTouchSection.css";
import HeadingLine from "./HeadingLine";
import SendMessageSection from "./SendMessageSection";
import ContactUssection from "./ContactUsSection";

class GetInTouchSection extends React.Component {
    render() {
        return (
            <section>
                <div className={styles.header}>Get In Touch</div>
                <HeadingLine />
                <ContactUssection />
                <SendMessageSection />
            </section>
        );
    }
}

export default GetInTouchSection;