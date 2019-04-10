import React from "react";
import styles from "./Process.css";
import PropTypes from 'prop-types';

class Process extends React.Component {
    render() {
        return (
            <section className={styles.process}>
                <div className={styles.number}>
                    {this.props.number}
                </div>
                <div className={styles.imageSection}>
                    <img src={this.props.image} />
                </div>
                <div className={styles.headerSection}>
                    <p>{this.props.header}</p>
                </div>
                <div className={styles.bodySection}>
                    <p>{this.props.body}</p>
                </div>
            </section>
        );
    }
}

Process.propTypes = {
    image: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Process;