import React from "react";
import styles from "./Card.css";
import className from "classnames/bind";
import PropTypes from "prop-types";

const cx = className.bind(styles)

class Card extends React.Component {
    render() {
        return (
            <section className={cx("card", this.props.className)}>
                {this.props.children}
            </section>
        );
    }
}

Card.propTypes = {
    className: PropTypes.string
}

export default Card;