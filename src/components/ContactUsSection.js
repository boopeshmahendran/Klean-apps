import React from "react";
import Card from "./Card";
import styles from "./ContactUssection.css";
import Strings from "../../strings";
import address from "../images/icons/address.svg";
import phone from "../images/icons/phone.svg";
import email from "../images/icons/email.svg";

class ContactUsSection extends React.Component {
    render() {
        return (
            <div className={styles.contactUsSection}>
                <section className={styles.section}>
                    <img className="icon" src={address} alt="address icon" />
                    <span>{Strings.ADDRESS}</span>
                </section>
                <section className={styles.section}>
                    <img className="icon" src={phone} alt="phone icon" />
                    {Strings.PHONE}
                </section>
                <section className={styles.section}>
                    <img className="icon" src={email} alt="email icon" />
                    {Strings.EMAIL}
                </section>
            </div>
        );
    }
}

export default ContactUsSection;