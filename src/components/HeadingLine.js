import React from "react";
import styles from "./HeadingLine.css"
import PropTypes from 'prop-types';
import classNames from 'classnames';


class HeadingLine extends React.Component {
    render() {
        const classes = classNames({
            [styles.headingLine]: true,
            [styles.alignLeft]: this.props.align === "left"
        });

        return (
            <hr className={classes} />
        )
    }
}

HeadingLine.defaultProps = {
    align: "center"
};

HeadingLine.propTypes = {
    align: PropTypes.oneOf(["left", "center"]),
};

export default HeadingLine;