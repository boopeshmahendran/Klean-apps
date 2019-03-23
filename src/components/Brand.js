import React from "react";
import styles from "./Brand.css";
import logo from "../images/icons/logo.svg";
import Strings from "../../strings";
import PropTypes from "prop-types";

class Brand extends React.Component {
    render() {
        const style = {
            fontSize: this.props.fontSize
        };

        return (
            <div className={styles.brand} style={style}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div>{Strings.BRAND_NAME}</div>
            </div>
        );
    }
}

Brand.defaultProps = {
    fontSize: "2rem"
}

Brand.propTypes = {
    fontSize: PropTypes.string
}

export default Brand;