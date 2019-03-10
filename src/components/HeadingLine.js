import React from "react";
import styles from "./HeadingLine.css"


class HeadingLine extends React.Component {
    render() {
        return (
            <hr className={styles.headingLine} />
        )
    }
}

export default HeadingLine;