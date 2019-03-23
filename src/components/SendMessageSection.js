import React from "react";
import styles from "./SendMessageSection.css";
import HeadingLine from "./HeadingLine";

class SendMessageSection extends React.Component {
    render() {
        return (
            <section className={styles.sendMessageSection}>
                <p className={styles.sendMessageText}>Send a message</p>
                <HeadingLine
                    align="left"
                    color="#6E6EFF"
                />
                <form className={styles.sendMessageForm}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone (or) Email" />
                    <textarea rows="4" cols="50" placeholder="Message" />
                    <button className={styles.sendButton} type="submit">Send</button>
                </form>
            </section>
        );
    }
}

export default SendMessageSection;