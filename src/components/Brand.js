import React from "react";
import styles from "./Brand.css";
import logo from "../images/icons/logo.svg";
import Strings from "../../strings";

class Brand extends React.Component {
    render() {
        return (
            <div className={styles.brand}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div>{Strings.BRAND_NAME}</div>
            </div>
        );
    }
}

export default Brand;