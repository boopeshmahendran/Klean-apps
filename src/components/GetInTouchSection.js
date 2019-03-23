import React from "react";
import styles from "./GetInTouchSection.css";
import HeadingLine from "./HeadingLine";
import SendMessageSection from "./SendMessageSection";

class GetInTouchSection extends React.Component {
    render() {
        return (
            <section>
                <div className={styles.header}>Get In Touch</div>
                <HeadingLine />
                <SendMessageSection />
            </section>
        );
    }
}

export default GetInTouchSection;