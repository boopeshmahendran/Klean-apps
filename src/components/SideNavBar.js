import React from "react";
import styles from "./SideNavBar.css";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({
            open: true
        });
    }

    close () {
        this.setState({
            open: false
        });
    }

    blockClicks(e) {
        e.stopPropagation();
    }

    render() {
        const classes = cx({
            sideNavBar: true,
            sideNavBarVisible: this.state.open
        });

        return (
            <section className={classes} onClick={this.close}>
                <div className={styles.sideNavContainer} onClick={this.blockClicks}>
                    <p>Hello world</p>
                    <p>Testing</p>
                    <p>Testing 123</p>
                    <p>Cool</p>
                    <p>Messages</p>
                </div>
            </section>
        );
    }
}

export default SideNavBar;