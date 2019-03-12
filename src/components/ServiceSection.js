import React from "react";
import styles from "./ServiceSection.css";
import PropTypes from 'prop-types';

class ServiceSection extends React.Component {
    render() {
        const contentClassNames = styles.contentSection + ' ' +
         ((this.props.order === "contentFirst") ? styles.makeContentFirst : "");

        return (
            <section className={styles.serviceSection}>
                <div className={styles.imageSection}>
                    <img src={this.props.image} />
                </div>
                <div className={contentClassNames}>
                    <p className={styles.header}>{this.props.headerText}</p>
                    <p className={styles.body}>{this.props.bodyText}</p>
                </div>
            </section>
        );
    }
}

ServiceSection.defaultProps = {
    order: "imageFirst"
};

ServiceSection.propTypes = {
    image: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    order: PropTypes.oneOf(["imageFirst", "contentFirst"]).isRequired
};

export default ServiceSection;