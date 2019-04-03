import React from "react";
import Card from "./Card";
import styles from "./ContactUssection.css";
import HeadingLine from "./HeadingLine";
import Strings from "../../strings";
import address from "../images/icons/address.svg";
import phone from "../images/icons/phone.svg";
import email from "../images/icons/email.svg";
import CSS_CONSTANTS from "../css-constants";

class ContactUsSection extends React.Component {
    render() {
        return (
            <Card>
                <p className={styles.contactUsText}>{Strings.CONTACT_US_TEXT}</p>
                <HeadingLine
                    align="left"
                    color={CSS_CONSTANTS.secondaryBrandColor}
                />
                <section>
                    <p>
                        <img className="icon" src={address} alt="address icon"/>
                        {Strings.ADDRESS_TEXT}
                    </p>
                    <p>{Strings.ADDRESS}</p>
                </section>
                <section>
                    <p>
                        <img className="icon" src={phone} alt="phone icon"/>
                        {Strings.PHONE_TEXT}
                    </p>
                    <p> {Strings.PHONE} </p>
                </section>
                <section>
                    <p>
                        <img className="icon" src={email} alt="email icon" />
                        {Strings.EMAIL_TEXT}
                    </p>
                    <p>{Strings.EMAIL} </p>
                </section>
            </Card>
        );
    }
}

export default ContactUsSection;