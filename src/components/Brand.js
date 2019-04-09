import React from "react";
import styles from "./Brand.css";
import logo from "../images/icons/logo.svg";
import Strings from "../../strings";
import PropTypes from "prop-types";
import className from "classnames/bind";

const cx = className.bind(styles);

class Brand extends React.Component {
    render() {
        return (
            <div className={cx("brand", this.props.className)}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div>{Strings.BRAND_NAME}</div>
            </div>
        );
    }
}

Brand.propTypes = {
    className: PropTypes.string
}

export default Brand;