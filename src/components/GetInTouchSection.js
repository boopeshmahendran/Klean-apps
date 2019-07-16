import React from "react";
import styles from "./GetInTouchSection.css";
import SendMessageSection from "./SendMessageSection";
import ContactUssection from "./ContactUsSection";
import CSS_CONSTANTS from "../css-constants";
import mapImageWebp from "../images/map.webp";
import mapImageJpg from "../images/map.jpg";

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
                    <picture>
                        <source type="image/webp" srcset={mapImageWebp} />
                        <source type="image/jpeg" srcset={mapImageJpg} />
                        <img className={styles.bgImage} src={mapImageJpg} alt="Map image" />
                    </picture>
                    <SendMessageSection />
                    <ContactUssection />
                </div>
            </section>
        );
    }
}

export default GetInTouchSection;