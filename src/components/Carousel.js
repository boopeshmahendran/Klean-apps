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
        let indicators = [];
        let items = [];

        this.props.children.forEach((item, index) => {
            const indicatorClasses = cx({
                indicator: true,
                indicatorActive: index === this.state.activeIndex
            });

            const itemClasses = cx({
                [item.props.className]: true,
                item: true,
                itemActive: index === this.state.activeIndex
            });

            const itemStyle = {
                transform: `translateX(${index * -100}%)`
            };

            indicators.push(
                <li key={index} className={indicatorClasses} onClick={() => this.handleIndicatorClick(index)}>
                </li>
            );

            items.push(
                React.cloneElement(item, {
                    className: itemClasses,
                    style: itemStyle,
                    key: index
                })
            );
        });

        return (
            <div className={styles.carousel}>
                <div className={styles.itemContainer}>
                    {items}
                </div>
                <ul className={styles.indicatorContainer}>
                    {indicators}
                </ul>
            </div>
        );
    }
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Carousel;