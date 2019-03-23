import React from "react";
import styles from "./TextAnimation.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class TextAnimation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.animationInterval = null;
    }

    componentDidMount() {
        this.startAnimation();
    }
    
    componentWillUnmount() {
        this.stopAnimation();
    }

    startAnimation() {
        this.animationInterval = setInterval(() => {
            this.setState({
                activeIndex: (this.state.activeIndex + 1) % this.props.values.length
            });
        }, this.props.animationDelay);
    }

    stopAnimation() {
        clearInterval(this.animationInterval);
    }

    render() {
        const valuesElList = this.props.values.map((value, index) => {
            const classes = cx({
                textAnimationValue: true,
                active: index === this.state.activeIndex
            });

            return <span key={index} className={classes}>{value}</span>
        });

        const translateAmt = ((-100 * this.state.activeIndex) / this.props.values.length);

        const sliderStyles = {
            transform: `translateY(${translateAmt}%)`
        };

        return (
            <span className={styles.textAnimation}>
                <span className={styles.slider} style={sliderStyles}>
                    {valuesElList}
                </span>
            </span>
        )
    }
}

TextAnimation.defaultProps = {
    animationDelay: 4000
}

TextAnimation.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    animationDelay: PropTypes.number
}

export default TextAnimation;