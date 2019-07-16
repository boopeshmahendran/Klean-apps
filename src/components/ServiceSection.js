import React from "react";
import styles from "./ServiceSection.css";
import PropTypes from 'prop-types';

class ServiceSection extends React.Component {
    render() {
        return (
            <section className={styles.serviceSection}>
                <div className={styles.imageSection}>
                    <img src={this.props.image} alt={this.props.header}/>
                </div>
                <div className={styles.contentSection}>
                    <p>{this.props.header}</p>
                </div>
            </section>
        );
    }
}

ServiceSection.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default ServiceSection;