import React from "react";
import styles from "./HeadingLine.css"
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class HeadingLine extends React.Component {
    render() {
        const classes = cx({
            headingLine: true,
       });

        let styles = {};
        if (this.props.color) {
            styles = {
                borderColor: this.props.color
            };
        }

        return (
            <hr className={classes} style={styles} />
        )
    }
}

HeadingLine.propTypes = {
    color: PropTypes.string
};

export default HeadingLine;