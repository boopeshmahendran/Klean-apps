import React from "react";
import styles from "./Carousel.css";
import className from "classnames/bind";
import PropTypes from "prop-types";

const cx = className.bind(styles)

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this._animationInterval = null;
        this._animationDelay = 3000;
    }

    endAnimation() {
        clearInterval(this._animationInterval);
    }

    startAnimation() {
        this._animationInterval = setInterval(() => {
            this.setState((state, props) => {
                return {
                    activeIndex: (state.activeIndex + 1) % props.children.length
                }
            });
        }, this._animationDelay);
    }

    resetAnimation() {
        this.endAnimation();
        this.startAnimation();
    }
    
    handleIndicatorClick(index) {
        this.setState({
            activeIndex: index
        });
        this.resetAnimation();
    }

    componentDidMount() {
        this.startAnimation();
    }

    componentWillUnmount() {
        this.endAnimation();
    }

    render() {
        const carouselIndicators = this.props.children.map((item, index) => {
            const classes = cx({
                carouselIndicator: true,
                carouselIndicatorActive: index === this.state.activeIndex
            });
            
            return (
                <li key={index} className={classes} onClick={() => this.handleIndicatorClick(index)}>
                </li>
            )
        })
        return (
            <div className={styles.carousel}>
                {this.props.children[this.state.activeIndex]}
                <ul className={styles.carouselIndicatorContainer}>
                    {carouselIndicators}
                </ul>
            </div>
        );
    }
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Carousel;