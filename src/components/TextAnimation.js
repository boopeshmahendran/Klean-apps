import React from "react";
import styles from "./TextAnimation.css"

class TextAnimation extends React.Component {
    render() {
        const values = this.props.values;
        console.log(values);
        return (
            <span className={styles.textAnimation}>Klean</span>
        )
    }
}

export default TextAnimation;