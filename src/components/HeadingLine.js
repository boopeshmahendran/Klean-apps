import React from "react";
import styles from "./HeadingLine.css"
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class HeadingLine extends React.Component {
    render() {
        const classes = cx({
            headingLine: true,
            alignLeft: this.props.align === "left"
       });

        let styles = {};
        if (this.props.color) {
            styles = {
                "border-color": this.props.color
            };
        }

        return (
            <hr className={classes} style={styles} />
        )
    }
}

HeadingLine.defaultProps = {
    align: "center"
};

HeadingLine.propTypes = {
    align: PropTypes.oneOf(["left", "center"]),
    color: PropTypes.color
};

export default HeadingLine;